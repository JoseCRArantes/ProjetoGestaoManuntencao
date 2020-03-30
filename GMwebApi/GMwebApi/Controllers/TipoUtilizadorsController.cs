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
    public class TipoUtilizadorsController : ApiController
    {
        private BDGestaoManutencaoEntities db = new BDGestaoManutencaoEntities();

        // GET: api/TipoUtilizadors
        public IQueryable<TipoUtilizador> GetTipoUtilizador()
        {
            return db.TipoUtilizador;
        }

        // GET: api/TipoUtilizadors/5
        [ResponseType(typeof(TipoUtilizador))]
        public async Task<IHttpActionResult> GetTipoUtilizador(int id)
        {
            TipoUtilizador tipoUtilizador = await db.TipoUtilizador.FindAsync(id);
            if (tipoUtilizador == null)
            {
                return NotFound();
            }

            return Ok(tipoUtilizador);
        }

        // PUT: api/TipoUtilizadors/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTipoUtilizador(int id, TipoUtilizador tipoUtilizador)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tipoUtilizador.IDTipo)
            {
                return BadRequest();
            }

            db.Entry(tipoUtilizador).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoUtilizadorExists(id))
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

        // POST: api/TipoUtilizadors
        [ResponseType(typeof(TipoUtilizador))]
        public async Task<IHttpActionResult> PostTipoUtilizador(TipoUtilizador tipoUtilizador)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TipoUtilizador.Add(tipoUtilizador);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TipoUtilizadorExists(tipoUtilizador.IDTipo))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = tipoUtilizador.IDTipo }, tipoUtilizador);
        }

        // DELETE: api/TipoUtilizadors/5
        [ResponseType(typeof(TipoUtilizador))]
        public async Task<IHttpActionResult> DeleteTipoUtilizador(int id)
        {
            TipoUtilizador tipoUtilizador = await db.TipoUtilizador.FindAsync(id);
            if (tipoUtilizador == null)
            {
                return NotFound();
            }

            db.TipoUtilizador.Remove(tipoUtilizador);
            await db.SaveChangesAsync();

            return Ok(tipoUtilizador);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TipoUtilizadorExists(int id)
        {
            return db.TipoUtilizador.Count(e => e.IDTipo == id) > 0;
        }
    }
}