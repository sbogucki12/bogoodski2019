using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace Bogoodski2019.Controllers
{

    //[Route("api/[controller]")]
    [ApiController]
    public class RunLogController : ControllerBase
    {

        [HttpGet]
        [Route("api/runlog/getimage")]
        public IActionResult Get()
        {
            try
            {
                var image = System.IO.File.OpenRead("../Bogoodski2019/App_Data/runpic.jpg");
                return File(image, "image/jpeg");
            }
            catch
            {
                return NotFound();
            }   
        }
    }
}