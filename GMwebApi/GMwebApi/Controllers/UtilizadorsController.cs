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
    public class UtilizadorsController : ApiController
    {
        private BDGestaoManutencaoEntities1 db = new BDGestaoManutencaoEntities1();

        // GET: api/Utilizadors
        public IQueryable<Utilizador> GetUtilizador()
        {
            return db.Utilizador;
        }

        // GET: api/Utilizadors/5
        [ResponseType(typeof(Utilizador))]
        public async Task<IHttpActionResult> GetUtilizador(string id)
        {
            Utilizador utilizador = await db.Utilizador.FindAsync(id);
            if (utilizador == null)
            {
                return NotFound();
            }

            return Ok(utilizador);
        }

        // PUT: api/Utilizadors/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutUtilizador(string id, Utilizador utilizador)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != utilizador.Id)
            {
                return BadRequest();
            }

            db.Entry(utilizador).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UtilizadorExists(id))
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

        // POST: api/Utilizadors
        [ResponseType(typeof(Utilizador))]
        public async Task<IHttpActionResult> PostUtilizador(Utilizador utilizador)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Utilizador.Add(utilizador);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UtilizadorExists(utilizador.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = utilizador.Id }, utilizador);
        }

        // DELETE: api/Utilizadors/5
        [ResponseType(typeof(Utilizador))]
        public async Task<IHttpActionResult> DeleteUtilizador(string id)
        {
            Utilizador utilizador = await db.Utilizador.FindAsync(id);
            if (utilizador == null)
            {
                return NotFound();
            }

            db.Utilizador.Remove(utilizador);
            await db.SaveChangesAsync();

            return Ok(utilizador);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UtilizadorExists(string id)
        {
            return db.Utilizador.Count(e => e.Id == id) > 0;
        }
    }
}