using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bogoodski2019.Controllers
{
    [ApiController]
    public class SecretController : ControllerBase
    {
        [Route("/api/runlog/login")]
        [HttpPost]
        public IActionResult Login([FromHeader] string secret)
        {
            string key = Environment.GetEnvironmentVariable("UPLOADKEY");
            if (secret == key)
            {
                return Ok();
            }

            return NotFound("Bad token");
        }

        [Route("/api/chat/dashboard")]
        [HttpPost]
        public JsonResult LoginDashboard([FromBody]string pw)
        {
            string key = Environment.GetEnvironmentVariable("UPLOADKEY");
            try
            {
                if (pw == key)
                {
                    JsonResult json = new JsonResult("true");
                    return json;
                }
                else
                {
                    JsonResult json = new JsonResult("false");
                    return json;
                }
            }
            catch
            {
                throw new Exception("Error with the password API.");
            }
            
        }
    }
}