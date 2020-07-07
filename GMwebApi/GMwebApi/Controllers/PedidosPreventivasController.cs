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
        /// Método para retornar pedidos atribuidos ao user em sessão. 
        /// O objetivo é que o User ao fazer sessão, saiba que trabalhos tem a fazer, até determinada data.
        /// FALTA COMPLETAR
        /// ##########################################
        /// ##########################################
        /// ##########################################
        /// </summary>
        /// <returns></returns>
        public IQueryable<PedidoPreventivaDto> GetPedidoManutCurativaUser()
        {
            var user = User.Identity.GetUserId();
  
            IQueryable<PedidoPreventivaDto> pMpreventiva =
                  from c in db.AspNetUsers
                  from p in db.PedidoManutPreventiva
                  where p.UtilizadorIDUser == user
                  where p.UtilizadorIDUser == c.Id
                  where p.DataLimiteManutencaoPrev.Value != null
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
            return pMpreventiva;
        }





        //GET: api/PedidoManutCurativas
        public PedidoPreventivaDtoCount GetPedidoManutCurativa(int pedidosPerPage, int currentPage)
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

            PedidoPreventivaDtoCount pedidoPreventivaDtoCount = new PedidoPreventivaDtoCount()
            {
                PedidoManutPreventivoList = result,
                CountPedidos = pMpreventiva.Count()
            };

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