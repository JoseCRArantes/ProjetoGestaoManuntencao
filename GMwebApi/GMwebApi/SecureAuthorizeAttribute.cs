using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace GMwebApi
{
    public class SecureAuthorizeAttribute : AuthorizeAttribute
    {
        public override void OnAuthorization(HttpActionContext actionContext)
        {
            var cookies = actionContext.ControllerContext.Request;
            
            base.OnAuthorization(actionContext);
        }
    }
}