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
using System.Web;
using System.Web.Security;
using System.Threading;
using System.Data.Entity.Validation;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace GMwebApi.Controllers
{
    public class AspNetUsersController : ApiController
    {
        private BDGestaoManutencaoEntities1 db = new BDGestaoManutencaoEntities1();

       
        ApplicationDbContext context = new ApplicationDbContext();

        //Retorna apenas os atributos do objeto essenciais
        // GET: api/AspNetUsers
        [Authorize]
        [Authorize(Roles = "Admin")]
        public IQueryable<AspNetUsersDto> GetAspNetUsers()
        {
            return db.AspNetUsers.ToList().Select(
                a => new AspNetUsersDto
                {
                    UserName = a.UserName,
                    IDTipo = (int)a.IDTipo,
                    NumeroUtilizador = (int)a.NumeroUtilizador,
                    Nome = a.Nome,

                }).AsQueryable();
        }


        [Authorize]
        [ResponseType(typeof(AspNetUsersDto))]
        public async Task<IHttpActionResult> GetAspNetUsersByID(string Id)
        {
            AspNetUsersDto aspNetUserDto = new AspNetUsersDto();

            AspNetUsers aspNetUsers = await db.AspNetUsers.FindAsync(Id);

            aspNetUserDto.IDTipo = (int)aspNetUsers.IDTipo;
            aspNetUserDto.Nome = aspNetUsers.Nome;
            aspNetUserDto.NumeroUtilizador = (int)aspNetUsers.NumeroUtilizador;
            aspNetUserDto.UserName = aspNetUsers.UserName;

            if (aspNetUserDto == null)
            {
                return NotFound();
            }

            return Ok(aspNetUserDto);
        }


        //Usado para editar um AspNetUser.
        //GET: api/AspNetUsers/5
        [Authorize]
        [ResponseType(typeof(AspNetUsersDto))]
        public async Task<IHttpActionResult> GetAspNetUsers(string UserName)
        {
            AspNetUsersDto aspNetUserDto = new AspNetUsersDto();

            AspNetUsers aspNetUsers = await db.AspNetUsers.FirstOrDefaultAsync(a => a.UserName == UserName);

            aspNetUserDto.IDTipo = (int)aspNetUsers.IDTipo;
            aspNetUserDto.Nome = aspNetUsers.Nome;
            aspNetUserDto.NumeroUtilizador = (int)aspNetUsers.NumeroUtilizador;
            aspNetUserDto.UserName = aspNetUsers.UserName;
            
            if (aspNetUserDto == null)
            {
                return NotFound();
            }

            return Ok(aspNetUserDto);
        }

       
        private AspNetUsers AspNetUsersDtoToAspNetUsers(AspNetUsersDto aspNetUsersDto)
        {
            return new AspNetUsers()
            {
                //Id = "",
                IDTipo = aspNetUsersDto.IDTipo,
                NumeroUtilizador = aspNetUsersDto.NumeroUtilizador,
                Nome = aspNetUsersDto.Nome

            };
        }


        //PUT: api/AspNetUsers/5
        [Authorize]
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAspNetUsers(string Username, AspNetUsersDto aspNetUsersDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            AspNetUsers aspNetUsers = db.AspNetUsers.FirstOrDefault(a => a.UserName == Username);

            aspNetUsers.IDTipo = aspNetUsersDto.IDTipo;
            aspNetUsers.Nome = aspNetUsersDto.Nome;
            aspNetUsers.NumeroUtilizador = aspNetUsersDto.NumeroUtilizador;
            
            
            try
            {
                db.Entry(aspNetUsers).State = EntityState.Modified;
            }

            catch(DbEntityValidationException e) {
                Console.WriteLine(e.Message);
            }
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AspNetUsersExists(aspNetUsers.Id))
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


        //private AspNetUsers AspNetUsersDtoToAspNetUsers(AspNetUsersDto aspNetUsersDto)
        //{
        //    return new AspNetUsers()
        //    {
        //        Id = "",
        //        IDTipo = aspNetUsersDto.IDTipo,
        //        NumeroUtilizador = aspNetUsersDto.NumeroUtilizador,
        //        Nome = aspNetUsersDto.Nome

        //    };
        //}


        ////PUT: api/AspNetUsers/5
        //[Authorize]
        //[ResponseType(typeof(void))]
        //public async Task<IHttpActionResult> PutAspNetUsers(AspNetUsersDto aspNetUsersDto)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    AspNetUsers aspNetUsers = db.AspNetUsers.FirstOrDefault(a => a.Nome == aspNetUsersDto.Nome);

        //    aspNetUsers.IDTipo = aspNetUsersDto.IDTipo;
        //    aspNetUsers.Nome = aspNetUsersDto.Nome;
        //    aspNetUsers.NumeroUtilizador = aspNetUsersDto.NumeroUtilizador;

        //    try
        //    {
        //        db.Entry(aspNetUsers).State = EntityState.Modified;
        //    }

        //    catch (DbEntityValidationException e)
        //    {
        //        Console.WriteLine(e.Message);
        //    }
        //    try
        //    {
        //        await db.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!AspNetUsersExists(aspNetUsers.Id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        //PUT: api/AspNetUsers/5
        //[ResponseType(typeof(void))]
        //public async Task<IHttpActionResult> PutAspNetUsers(string id, AspNetUsers aspNetUsers)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != aspNetUsers.Id)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(aspNetUsers).State = EntityState.Modified;

        //    try
        //    {
        //        await db.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!AspNetUsersExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}



        //: api/AspNetUsers
        //POST 
        //[ResponseType(typeof(AspNetUsers))]
        //public async Task<IHttpActionResult> PostAspNetUsers(AspNetUsersDto aspNetUsersDto)
        //{

        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    AspNetUsers aspNet = AspNetToAspNetDTO(aspNetUsersDto);
        //    db.AspNetUsers.Add(aspNet);

        //    //db.AspNetUsers.Add(aspNetUsers);


        //    try
        //    {
        //        await db.SaveChangesAsync();
        //    }
        //    catch (DbUpdateException)
        //    {
        //        if (AspNetUsersExists(aspNetUsers.Id))
        //        {
        //            return Conflict();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return CreatedAtRoute("DefaultApi", new { id = aspNetUsers.Id }, aspNetUsers);
        //}

        // DELETE: api/AspNetUsers/5
        //[ResponseType(typeof(AspNetUsers))]
        //public async Task<IHttpActionResult> DeleteAspNetUsers(string id)
        //{
        //    AspNetUsers aspNetUsers = await db.AspNetUsers.FindAsync(id);
        //    if (aspNetUsers == null)
        //    {
        //        return NotFound();
        //    }

        //    db.AspNetUsers.Remove(aspNetUsers);
        //    await db.SaveChangesAsync();

        //    return Ok(aspNetUsers);
        //}

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AspNetUsersExists(string id)
        {
            return db.AspNetUsers.Count(e => e.Id == id) > 0;
        }
    }
}