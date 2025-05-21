using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Web.WebSockets;

namespace miniOrangeDemoApp_Net_Framework.Controllers
{
    public class HomeController : Controller
    {
        JavaScriptSerializer serializer = new JavaScriptSerializer();
        public ActionResult Index()
        {
            if (HttpContext.Session == null || HttpContext.Session["username"] == null)
            {
                HttpContext.Response.Redirect("~/Login/Login");
            }
            if (HttpContext.Session["username"] != null)
            {
                ViewData["username"] = HttpContext.Session["username"];
            }

            return View();
        }

        public ActionResult About()
        {
            if (HttpContext.Session == null || HttpContext.Session["username"] == null)
            {
                HttpContext.Response.Redirect("~/Login/Login");
            }
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            if (HttpContext.Session == null || HttpContext.Session["username"] == null)
            {
                HttpContext.Response.Redirect("~/Login/Login");
            }
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}