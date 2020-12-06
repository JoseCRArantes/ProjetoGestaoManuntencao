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
        [Authorize(Roles = "Admin, Utilizador, Convidado")]
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
        /// Método para o USER saber o que tem a fazer.
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "Admin, Utilizador")]
        public IQueryable<PedidoManutPreventiva> GetPedidosPreventivaUserOK()
        {

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
        [Authorize(Roles = "Admin, Utilizador, Convidado")]
        public PedidoPreventivaDtoCount GetPedidoManutCurativa(int pedidosPerPage, int currentPage, int grupoMaquina, string dataInicio, string dataFim, int equipamentoId)
        {

            PedidoPreventivaDtoCount pedidoPreventivaDtoCount = new PedidoPreventivaDtoCount();
           
            //Filtro com data inicio e data fim
            if (grupoMaquina == 0 && equipamentoId==0)
            {
                DateTime dataInicioConvertida = DateTime.ParseExact(dataInicio, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);
                DateTime dataFimConvertida = DateTime.ParseExact(dataFim, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);
                dataFimConvertida.AddDays(1);
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


           

            //Pesquisa com grupo maquina.
            if (grupoMaquina !=0 && equipamentoId ==0)
            {
                DateTime dataFimConvertida = DateTime.ParseExact(dataFim, "yyyy-MM-dd",
                         System.Globalization.CultureInfo.InvariantCulture);
                DateTime dataInicioConvertida = DateTime.ParseExact(dataInicio, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);
                dataFimConvertida.AddDays(1);

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
            if (grupoMaquina !=0 && equipamentoId !=0)
            {



                DateTime dataInicioConvertida = DateTime.ParseExact(dataInicio, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);
                DateTime dataFimConvertida = DateTime.ParseExact(dataFim, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);

                dataFimConvertida.AddDays(1); //Adiciona 1 dia à data fim, por definicão e como exemplo, 
                                              // o dia 1 de Janeiro conta até ás 00H00 e não às 23h:59.


                IQueryable<PedidoPreventivaDto> pMpreventiva =
                    from eq in db.Equipamento
                    from c in db.AspNetUsers
                    from p in db.PedidoManutPreventiva
                    where p.UtilizadorIDUser == c.Id
                    where (p.IDEquipamento == eq.IDEquipamento && eq.IDGrupoM == grupoMaquina && p.IDEquipamento == equipamentoId &&
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
                DataPedido = DateTime.Now 
            };
        }



        /// <summary>
        /// DTO para a inserção de manutenção p/ um determinado grupo de máquinas.
        /// </summary>
        /// <param name="manutPreventivaGrupoMaquina"></param>
        /// <returns></returns>
        [Authorize(Roles = "Admin")]
        private PedidoManutPreventiva PedidosPrevDtoToManutPreventivaGrMaquina(ManutPreventivaGrupoMaquina manutPreventivaGrupoMaquina)
        {
            AspNetUsers aspNetUsers = db.AspNetUsers.FirstOrDefault(a => a.UserName == manutPreventivaGrupoMaquina.UtilizadorIDUser);
            
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
        [Authorize(Roles = "Admin, Utilizador,Convidado")]
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
        [Authorize(Roles = "Admin")]
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



        // DELETE: api/PedidosPreventivas/5
        [Authorize(Roles = "Admin")]
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