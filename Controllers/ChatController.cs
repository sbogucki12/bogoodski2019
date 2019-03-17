using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using Newtonsoft.Json;

namespace Bogoodski2019.Controllers
{
    [ApiController]
    public class ChatController : ControllerBase
    {
        public static IHostingEnvironment _environment;

        public ChatController(IHostingEnvironment environment)
        {
            _environment = environment;
        }

        [HttpPost]
        [Route("api/chat/makeonline")]
        public async Task<IActionResult> MakeOnline(string online)
        {
            try
            {
                using (var reader = new StreamReader(Request.Body))
                {
                    online = reader.ReadToEnd();
                }

                string storageConnectionString = Environment.GetEnvironmentVariable("storageconnectionstring");
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(storageConnectionString);
                CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();                
                CloudBlobContainer container = blobClient.GetContainerReference("chat");
                await container.CreateIfNotExistsAsync();
                CloudBlockBlob blob = container.GetBlockBlobReference("isonline");
                await container.CreateIfNotExistsAsync();
                await blob.UploadTextAsync(online);
               

                return Ok();

            }
            catch (Exception ex)
            {
                return NotFound(ex);
            }
        }

        [HttpPost]
        [Route("api/chat/makeoffline")]
        public async Task<IActionResult> MakeOffline(string online)
        {
            try
            {
                using (var reader = new StreamReader(Request.Body))
                {
                    online = reader.ReadToEnd();
                }

                string storageConnectionString = Environment.GetEnvironmentVariable("storageconnectionstring");
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(storageConnectionString);
                CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
                CloudBlobContainer container = blobClient.GetContainerReference("chat");
                await container.CreateIfNotExistsAsync();
                CloudBlockBlob blob = container.GetBlockBlobReference("isonline");
                await container.CreateIfNotExistsAsync();
                await blob.UploadTextAsync(online);


                return Ok();

            }
            catch (Exception ex)
            {
                return NotFound(ex);
            }
        }

        [HttpGet]
        [Route("api/chat/isonline")]
        public async Task<string> GetOnlineStatus()
        {
            try
            {
                string storageConnectionString = Environment.GetEnvironmentVariable("storageconnectionstring");
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(storageConnectionString);
                if (CloudStorageAccount.TryParse(storageConnectionString, out storageAccount))
                {
                    CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
                    CloudBlobContainer container = blobClient.GetContainerReference("chat");
                    CloudBlockBlob blob = container.GetBlockBlobReference("isonline");
                    var valueFromBlob =  await blob.DownloadTextAsync(); 

                    return valueFromBlob;
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