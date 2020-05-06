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

namespace GMwebApi.Controllers
{
    public class IntervencaoCurativasController : ApiController
    {
        private BDGestaoManutencaoEntities1 db = new BDGestaoManutencaoEntities1();

        // GET: api/IntervencaoCurativas
        public IQueryable<IntervencaoCurativaDto> GetIntervencaoCurativa()
        {
            IQueryable<IntervencaoCurativaDto> intervencaoCurativa =
                from c in db.AspNetUsers
                from p in db.IntervencaoCurativa
                where p.UtilizadorIDUser == c.Id
                select new IntervencaoCurativaDto
                {
                    ID = p.ID,
                    UtilizadorIDUser = c.Nome,
                    IDPedido = p.IDPedido,
                    IDEquipamento = p.IDEquipamento,
                    Descricao = p.Descricao,
                    DataInicioIntervencao = p.DataInicioIntervencao,
                    DataFimIntervencao = p.DataFimIntervencao

                };

            return intervencaoCurativa;
        }

        // GET: api/IntervencaoCurativas/5
        [ResponseType(typeof(IntervencaoCurativa))]
        public async Task<IHttpActionResult> GetIntervencaoCurativa(int id)
        {
            IntervencaoCurativa intervencaoCurativa = await db.IntervencaoCurativa.FindAsync(id);
            if (intervencaoCurativa == null)
            {
                return NotFound();
            }
            return Ok(intervencaoCurativa);
        }

        // PUT: api/IntervencaoCurativas/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutIntervencaoCurativa(int id, IntervencaoCurativa intervencaoCurativa)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != intervencaoCurativa.ID)
            {
                return BadRequest();
            }

            db.Entry(intervencaoCurativa).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IntervencaoCurativaExists(id))
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

        // POST: api/IntervencaoCurativas
        [ResponseType(typeof(IntervencaoCurativa))]
        public async Task<IHttpActionResult> PostIntervencaoCurativa(IntervencaoCurativa intervencaoCurativa)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.IntervencaoCurativa.Add(intervencaoCurativa);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (IntervencaoCurativaExists(intervencaoCurativa.ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = intervencaoCurativa.ID }, intervencaoCurativa);
        }

        // DELETE: api/IntervencaoCurativas/5
        [ResponseType(typeof(IntervencaoCurativa))]
        public async Task<IHttpActionResult> DeleteIntervencaoCurativa(int id)
        {
            IntervencaoCurativa intervencaoCurativa = await db.IntervencaoCurativa.FindAsync(id);
            if (intervencaoCurativa == null)
            {
                return NotFound();
            }

            db.IntervencaoCurativa.Remove(intervencaoCurativa);
            await db.SaveChangesAsync();

            return Ok(intervencaoCurativa);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool IntervencaoCurativaExists(int id)
        {
            return db.IntervencaoCurativa.Count(e => e.ID == id) > 0;
        }
    }
}