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
using GMwebApi.DTO;
using GMwebApi.Models;
using Microsoft.AspNet.Identity;

namespace GMwebApi.Controllers
{
    [Authorize]
    public class IntervencaoPreventivasController : ApiController
    {
        private BDGestaoManutencaoEntities1 db = new BDGestaoManutencaoEntities1();


        /// <summary>
        /// Método GET com intervenções curativas.
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "Admin, Utilizador, Convidado")]
        public IQueryable<IntervencaoPreventivaDto> GetIntervencaoCurativa()
        {
            IQueryable<IntervencaoPreventivaDto> intervencaoPreventiva =
                from c in db.AspNetUsers
                from p in db.IntervencaoPreventiva
                where p.UtilizadorIDUser == c.Id
                select new IntervencaoPreventivaDto
                {
                    ID = p.ID,
                    UtilizadorIDUser = c.Nome,
                    Observacoes = p.Observacoes,
                    PedidoManutPreventivaID = p.PedidoManutPreventivaID,
                    DataFimIntervencao = p.DataFimIntervencao,
                    DataInicioIntervencao = p.DataInicioIntervencao,
                    IDEstadoIntervencao = p.IDEstadoIntervencao
                };
            return intervencaoPreventiva;
        }


        // GET: api/IntervencaoPreventivas/5
        [Authorize(Roles = "Admin, Utilizador, Convidado")]
        [ResponseType(typeof(IntervencaoPreventiva))]
        public async Task<IHttpActionResult> GetIntervencaoPreventiva(int id)
        {
            IntervencaoPreventiva intervencaoPreventiva = await db.IntervencaoPreventiva.FindAsync(id);
            if (intervencaoPreventiva == null)
            {
                return NotFound();
            }

            return Ok(intervencaoPreventiva);
        }


        /// <summary>
        /// DTO para o método Post. 
        /// </summary>
        /// <param name="intervencaoCurativaDto"></param>
        /// <returns></returns>
        private IntervencaoPreventiva IntervencaoPreventivaDtoTOIntervencaoPreventiva(IntervencaoPreventivaDto intervencaoPreventivaDto)
        {
            var user = User.Identity.GetUserId();
            return new IntervencaoPreventiva()
            {

                UtilizadorIDUser = (string)user,
                Observacoes = intervencaoPreventivaDto.Observacoes,
                PedidoManutPreventivaID = intervencaoPreventivaDto.PedidoManutPreventivaID,
                IDEstadoIntervencao = intervencaoPreventivaDto.IDEstadoIntervencao,
                DataInicioIntervencao = intervencaoPreventivaDto.DataInicioIntervencao,
                DataFimIntervencao = intervencaoPreventivaDto.DataFimIntervencao
            };
        }

        // POST: api/IntervencaoPreventivas
        [Authorize(Roles = "Admin, Utilizador")]
        [ResponseType(typeof(IntervencaoPreventiva))]
        public async Task<IHttpActionResult> PostIntervencaoPreventiva(IntervencaoPreventivaDto intervencaoPreventivaDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IntervencaoPreventiva intervencaoPreventiva = IntervencaoPreventivaDtoTOIntervencaoPreventiva(intervencaoPreventivaDto);
            db.IntervencaoPreventiva.Add(intervencaoPreventiva);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (IntervencaoPreventivaExists(intervencaoPreventiva.ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            var user = User.Identity.GetUserId();

            AspNetUsers aspNetUsers = db.AspNetUsers.FirstOrDefault(a => a.Id == user);

            IntervencaoPreventiva intervencaoPreventivaDto1 = new IntervencaoPreventiva()
            {
                ID = intervencaoPreventiva.ID,
                UtilizadorIDUser = (string)aspNetUsers.Nome,
                Observacoes = intervencaoPreventivaDto.Observacoes,
                PedidoManutPreventivaID = intervencaoPreventivaDto.PedidoManutPreventivaID,
                IDEstadoIntervencao = intervencaoPreventivaDto.IDEstadoIntervencao,
                DataInicioIntervencao = intervencaoPreventivaDto.DataInicioIntervencao,
                DataFimIntervencao = intervencaoPreventivaDto.DataFimIntervencao
            };

            return CreatedAtRoute("DefaultApi", new { id = intervencaoPreventiva.ID }, intervencaoPreventivaDto1);
        }


        // PUT: api/IntervencaoPreventivas/5
        [Authorize(Roles = "Admin, Utilizador")]
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutIntervencaoPreventiva(int id, IntervencaoPreventiva intervencaoPreventiva)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != intervencaoPreventiva.ID)
            {
                return BadRequest();
            }

            db.Entry(intervencaoPreventiva).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IntervencaoPreventivaExists(id))
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
        /// DELETE: APENAS SE O USER FOR O MESMO COM O LOGIN
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // DELETE: api/IntervencaoPreventivas/5
        [Authorize(Roles = "Admin, Utilizador")]
        [ResponseType(typeof(IntervencaoPreventiva))]
        public async Task<IHttpActionResult> DeleteIntervencaoPreventiva(int id)
        {
            var user = User.Identity.GetUserId();

            IntervencaoPreventiva intPreventiva = db.IntervencaoPreventiva.FirstOrDefault(a => a.ID == id);
            if (intPreventiva.UtilizadorIDUser == user)
            {

                IntervencaoPreventiva intervencaoPreventiva = await db.IntervencaoPreventiva.FindAsync(id);
                if (intervencaoPreventiva == null)
                {
                    return NotFound();
                }

                db.IntervencaoPreventiva.Remove(intervencaoPreventiva);
                await db.SaveChangesAsync();

                return Ok(intervencaoPreventiva);
            }
            else
                return NotFound();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool IntervencaoPreventivaExists(int id)
        {
            return db.IntervencaoPreventiva.Count(e => e.ID == id) > 0;
        }
    }
}