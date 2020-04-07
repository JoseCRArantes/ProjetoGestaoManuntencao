using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using ServiceStack.Text;
using System.Web.Http;
using System.Web.Http.Cors;



[assembly: OwinStartup(typeof(GMwebApi.Startup))]

namespace GMwebApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            


            ConfigureAuth(app);


            //app.UseCors(builder => builder.WithOrigins("*"));
            #region Old CORS
            //EnableCorsAttribute cors = new EnableCorsAttribute("*", "*", "*");

            #endregion
        }
    }
}
