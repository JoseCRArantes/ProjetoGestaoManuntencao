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
        private BDGestaoManutencaoEntities db = new BDGestaoManutencaoEntities();

        // GET: api/Utilizadors
        public IQueryable<Utilizador> GetUtilizador()
        {
            return db.Utilizador;
        }

        // GET: api/Utilizadors/5
        [ResponseType(typeof(Utilizador))]
        public async Task<IHttpActionResult> GetUtilizador(int id)
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
        public async Task<IHttpActionResult> PutUtilizador(int id, Utilizador utilizador)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != utilizador.IDUser)
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
                if (UtilizadorExists(utilizador.IDUser))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = utilizador.IDUser }, utilizador);
        }

        // DELETE: api/Utilizadors/5
        [ResponseType(typeof(Utilizador))]
        public async Task<IHttpActionResult> DeleteUtilizador(int id)
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

        private bool UtilizadorExists(int id)
        {
            return db.Utilizador.Count(e => e.IDUser == id) > 0;
        }
    }
}