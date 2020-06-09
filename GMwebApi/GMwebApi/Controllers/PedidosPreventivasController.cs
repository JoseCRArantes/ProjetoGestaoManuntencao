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
    public class PedidosPreventivasController : ApiController
    {
        private BDGestaoManutencaoEntities1 db = new BDGestaoManutencaoEntities1();


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
                      DataPedido = p.DataPedido
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

        /// <summary>
        /// DTO para a inserção de manutenção p/ um determinado grupo de máquinas.
        /// </summary>
        /// <param name="manutPreventivaGrupoMaquina"></param>
        /// <returns></returns>
        private PedidoManutPreventiva PedidosPrevDtoToManutPreventivaGrMaquina(ManutPreventivaGrupoMaquina manutPreventivaGrupoMaquina)
        {
            AspNetUsers aspNetUsers = db.AspNetUsers.FirstOrDefault(a => a.UserName == manutPreventivaGrupoMaquina.UtilizadorIDUser);

            return new PedidoManutPreventiva()
            {
                UtilizadorIDUser = aspNetUsers.Id,
                DataPedido = DateTime.Now,
                DataLimiteManutencaoPrev = (DateTime)manutPreventivaGrupoMaquina.DataLimiteManutencaoPrev,
                Descricao = manutPreventivaGrupoMaquina.Descricao
                // IDEquipamento = (int)manutPreventivaGrupoMaquina.IDEquipamento,
            };
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