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
    }
}