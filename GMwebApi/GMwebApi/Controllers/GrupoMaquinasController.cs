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
using System.Web.Http.Cors;
using GMwebApi.DTO;


using GMwebApi.Models;


namespace GMwebApi.Controllers
{
    public class GrupoMaquinasController : ApiController
    {
        private BDGestaoManutencaoEntities1 db = new BDGestaoManutencaoEntities1();

        public object ViewBag { get; private set; }



        // GET: api/GrupoMaquinas
        [Authorize]
        [Authorize(Roles = "Admin, Utilizador, Convidado")]
        public IQueryable<GrupoMaquinaDto> GetGrupoMaquina()
        {
            IQueryable<GrupoMaquinaDto> grupoMaquina =
                from gp in db.GrupoMaquina
                orderby gp.CodigoInterno ascending
                select new GrupoMaquinaDto
                {
                    IDGrupoMaquinas = gp.IDGrupoMaquinas,
                    CodigoInterno = gp.CodigoInterno,
                    Descr = gp.Descr
                };
            return grupoMaquina;

        }

        // GET: api/GrupoMaquinas/5
        [ResponseType(typeof(GrupoMaquina))]
        [Authorize]
        [Authorize(Roles = "Admin, Utilizador, Convidado")]
        public async Task<IHttpActionResult> GetGrupoMaquina(int id)
        {
            GrupoMaquina grupoMaquina = await db.GrupoMaquina.FindAsync(id);
            if (grupoMaquina == null)
            {
                return NotFound();
            }

            return Ok(grupoMaquina);
        }

        // PUT: api/GrupoMaquinas/5
        [Authorize]
        [Authorize(Roles = "Admin")]
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutGrupoMaquina(int id, GrupoMaquina grupoMaquina)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != grupoMaquina.IDGrupoMaquinas)
            {
                return BadRequest();
            }

            db.Entry(grupoMaquina).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GrupoMaquinaExists(id))
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



        // POST: api/GrupoMaquinas
        [Authorize]
        [Authorize(Roles = "Admin")]
        [ResponseType(typeof(GrupoMaquina))]
        public async Task<IHttpActionResult> PostGrupoMaquina(GrupoMaquina grupoMaquina)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.GrupoMaquina.Add(grupoMaquina);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (GrupoMaquinaExists(grupoMaquina.IDGrupoMaquinas))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = grupoMaquina.IDGrupoMaquinas }, grupoMaquina);
        }

        // DELETE: api/GrupoMaquinas/5
        [Authorize]
        [Authorize(Roles = "Admin")]
        [ResponseType(typeof(GrupoMaquina))]
        public async Task<IHttpActionResult> DeleteGrupoMaquina(int id)
        {
            GrupoMaquina grupoMaquina = await db.GrupoMaquina.FindAsync(id);
            if (grupoMaquina == null)
            {
                return NotFound();
            }

            db.GrupoMaquina.Remove(grupoMaquina);
            await db.SaveChangesAsync();

            return Ok(grupoMaquina);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GrupoMaquinaExists(int id)
        {
            return db.GrupoMaquina.Count(e => e.IDGrupoMaquinas == id) > 0;
        }
    }
}