using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Bogoodski2019.DjContent;

namespace Bogoodski2019.Controllers
{


    [ApiController]
    public class MusicController : ControllerBase
    {

        [Route("api/getmusic")]
        [HttpGet]
        public IActionResult GetMusic (string name)
        {
            
            if(name == "cheatcodevol1")
            {
                JsonResult json = new JsonResult(Set1.cheatCodeVol1);
                return json;
            }

            if(name == "cheatcodevol2")
            {
                JsonResult json = new JsonResult(Set2.cheatCodeVol2);
                return json;
            }

            return NotFound("No such tracklist");
        }
    }
}