using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;

namespace Bogoodski2019.Controllers
{   
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

                string key = Environment.GetEnvironmentVariable("UPLOADKEY");
                
                if (Token == key)
                {
                    string storageConnectionString = Environment.GetEnvironmentVariable("storageconnectionstring");
                    CloudStorageAccount storageAccount = CloudStorageAccount.Parse(storageConnectionString);
                    CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
                    CloudBlobContainer container = blobClient.GetContainerReference("runlog");
                    CloudBlockBlob blob = container.GetBlockBlobReference(file.FileName);
                    using (var stream = file.OpenReadStream())
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

        [HttpPost]
        [Route("api/run/postdate")]
        public async Task<IActionResult> PostDate(string date)
        {
            try
            {                
                using (var reader = new StreamReader(Request.Body))
                {
                    date = reader.ReadToEnd();
                }

                string storageConnectionString = Environment.GetEnvironmentVariable("storageconnectionstring");
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(storageConnectionString);
                CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
                CloudBlobContainer container = blobClient.GetContainerReference("runlog");                
                CloudBlockBlob blob = container.GetBlockBlobReference("runpic.jpg");
                blob.Metadata["date"] = date;
                await blob.SetMetadataAsync();

                return Ok(blob.Metadata);
                
            }
            catch (Exception ex)
            {
                return NotFound(ex);
            }
        }

        [HttpGet]
        [Route("api/run/getdate")]
        public async Task<string> GetDate()
        {
            try
            {
                string storageConnectionString = Environment.GetEnvironmentVariable("storageconnectionstring");
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(storageConnectionString);
                if (CloudStorageAccount.TryParse(storageConnectionString, out storageAccount))
                {
                    CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
                    CloudBlobContainer container = blobClient.GetContainerReference("runlog");
                    CloudBlockBlob blob = container.GetBlockBlobReference("runpic.jpg");
                    await blob.FetchAttributesAsync();
                    string date = blob.Metadata["date"];

                    return date;
                }
                else
                {
                    string message = "bad connection string";
                    return message;

                }
            }
            catch
            {
                string message = "exception";
                return message;
            }
        }
    }   
}