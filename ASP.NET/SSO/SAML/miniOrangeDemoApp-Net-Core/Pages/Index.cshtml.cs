using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace miniOrangeDemoApp.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            if (!HttpContext.Response.HasStarted)
            {
                if (HttpContext.User == null || !HttpContext.User.Identity.IsAuthenticated || HttpContext.User.Identity.AuthenticationType.Equals("moAdmin"))
                {
                    Response.Redirect("/Login");
                }
            }
            if (HttpContext.User != null && HttpContext.User.Identity.IsAuthenticated)
            {
                ViewData["username"] = HttpContext.User.Identity.Name;
            }
        }
           
    }
}
