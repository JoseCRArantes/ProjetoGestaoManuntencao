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
    public class PedidoManutCurativasController : ApiController
    {
        private BDGestaoManutencaoEntities1 db = new BDGestaoManutencaoEntities1();

        // GET: api/PedidoManutCurativas
        public IQueryable<PedidoManutCurativaDto> GetPedidoManutCurativa()
        {
            //return db.PedidoManutCurativa;

            IQueryable<PedidoManutCurativaDto> pMcurativa =
                  from c in db.AspNetUsers
                  from p in db.PedidoManutCurativa
                  where p.UtilizadorIDUser == c.Id
                  select new PedidoManutCurativaDto
                  {
                      IDPedido = p.IDPedido,
                      UtilizadorIDUser = c.Nome,
                      IDEquipamento = p.IDEquipamento,
                      Descricao = p.Descricao,
                      IDEstadoIntervencao = p.IDEstadoIntervencao,
                      DataPedido = p.DataPedido
                  };

            return pMcurativa;


        }



        // GET: api/PedidoManutCurativas/5

        [ResponseType(typeof(PedidoManutCurativa))]
        public async Task<IHttpActionResult> GetPedidoManutCurativa(int id)
        {
            PedidoManutCurativa pedidoManutCurativa = await db.PedidoManutCurativa.FindAsync(id);
            if (pedidoManutCurativa == null)
            {
                return NotFound();
            }

            return Ok(pedidoManutCurativa);
        }

        // PUT: api/PedidoManutCurativas/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPedidoManutCurativa(int id, PedidoManutCurativa pedidoManutCurativa)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pedidoManutCurativa.IDPedido)
            {
                return BadRequest();
            }

            db.Entry(pedidoManutCurativa).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PedidoManutCurativaExists(id))
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
        /// DTO para o método Post
        /// </summary>
        /// <param name="pedidoManutCurativaDto"></param>
        /// <returns></returns>
        private PedidoManutCurativa PedidoMCurativaDtoTOPedidoMCurativa(PedidoManutCurativaDto pedidoManutCurativaDto)
        {
            var user = User.Identity.GetUserId();

            return new PedidoManutCurativa()
            {
                UtilizadorIDUser = (string)user,
                IDEquipamento = pedidoManutCurativaDto.IDEquipamento,
                Descricao = pedidoManutCurativaDto.Descricao,
                IDEstadoIntervencao = pedidoManutCurativaDto.IDEstadoIntervencao,
                DataPedido = pedidoManutCurativaDto.DataPedido
            };
        }


        // POST: api/PedidoManutCurativas
        [ResponseType(typeof(PedidoManutCurativa))]
        public async Task<IHttpActionResult> PostPedidoManutCurativa(PedidoManutCurativaDto pedidoManutCurativaDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            PedidoManutCurativa pedidoManutCurativa = PedidoMCurativaDtoTOPedidoMCurativa(pedidoManutCurativaDto);
            db.PedidoManutCurativa.Add(pedidoManutCurativa);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PedidoManutCurativaExists(pedidoManutCurativa.IDPedido))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = pedidoManutCurativa.IDPedido }, pedidoManutCurativa);
        }

        // DELETE: api/PedidoManutCurativas/5
        [ResponseType(typeof(PedidoManutCurativa))]
        public async Task<IHttpActionResult> DeletePedidoManutCurativa(int id)
        {
            PedidoManutCurativa pedidoManutCurativa = await db.PedidoManutCurativa.FindAsync(id);
            if (pedidoManutCurativa == null)
            {
                return NotFound();
            }

            db.PedidoManutCurativa.Remove(pedidoManutCurativa);
            await db.SaveChangesAsync();

            return Ok(pedidoManutCurativa);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PedidoManutCurativaExists(int id)
        {
            return db.PedidoManutCurativa.Count(e => e.IDPedido == id) > 0;
        }
    }
}