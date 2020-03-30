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

namespace GMwebApi.Controllers
{
    public class PedidoManutCurativasController : ApiController
    {
        private BDGestaoManutencaoEntities db = new BDGestaoManutencaoEntities();

        // GET: api/PedidoManutCurativas
        public IQueryable<PedidoManutCurativa> GetPedidoManutCurativa()
        {
            return db.PedidoManutCurativa;
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

        // POST: api/PedidoManutCurativas
        [ResponseType(typeof(PedidoManutCurativa))]
        public async Task<IHttpActionResult> PostPedidoManutCurativa(PedidoManutCurativa pedidoManutCurativa)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

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