using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace miniOrangeDemoApp_Net_Framework.Controllers
{
    public class LoginController : Controller
    {
        public ActionResult Login()
        {
            if (HttpContext.Session["username"] != null)
            {
                HttpContext.Response.Redirect("/Home/Index");
            }
            return View();
        }
    }
}