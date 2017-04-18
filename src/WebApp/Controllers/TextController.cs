using System.Threading;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    public class TextController : Controller
    {
        public static int WaitTime = 0;

        [HttpGet]
        public string Get()
        {
            Thread.Sleep(WaitTime);

            // I'm an MVC newb, and I'm sure there's a better way to do
            HttpContext.Response.Headers.Append("content-type", "text/plain");

            return "Hello, world";
        }
    }
}