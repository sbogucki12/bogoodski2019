using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Hosting.Internal;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace Bogoodski2019.Controllers
{

    //[Route("api/[controller]")]
    [ApiController]
    public class RunLogController : ControllerBase
    {
        public static IHostingEnvironment _environment;
        public RunLogController(IHostingEnvironment environment)
        {
            _environment = environment;
        }

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

        [HttpPost]
        [Route("api/run/postimage")]
        public IActionResult Post(IFormFile file)
        {
            try
            {
                string Token = Request.Headers["code"];                
                string key = Environment.GetEnvironmentVariable("UPLOADKEY");

                if(Token == key)
                {
                    var domain = _environment.ContentRootPath;
                    using (FileStream filestream = System.IO.File.Create(domain + "/App_Data/" + file.FileName))
                    {
                        file.CopyTo(filestream);
                        filestream.Flush();
                        string message = String.Format("uploaded to {0}", domain + "\\App_Data");
                        string date = DateTime.Now.ToString("M/d/yyyy");                        
                        return Ok(date);
                    }
                }  else
                {
                    string message = "Bad Password";
                    return BadRequest(message);
                }               
            }
            catch (Exception ex)
            {
                return NotFound(ex);
            }
        }      
    }
}