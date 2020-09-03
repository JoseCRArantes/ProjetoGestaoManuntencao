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
    [Authorize]
    public class EstadoIntervencaosController : ApiController
    {
        private BDGestaoManutencaoEntities1 db = new BDGestaoManutencaoEntities1();

        // GET: api/EstadoIntervencaos
        [Authorize]
        public IQueryable<EstadoIntervencao> GetEstadoIntervencao()
        {
            return db.EstadoIntervencao;
        }

        // GET: api/EstadoIntervencaos/5
        [Authorize(Roles = "Admin, Utilizador, Convidado")]
        [ResponseType(typeof(EstadoIntervencao))]
        public async Task<IHttpActionResult> GetEstadoIntervencao(int id)
        {
            EstadoIntervencao estadoIntervencao = await db.EstadoIntervencao.FindAsync(id);
            if (estadoIntervencao == null)
            {
                return NotFound();
            }

            return Ok(estadoIntervencao);
        }

        // PUT: api/EstadoIntervencaos/5
        [Authorize(Roles = "Admin, Utilizador, Convidado")]
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutEstadoIntervencao(int id, EstadoIntervencao estadoIntervencao)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != estadoIntervencao.ID)
            {
                return BadRequest();
            }

            db.Entry(estadoIntervencao).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EstadoIntervencaoExists(id))
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

        // POST: api/EstadoIntervencaos
        [Authorize(Roles = "Admin")]
        [ResponseType(typeof(EstadoIntervencao))]
        public async Task<IHttpActionResult> PostEstadoIntervencao(EstadoIntervencao estadoIntervencao)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EstadoIntervencao.Add(estadoIntervencao);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EstadoIntervencaoExists(estadoIntervencao.ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = estadoIntervencao.ID }, estadoIntervencao);
        }

        // DELETE: api/EstadoIntervencaos/5
        [Authorize(Roles = "Admin")]
        [ResponseType(typeof(EstadoIntervencao))]
        public async Task<IHttpActionResult> DeleteEstadoIntervencao(int id)
        {
            EstadoIntervencao estadoIntervencao = await db.EstadoIntervencao.FindAsync(id);
            if (estadoIntervencao == null)
            {
                return NotFound();
            }

            db.EstadoIntervencao.Remove(estadoIntervencao);
            await db.SaveChangesAsync();

            return Ok(estadoIntervencao);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EstadoIntervencaoExists(int id)
        {
            return db.EstadoIntervencao.Count(e => e.ID == id) > 0;
        }
    }
}