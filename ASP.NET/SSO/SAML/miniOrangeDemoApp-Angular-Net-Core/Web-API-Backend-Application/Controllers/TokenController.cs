using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Text.Json;

namespace AngularBackendApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        [HttpPost(Name = "getToken")]
        public string GetToken()
        {
            var claims = User.Claims.ToDictionary(c => c.Type, c => c.Value);

            string claimsJson = JsonConvert.SerializeObject(claims, Formatting.Indented);


            return claimsJson;
        }
    }
}
