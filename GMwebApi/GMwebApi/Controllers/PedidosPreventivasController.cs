using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using GMwebApi.Models;
using GMwebApi.DTO;
using System.Threading;
using System.Web.Security;
using System.Web;
using System.Security.Claims;
using Microsoft.Owin.Security.OAuth;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity;
using Dapper;

namespace GMwebApi.Controllers
{
    [Authorize]
    public class PedidosPreventivasController : ApiController
    {
        private BDGestaoManutencaoEntities1 db = new BDGestaoManutencaoEntities1();


        // GET: api/PedidosPreventivas/5
        [ResponseType(typeof(PedidoManutPreventiva))]
        public async Task<IHttpActionResult> GetPedidoManutPreventiva(int id)
        {
            PedidoManutPreventiva pedidoManutPreventiva = await db.PedidoManutPreventiva.FindAsync(id);
            if (pedidoManutPreventiva == null)
            {
                return NotFound();
            }

            return Ok(pedidoManutPreventiva);
        }

        /// <summary>
        /// Método para o USER saber o que faz ao abrir a App
        /// </summary>
        /// <returns></returns>
        public IQueryable<PedidoManutPreventiva> GetPedidosPreventivaUserOK()
        {
            var result = db.Database.Connection.Query("Select * from PedidoManutPreventiva").AsList();

            #region ##### Código anterior #####
            /*IQueryable<PedidoPreventivaDto> pMpreventiva = //from a in db.AspNetUsers
                        from p in db.PedidoManutPreventiva
                        from i in db.IntervencaoPreventiva.Where(o => o.PedidoManutPreventivaID == p.ID).DefaultIfEmpty()
                        where p.DataLimiteManutencaoPrev.Value != null
                        //where p.UtilizadorIDUser == user                           
                        orderby p.DataLimiteManutencaoPrev ascending
                        select new PedidoPreventivaDto
                        {
                            IDPedido = p.ID,
                           // UtilizadorIDUser = a.Nome,
                            IDEquipamento = p.IDEquipamento,
                            Descricao = p.Descricao,
                            DataPedido = p.DataPedido,
                            DataLimiteManutencaoPrev = p.DataLimiteManutencaoPrev
                        };

            */
            // .Where(ped => ped.DataLimiteManutencaoPrev.Value != null)
            #endregion

            var user = User.Identity.GetUserId();

            var inters = db.IntervencaoPreventiva
                .Select(inter => inter.PedidoManutPreventivaID);

            var peds = db.PedidoManutPreventiva
                .Where(ped => !inters.Contains(ped.ID))
                .Where(ped => ped.DataLimiteManutencaoPrev.Value != null)
                .Where(ped => ped.UtilizadorIDUser == user)
                .Select(ped => ped).Distinct();

            return peds;

        }


        //GET: api/PedidoManutCurativas
        public PedidoPreventivaDtoCount GetPedidoManutCurativa(int pedidosPerPage, int currentPage, int grupoMaquina, string dataInicio, string dataFim)
        {

            PedidoPreventivaDtoCount pedidoPreventivaDtoCount = new PedidoPreventivaDtoCount();
           
            //Pesquisa sem filtros
            if (grupoMaquina == 0 && dataInicio== "01-01-1990" && dataFim== "01-01-1990")
            {
                IQueryable<PedidoPreventivaDto> pMpreventiva =

                  from c in db.AspNetUsers
                  from p in db.PedidoManutPreventiva
                  where p.UtilizadorIDUser == c.Id
                  orderby p.DataPedido descending
                  select new PedidoPreventivaDto
                  {
                      IDPedido = p.ID,
                      UtilizadorIDUser = c.Nome,
                      IDEquipamento = p.IDEquipamento,
                      Descricao = p.Descricao,
                      DataPedido = p.DataPedido,
                      DataLimiteManutencaoPrev = p.DataLimiteManutencaoPrev
                  };

                IQueryable<PedidoPreventivaDto> result = pMpreventiva.Skip(
                    pedidosPerPage * (currentPage - 1)).Take(pedidosPerPage);

                pedidoPreventivaDtoCount = new PedidoPreventivaDtoCount()
                {
                    PedidoManutPreventivoList = result,
                    CountPedidos = pMpreventiva.Count()
                };

            }

            //Pesquisa sem grupo de máquina, mas com filtro "date a partir de"
            if (grupoMaquina == 0 && dataInicio!="0" && dataFim =="0")
            {
                DateTime dataInicioConvertida = DateTime.ParseExact(dataInicio, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);

                IQueryable<PedidoPreventivaDto> pMpreventiva =

                  from c in db.AspNetUsers
                  from p in db.PedidoManutPreventiva
                  where (p.UtilizadorIDUser == c.Id && p.DataPedido>=dataInicioConvertida)
                  orderby p.DataPedido descending
                  select new PedidoPreventivaDto
                  {
                      IDPedido = p.ID,
                      UtilizadorIDUser = c.Nome,
                      IDEquipamento = p.IDEquipamento,
                      Descricao = p.Descricao,
                      DataPedido = p.DataPedido,
                      DataLimiteManutencaoPrev = p.DataLimiteManutencaoPrev
                  };

                IQueryable<PedidoPreventivaDto> result = pMpreventiva.Skip(
                    pedidosPerPage * (currentPage - 1)).Take(pedidosPerPage);

                pedidoPreventivaDtoCount = new PedidoPreventivaDtoCount()
                {
                    PedidoManutPreventivoList = result,
                    CountPedidos = pMpreventiva.Count()
                };

            }

            //Filtro com apenas DataFim 
            if (grupoMaquina == 0 && dataInicio == "01-01-1990" && dataFim != "01-01-1990")
            {
                DateTime dataFimConvertida = DateTime.ParseExact(dataFim, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);

                IQueryable<PedidoPreventivaDto> pMpreventiva =

                  from c in db.AspNetUsers
                  from p in db.PedidoManutPreventiva
                  where (p.UtilizadorIDUser == c.Id && p.DataPedido <= dataFimConvertida)
                  orderby p.DataPedido descending
                  select new PedidoPreventivaDto
                  {
                      IDPedido = p.ID,
                      UtilizadorIDUser = c.Nome,
                      IDEquipamento = p.IDEquipamento,
                      Descricao = p.Descricao,
                      DataPedido = p.DataPedido,
                      DataLimiteManutencaoPrev = p.DataLimiteManutencaoPrev
                  };

                IQueryable<PedidoPreventivaDto> result = pMpreventiva.Skip(
                    pedidosPerPage * (currentPage - 1)).Take(pedidosPerPage);

                pedidoPreventivaDtoCount = new PedidoPreventivaDtoCount()
                {
                    PedidoManutPreventivoList = result,
                    CountPedidos = pMpreventiva.Count()
                };

            }

            //Filtro com data inicio e data fim
            if (grupoMaquina == 0 && dataInicio != "01-01-1990" && dataFim != "01-01-1990")
            {
                DateTime dataInicioConvertida = DateTime.ParseExact(dataInicio, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);
                DateTime dataFimConvertida = DateTime.ParseExact(dataFim, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);

                IQueryable<PedidoPreventivaDto> pMpreventiva =

                  from c in db.AspNetUsers
                  from p in db.PedidoManutPreventiva
                  where (p.UtilizadorIDUser == c.Id && p.DataPedido>=dataInicioConvertida &&  p.DataPedido <= dataFimConvertida)
                  orderby p.DataPedido descending
                  select new PedidoPreventivaDto
                  {
                      IDPedido = p.ID,
                      UtilizadorIDUser = c.Nome,
                      IDEquipamento = p.IDEquipamento,
                      Descricao = p.Descricao,
                      DataPedido = p.DataPedido,
                      DataLimiteManutencaoPrev = p.DataLimiteManutencaoPrev
                  };

                IQueryable<PedidoPreventivaDto> result = pMpreventiva.Skip(
                    pedidosPerPage * (currentPage - 1)).Take(pedidosPerPage);

                pedidoPreventivaDtoCount = new PedidoPreventivaDtoCount()
                {
                    PedidoManutPreventivoList = result,
                    CountPedidos = pMpreventiva.Count()
                };

            }


            //Filtro apenas com grupo de máquina.
            if (grupoMaquina>0 && dataInicio == "01-01-1990" && dataFim == "01-01-1990")
            {

                IQueryable<PedidoPreventivaDto> pMpreventiva =
                    from eq in db.Equipamento
                    from c in db.AspNetUsers
                    from p in db.PedidoManutPreventiva
                    where p.UtilizadorIDUser == c.Id
                    where (p.IDEquipamento == eq.IDEquipamento && eq.IDGrupoM == grupoMaquina)
                    
                    orderby p.DataPedido descending
                    select new PedidoPreventivaDto
                  {
                      IDPedido = p.ID,
                      UtilizadorIDUser = c.Nome,
                      IDEquipamento = p.IDEquipamento,
                      Descricao = p.Descricao,
                      DataPedido = p.DataPedido,
                      DataLimiteManutencaoPrev = p.DataLimiteManutencaoPrev
                  };

                IQueryable<PedidoPreventivaDto> result = pMpreventiva.Skip(
                    pedidosPerPage * (currentPage - 1)).Take(pedidosPerPage);

                pedidoPreventivaDtoCount = new PedidoPreventivaDtoCount()
                {
                    PedidoManutPreventivoList = result,
                    CountPedidos = pMpreventiva.Count()
                };
            }

            //Pesquisa com todos os filtros ativos.
            if (grupoMaquina > 0 && dataInicio != "01-01-1990" && dataFim != "01-01-1990")
            {
                DateTime dataFimConvertida = DateTime.ParseExact(dataFim, "yyyy-MM-dd",
                         System.Globalization.CultureInfo.InvariantCulture);
                DateTime dataInicioConvertida = DateTime.ParseExact(dataInicio, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);

                IQueryable<PedidoPreventivaDto> pMpreventiva =
                    from eq in db.Equipamento
                    from c in db.AspNetUsers
                    from p in db.PedidoManutPreventiva
                    where p.UtilizadorIDUser == c.Id
                    where (p.IDEquipamento == eq.IDEquipamento && eq.IDGrupoM == grupoMaquina &&
                    p.DataPedido >= dataInicioConvertida && p.DataPedido <= dataFimConvertida) 
                    orderby p.DataPedido descending
                    select new PedidoPreventivaDto
                    {
                        IDPedido = p.ID,
                        UtilizadorIDUser = c.Nome,
                        IDEquipamento = p.IDEquipamento,
                        Descricao = p.Descricao,
                        DataPedido = p.DataPedido,
                        DataLimiteManutencaoPrev = p.DataLimiteManutencaoPrev
                    };

                IQueryable<PedidoPreventivaDto> result = pMpreventiva.Skip(
                    pedidosPerPage * (currentPage - 1)).Take(pedidosPerPage);

                pedidoPreventivaDtoCount = new PedidoPreventivaDtoCount()
                {
                    PedidoManutPreventivoList = result,
                    CountPedidos = pMpreventiva.Count()
                };
            }

            //Pesquisa com grupo maquina e data inicio.
            if (grupoMaquina > 0 && dataInicio != "01-01-1990" && dataFim == "01-01-1990")
            {

                DateTime dataInicioConvertida = DateTime.ParseExact(dataInicio, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);

                IQueryable<PedidoPreventivaDto> pMpreventiva =
                    from eq in db.Equipamento
                    from c in db.AspNetUsers
                    from p in db.PedidoManutPreventiva
                    where p.UtilizadorIDUser == c.Id
                    where (p.IDEquipamento == eq.IDEquipamento && eq.IDGrupoM == grupoMaquina &&
                    p.DataPedido >= dataInicioConvertida)
                    orderby p.DataPedido descending
                    select new PedidoPreventivaDto
                    {
                        IDPedido = p.ID,
                        UtilizadorIDUser = c.Nome,
                        IDEquipamento = p.IDEquipamento,
                        Descricao = p.Descricao,
                        DataPedido = p.DataPedido,
                        DataLimiteManutencaoPrev = p.DataLimiteManutencaoPrev
                    };

                IQueryable<PedidoPreventivaDto> result = pMpreventiva.Skip(
                    pedidosPerPage * (currentPage - 1)).Take(pedidosPerPage);

                pedidoPreventivaDtoCount = new PedidoPreventivaDtoCount()
                {
                    PedidoManutPreventivoList = result,
                    CountPedidos = pMpreventiva.Count()
                };
            }

            //Pesquisa com grupo maquina e data fim
            if (grupoMaquina > 0 && dataInicio == "01-01-1990" && dataFim != "01-01-1990")
            {

                DateTime dataFimConvertida = DateTime.ParseExact(dataFim, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);

                IQueryable<PedidoPreventivaDto> pMpreventiva =
                    from eq in db.Equipamento
                    from c in db.AspNetUsers
                    from p in db.PedidoManutPreventiva
                    where p.UtilizadorIDUser == c.Id
                    where (p.IDEquipamento == eq.IDEquipamento && eq.IDGrupoM == grupoMaquina &&
                    p.DataPedido <= dataFimConvertida)
                    orderby p.DataPedido descending
                    select new PedidoPreventivaDto
                    {
                        IDPedido = p.ID,
                        UtilizadorIDUser = c.Nome,
                        IDEquipamento = p.IDEquipamento,
                        Descricao = p.Descricao,
                        DataPedido = p.DataPedido,
                        DataLimiteManutencaoPrev = p.DataLimiteManutencaoPrev
                    };

                IQueryable<PedidoPreventivaDto> result = pMpreventiva.Skip(
                    pedidosPerPage * (currentPage - 1)).Take(pedidosPerPage);

                pedidoPreventivaDtoCount = new PedidoPreventivaDtoCount()
                {
                    PedidoManutPreventivoList = result,
                    CountPedidos = pMpreventiva.Count()
                };
            }


            return pedidoPreventivaDtoCount;
    }


       
        /// DTO de um post simples para inserir num método POST.
        private PedidoManutPreventiva PedidoMPreventivaDtoTOPedidoMPreventiva(PedidoPreventivaDto pedidoManutPreventivaDto)
        {
            var user = User.Identity.GetUserId();
            return new PedidoManutPreventiva()
            {
                UtilizadorIDUser = (string)user,
                IDEquipamento = pedidoManutPreventivaDto.IDEquipamento,
                Descricao = pedidoManutPreventivaDto.Descricao,
                DataPedido = DateTime.Now //pedidoManutCurativaDto.DataPedido
                //public Nullable<int> FichaManutencaoID { get; set; }
                //public Nullable<System.DateTime> DataLimiteManutencaoPrev { get; set; }
            };
        }



        /// <summary>
        /// DTO para a inserção de manutenção p/ um determinado grupo de máquinas.
        /// </summary>
        /// <param name="manutPreventivaGrupoMaquina"></param>
        /// <returns></returns>
        private PedidoManutPreventiva PedidosPrevDtoToManutPreventivaGrMaquina(ManutPreventivaGrupoMaquina manutPreventivaGrupoMaquina)
        {
            AspNetUsers aspNetUsers = db.AspNetUsers.FirstOrDefault(a => a.UserName == manutPreventivaGrupoMaquina.UtilizadorIDUser);

            //var user = User.Identity.GetUserId();
            
            {
                return new PedidoManutPreventiva()
                {
                    UtilizadorIDUser = aspNetUsers.Id,
                    DataPedido = DateTime.Now,
                    DataLimiteManutencaoPrev = (DateTime)manutPreventivaGrupoMaquina.DataLimiteManutencaoPrev,
                    Descricao = manutPreventivaGrupoMaquina.Descricao
                    // IDEquipamento = (int)manutPreventivaGrupoMaquina.IDEquipamento,
                };
            }            
        }

        /// <summary>
        /// POST manutenção preventiva simples.
        /// </summary>
        /// <param name="pedidoManutCurativaDto"></param>
        /// <returns></returns>
        [ResponseType(typeof(PedidoManutPreventiva))]
        public async Task<IHttpActionResult> PostPedidoManutPreventivaSimples(PedidoPreventivaDto pedidoManutPreventivaDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            PedidoManutPreventiva pedidoManutPreventiva = PedidoMPreventivaDtoTOPedidoMPreventiva(pedidoManutPreventivaDto);
            db.PedidoManutPreventiva.Add(pedidoManutPreventiva);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PedidoManutPreventivaExists(pedidoManutPreventiva.ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = pedidoManutPreventiva.ID }, pedidoManutPreventiva);
        }


        /// <summary>
        /// Lançamento de vários pedidos ManutPreventiva, para determinado USER, 
        /// determinado Grupo de Máquina, com data em que foi lançado
        /// e com data limite para o USER fazer a manutenção.
        /// </summary>
        /// <param name="grupoMaquina"></param>
        /// <param name="manPrevGrMaquina"></param>
        /// <returns></returns>
        [ResponseType(typeof(int))]
        public async Task<IHttpActionResult> PostPedidoManutPreventivaMultiplos(int grupoMaquina, ManutPreventivaGrupoMaquina manPrevGrMaquina)
        {
            int count = 0;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            foreach (Equipamento eq in db.Equipamento)
            {
                if (grupoMaquina == eq.IDGrupoM)
                {
                    PedidoManutPreventiva pedidoManutPreventiva = PedidosPrevDtoToManutPreventivaGrMaquina(manPrevGrMaquina);
                    pedidoManutPreventiva.IDEquipamento = eq.IDEquipamento;
                    db.PedidoManutPreventiva.Add(pedidoManutPreventiva);
                    count++;
                }
            }
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                return Conflict();
            }
            return Ok(count);
        }



        //POST: api/PedidosPreventivas
        //[ResponseType(typeof(PedidoManutPreventiva))]
        // public async Task<IHttpActionResult> PostPedidoManutPreventivaSingle(PedidoManutPreventiva pedidoManutPreventiva)
        // {
        //     if (!ModelState.IsValid)
        //     {
        //         return BadRequest(ModelState);
        //     }

        //     db.PedidoManutPreventiva.Add(pedidoManutPreventiva);
        //     await db.SaveChangesAsync();

        //     return CreatedAtRoute("DefaultApi", new { id = pedidoManutPreventiva.ID }, pedidoManutPreventiva);
        // }

        // PUT: api/PedidosPreventivas/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPedidoManutPreventiva(int id, PedidoManutPreventiva pedidoManutPreventiva)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pedidoManutPreventiva.ID)
            {
                return BadRequest();
            }

            db.Entry(pedidoManutPreventiva).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PedidoManutPreventivaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // DELETE: api/PedidosPreventivas/5
        [ResponseType(typeof(PedidoManutPreventiva))]
        public async Task<IHttpActionResult> DeletePedidoManutPreventiva(int id)
        {
            PedidoManutPreventiva pedidoManutPreventiva = await db.PedidoManutPreventiva.FindAsync(id);
            if (pedidoManutPreventiva == null)
            {
                return NotFound();
            }

            db.PedidoManutPreventiva.Remove(pedidoManutPreventiva);
            await db.SaveChangesAsync();

            return Ok(pedidoManutPreventiva);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PedidoManutPreventivaExists(int id)
        {
            return db.PedidoManutPreventiva.Count(e => e.ID == id) > 0;
        }
    }
}