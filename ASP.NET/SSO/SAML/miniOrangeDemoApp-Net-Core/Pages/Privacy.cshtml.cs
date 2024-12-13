using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace miniOrangeDemoApp.Pages
{
    public class PrivacyModel : PageModel
    {
        private readonly ILogger<PrivacyModel> _logger;

        public PrivacyModel(ILogger<PrivacyModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            if (HttpContext.User == null || !HttpContext.User.Identity.IsAuthenticated || HttpContext.User.Identity.AuthenticationType.Equals("moAdmin"))
            {
                Response.Redirect("/Login");
            }
        }
    }

}
