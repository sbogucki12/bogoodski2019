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
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;

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
                string storageConnectionString = Environment.GetEnvironmentVariable("storageconnectionstring");
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(storageConnectionString);
                if (CloudStorageAccount.TryParse(storageConnectionString, out storageAccount))
                {
                    CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
                    CloudBlobContainer container = blobClient.GetContainerReference("runlog");
                    CloudBlockBlob blob = container.GetBlockBlobReference("runpic");
                    using (var fileStream = System.IO.File.OpenWrite("runpic"))
                    {
                        blob.DownloadToStreamAsync(fileStream);
                    }

                    return Ok(blob.Uri);
                }
                else
                {
                    string message = "bad connection string";
                    return BadRequest(message);

                }
            }
            catch
            {
                return NotFound();
            }
        }

        [HttpPost]
        [Route("api/run/postimage")]
        public async Task<IActionResult> Post(IFormFile file)
        {
            try
            {
                string Token = Request.Headers["code"];
                string Date = Request.Headers["date"];
                string key = Environment.GetEnvironmentVariable("UPLOADKEY");

                if (Token == key)
                {
                    string storageConnectionString = Environment.GetEnvironmentVariable("storageconnectionstring");
                    CloudStorageAccount storageAccount = CloudStorageAccount.Parse(storageConnectionString);
                    CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
                    CloudBlobContainer container = blobClient.GetContainerReference("runlog");
                    CloudBlockBlob blob = container.GetBlockBlobReference(file.FileName);                    
                    using (var stream = file.OpenReadStream() )
                    {
                        await blob.UploadFromStreamAsync(stream);
                    }
                    
                    return Ok();
                }
                else
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