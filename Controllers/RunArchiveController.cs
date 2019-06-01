using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bogoodski2019.Controllers
{

    [ApiController]
    public class RunArchiveController : ControllerBase
    {
        private readonly IRunArchiveRepository _runArchiveRepository;

        public static IHostingEnvironment _environment;

        public RunArchiveController(IRunArchiveRepository runArchiveRepository, IHostingEnvironment environment)
        {
            _runArchiveRepository = runArchiveRepository;
            _environment = environment;
        }

        // GET: api/RunArchive
        [Route("api/runarchive")]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            ObjectResult data = new ObjectResult(await _runArchiveRepository.GetAllRunDatas());
            return Ok(data);
        }

        // POST: api/RunArchive
        [Route("api/runarchive")]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]RunData runData)
        {
            string Token = Request.Headers["code"];

            string key = Environment.GetEnvironmentVariable("UPLOADKEY");

            if (Token == key)
            {
                await _runArchiveRepository.Create(runData);
                return new OkObjectResult(runData);
            }
            else
            {
                string message = "Bad Password";
                return BadRequest(message);
            }

        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete]
        [Route("api/runarchive/delete/{key:int}")]
        public async Task<IActionResult> Delete(int key)
        {
            var runDataFromDb = await _runArchiveRepository.GetRunData(key);
            if (runDataFromDb == null)
                return new NotFoundResult();
            await _runArchiveRepository.Delete(key);
            return new OkResult();
        }

        //GET: One RunData
        [HttpGet]
        [Route("api/runarchive/{key:int}")]
        public async Task<IActionResult> Get(int key)
        {
            var runData = await _runArchiveRepository.GetRunData(key);
            if (runData == null)
                return new NotFoundResult();
            return new ObjectResult(runData);
        }

        //PUT: api/RunArchive/5
        [HttpPut]
        [Route("api/runarchive/update/{key:int}")]
        public async Task<IActionResult> Put(int key, [FromBody]RunData runData)
        {
            var runDataFromDb = await _runArchiveRepository.GetRunData(key);
            if (runDataFromDb == null)
                return new NotFoundResult();
            runData.Id = runDataFromDb.Id;
            await _runArchiveRepository.Update(runData);
            return new OkObjectResult(runData);
        }
    }
}
