using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bogoodski2019.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RunArchiveController : ControllerBase
    {
        private readonly IRunArchiveRepository _runArchiveRepository;
        public RunArchiveController(IRunArchiveRepository runArchiveRepository)
        {
            _runArchiveRepository = runArchiveRepository;
        }
        // GET: api/RunArchive
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return new ObjectResult(await _runArchiveRepository.GetAllRunDatas());
        }
        // GET: api/RunArchive/date
        [HttpGet("{key}", Name = "Get")]
        public async Task<IActionResult> Get(string key)
        {
            var runData = await _runArchiveRepository.GetRunData(key);
            if (runData == null)
                return new NotFoundResult();
            return new ObjectResult(runData);
        }
        // POST: api/RunArchive
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]RunData runData)
        {
            await _runArchiveRepository.Create(runData);
            return new OkObjectResult(runData);
        }
        // PUT: api/RunArchive/5
        [HttpPut("{key}")]
        public async Task<IActionResult> Put(string key, [FromBody]RunData runData)
        {
            var runDataFromDb = await _runArchiveRepository.GetRunData(key);
            if (runDataFromDb == null)
                return new NotFoundResult();
            runData.Id = runDataFromDb.Id;
            await _runArchiveRepository.Update(runData);
            return new OkObjectResult(runData);
        }
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{key}")]
        public async Task<IActionResult> Delete(string key)
        {
            var runDataFromDb = await _runArchiveRepository.GetRunData(key);
            if (runDataFromDb == null)
                return new NotFoundResult();
            await _runArchiveRepository.Delete(key);
            return new OkResult();
        }
    }
}
