﻿using System;
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
using Microsoft.AspNet.Identity;

namespace GMwebApi.Controllers
{
    [Authorize]
    public class IntervencaoCurativasController : ApiController
    {
        private BDGestaoManutencaoEntities1 db = new BDGestaoManutencaoEntities1();

        // GET: api/IntervencaoCurativas
        [Authorize(Roles = "Admin, Utilizador, Convidado")]
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
                    Descricao = p.Descricao,
                    DataInicioIntervencao = p.DataInicioIntervencao,
                    DataFimIntervencao = p.DataFimIntervencao,
                    IDEstadoIntervencao = p.IDEstadoIntervencao
                };

 
            return intervencaoCurativa;
        }
        

        // GET: api/IntervencaoCurativas/5
        [ResponseType(typeof(IntervencaoCurativa))]
        [Authorize(Roles = "Admin, Utilizador, Convidado")]
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
        [Authorize]
        [Authorize(Roles = "Admin, Utilizador")]
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

        /// <summary>
        /// DTO para o método Post. 
        /// </summary>
        /// <param name="intervencaoCurativaDto"></param>
        /// <returns></returns>
        private IntervencaoCurativa IntervencaoCurativaDtoTOIntervencaoCurativa(IntervencaoCurativaDto intervencaoCurativaDto)
        {
            var user = User.Identity.GetUserId();
            return new IntervencaoCurativa()
            {

                UtilizadorIDUser = (string)user,
                Descricao = intervencaoCurativaDto.Descricao,
                IDPedido = intervencaoCurativaDto.IDPedido,
                IDEstadoIntervencao = intervencaoCurativaDto.IDEstadoIntervencao,
                DataInicioIntervencao = intervencaoCurativaDto.DataInicioIntervencao,
                DataFimIntervencao = intervencaoCurativaDto.DataFimIntervencao, 
                
            };
        }



        private IntervencaoCurativa IntervencaoCurativaDtoTOIntervencaoCurativaPost(IntervencaoCurativaDto intervencaoCurativaDto)
        {
            var user = User.Identity.GetUserId();

            AspNetUsers aspNetUsers = db.AspNetUsers.FirstOrDefault(a => a.Id == user);

            return new IntervencaoCurativa()
            {
                UtilizadorIDUser = (string)aspNetUsers.Nome,
                Descricao = intervencaoCurativaDto.Descricao,
                IDPedido = intervencaoCurativaDto.IDPedido,
                IDEstadoIntervencao = intervencaoCurativaDto.IDEstadoIntervencao,
                DataInicioIntervencao = intervencaoCurativaDto.DataInicioIntervencao,
                DataFimIntervencao = intervencaoCurativaDto.DataFimIntervencao
            };
        }


        // POST: api/IntervencaoCurativas
        [Authorize(Roles = "Admin, Utilizador")]
        [ResponseType(typeof(IntervencaoCurativa))]
        public async Task<IHttpActionResult> PostIntervencaoCurativa(IntervencaoCurativaDto intervencaoCurativaDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IntervencaoCurativa intervencaoCurativa = IntervencaoCurativaDtoTOIntervencaoCurativa(intervencaoCurativaDto);
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


            var user = User.Identity.GetUserId();

            AspNetUsers aspNetUsers = db.AspNetUsers.FirstOrDefault(a => a.Id == user);

            IntervencaoCurativa intervencaoCurativaDto1 = new IntervencaoCurativa()
            {
                ID = intervencaoCurativa.ID,
                UtilizadorIDUser = (string)aspNetUsers.Nome,
                Descricao = intervencaoCurativaDto.Descricao,
                IDPedido = intervencaoCurativaDto.IDPedido,
                IDEstadoIntervencao = intervencaoCurativaDto.IDEstadoIntervencao,
                DataInicioIntervencao = intervencaoCurativaDto.DataInicioIntervencao,
                DataFimIntervencao = intervencaoCurativaDto.DataFimIntervencao
            };


            return CreatedAtRoute("DefaultApi", new { id = intervencaoCurativa.ID }, intervencaoCurativaDto1);
        }



        // DELETE: api/IntervencaoCurativas/5
        [Authorize(Roles = "Admin, Utilizador")]
        [ResponseType(typeof(IntervencaoCurativa))]
        public async Task<IHttpActionResult> DeleteIntervencaoCurativa(int id)
        {
            var user = User.Identity.GetUserId();

            IntervencaoCurativa intervCurativa = db.IntervencaoCurativa.FirstOrDefault(a => a.ID == id);

            if (intervCurativa.UtilizadorIDUser == user)
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

        private bool IntervencaoCurativaExists(int id)
        {
            return db.IntervencaoCurativa.Count(e => e.ID == id) > 0;
        }
    }
}