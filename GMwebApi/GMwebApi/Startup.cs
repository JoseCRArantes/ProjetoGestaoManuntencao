﻿using System;
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
            
            ConfigureAuth(app);
            EnableCorsAttribute cors = new EnableCorsAttribute("*", "*", "*");
            
        }
    }
}
