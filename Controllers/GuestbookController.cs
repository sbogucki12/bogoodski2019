using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bogoodski2019.GuestbookFiles;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace Bogoodski2019.Controllers
{
    [ApiController]
    public class GuestbookController : ControllerBase
    {
        private readonly IGuestbookRepository _guestbookRepository;

        public GuestbookController(IGuestbookRepository guestbookRepository)
        {
            _guestbookRepository = guestbookRepository;
        }

        // GET: api/guestbook
        [Route("api/guestbook")]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            ObjectResult data = new ObjectResult(await _guestbookRepository.GetAllGuestbookDatas());
            return Ok(data);
        }

        // POST: api/guestbook
        [Route("api/guestbook")]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]GuestbookData guestbookData)
        {
            await _guestbookRepository.Create(guestbookData);
            return new OkObjectResult(guestbookData);
        }

        // DELETE: api/guestbook/key
        [HttpDelete]
        [Route("api/guestbook/delete/{key:int}")]
        public async Task<IActionResult> Delete(int key)
        {
            var guestbookDataFromDb = await _guestbookRepository.GetGuestbookData(key);
            if (guestbookDataFromDb == null)
                return new NotFoundResult();
            await _guestbookRepository.Delete(key);
            return new OkResult();
        }

        //GET: api/guestook/key
        [HttpGet]
        [Route("api/guestbook/{key:int}")]
        public async Task<IActionResult> Get(int key)
        {
            var guestbookData = await _guestbookRepository.GetGuestbookData(key);
            if (guestbookData == null)
                return new NotFoundResult();
            return new ObjectResult(guestbookData);
        }

        //PUT: api/guestbook/update/5
        [HttpPut]
        [Route("api/guestbook/update/{key:int}")]
        public async Task<IActionResult> Put(int key, [FromBody]GuestbookData guestbookData)
        {
            var guestbookDataFromDb = await _guestbookRepository.GetGuestbookData(key);
            if (guestbookDataFromDb == null)
                return new NotFoundResult();
            guestbookData.Id = guestbookDataFromDb.Id;
            await _guestbookRepository.Update(guestbookData);
            return new OkObjectResult(guestbookData);
        }
    }
}
