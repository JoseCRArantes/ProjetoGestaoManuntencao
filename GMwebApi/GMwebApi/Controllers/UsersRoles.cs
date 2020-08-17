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
    public class UsersRoles : ApiController
    {
        private BDGestaoManutencaoEntities1 db = new BDGestaoManutencaoEntities1();


        ApplicationDbContext context = new ApplicationDbContext();


        //[Authorize]
        //public List<UserRoleModel> GetUsersAndRoles()
        //{
        //    var usersAndRoles = new List<UserRoleModel>();
        //    using (var context = new ApplicationDbContext())
        //    {
        //        var users = context.Users;

        //        foreach (var user in users)
        //        {
        //            foreach (var role in user.Roles)
        //            {
        //                usersAndRoles.Add(new UserRoleModel
        //                {
        //                    UserName = user.UserName,
        //                    RoleName = role.RoleId
        //                });
        //            }
        //        }
        //    }
        //    return usersAndRoles;
        //}



        ///// <summary>
        ///// Método para adicionar uma role a um user.
        ///// </summary>
        ///// <param name="userName"></param>
        ///// <param name="roleName"></param>
        //    internal void AddUserToRole(string userName, string roleName)
        //    {
        //        var UserManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));

        //        try
        //        {
        //            var user = UserManager.FindByName(userName);
        //            UserManager.AddToRole(user.Id, roleName);
        //            context.SaveChanges();
        //        }
        //        catch
        //        {
        //            throw;
        //        }
        //    }






    }
}