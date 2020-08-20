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
using Dapper;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace GMwebApi.Controllers
{
    [Authorize]
    public class AspNetRolesController : ApiController
    {
        private BDGestaoManutencaoEntities1 db = new BDGestaoManutencaoEntities1();

        ApplicationDbContext context = new ApplicationDbContext();

        //public IQueryable<AspNetRoles> GetRoles()
        //{
        //    return db.AspNetRoles;
        //}

        // GET: api/AspNetRoles
        [Authorize(Roles = "Admin")]
        public List<AspNetRolesDto> GetAspNetRoles()
        {

            string query = "select Nome, Email, Name from AspNetUsers left join AspNetUserRoles on(AspNetUsers.Id=AspNetUserRoles.UserId) left join AspNetRoles on(AspNetUserRoles.RoleId= AspNetRoles.Id)";

            AspNetRolesDto asp = new AspNetRolesDto();
            List<AspNetRolesDto> lista = new List<AspNetRolesDto>();

            using (var connection = db.Database.Connection)
            {
                var resultado = connection.Query<AspNetRolesDto>(query).ToList();
                foreach (var res in resultado)
                {
                    asp.Nome = res.Nome;
                    asp.RoleId = res.RoleId;
                    asp.Name = res.Name;
                    asp.Email = res.Email;
                    lista.Add(res);

                }
            }
            return lista;
        }






        // GET: api/AspNetRoles/5
        [ResponseType(typeof(AspNetRolesDto))]
        public async Task<IHttpActionResult> GetAspNetRoles(string email)
        {

            string query = "select Nome, Email, RoleId, Name from AspNetUsers, AspNetUserRoles, AspNetRoles where AspNetUsers.Id = AspNetUserRoles.UserId AND AspNetUsers.Email = '" + email+"' AND AspNetUserRoles.RoleId = AspNetRoles.Id";

            AspNetRolesDto asp = new AspNetRolesDto();
            List<AspNetRolesDto> lista = new List<AspNetRolesDto>();

            using (var connection = db.Database.Connection)
            {
                var resultado = connection.Query<AspNetRolesDto>(query).ToList();
                foreach (var res in resultado)
                {
                    asp.Nome = res.Nome;
                    asp.Name = res.Name;
                    asp.Email = res.Email;
                    lista.Add(res);

                }
            }

            var firstElement = lista.First();

            asp.Name = firstElement.Name;
            asp.Nome = firstElement.Nome;
            asp.Email = firstElement.Email;

            return Ok(asp);
            
        }

        /// <summary>
        /// Mudar a role a um determinado user.
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="roleName"></param>
        /// <returns></returns>
        // PUT: api/AspNetRoles/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAspNetRoles(string userName, string roleName)
        {

                var UserManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));

                try
                {
                    var user = UserManager.FindByName(userName);
                    UserManager.AddToRole(user.Id, roleName);
                    context.SaveChanges();
                }
                catch
                {
                    throw;
                }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/AspNetRoles
        [ResponseType(typeof(AspNetRoles))]
        public async Task<IHttpActionResult> PostAspNetRoles(AspNetRoles aspNetRoles)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AspNetRoles.Add(aspNetRoles);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AspNetRolesExists(aspNetRoles.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = aspNetRoles.Id }, aspNetRoles);
        }

        // DELETE: api/AspNetRoles/5
        [ResponseType(typeof(AspNetRoles))]
        public async Task<IHttpActionResult> DeleteAspNetRoles(string id)
        {
            AspNetRoles aspNetRoles = await db.AspNetRoles.FindAsync(id);
            if (aspNetRoles == null)
            {
                return NotFound();
            }

            db.AspNetRoles.Remove(aspNetRoles);
            await db.SaveChangesAsync();

            return Ok(aspNetRoles);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AspNetRolesExists(string id)
        {
            return db.AspNetRoles.Count(e => e.Id == id) > 0;
        }
    }
}