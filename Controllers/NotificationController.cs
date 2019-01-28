using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SendGrid;
using SendGrid.Helpers.Mail;
using Microsoft.Extensions.Configuration;

namespace Bogoodski2019.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationController : ControllerBase
    {
        //private readonly IConfiguration _configuration;

        //public NotificationController(IConfiguration configuration)
        //{
        //    _configuration = configuration;
        //}

        public class Message
        {
            public string Name { get; set; }
            public string Email { get; set; }
            public string Subject { get; set; }
            public string Body { get; set; }
        }

        
        [HttpPost]
        [Route("SendNotification")]
        public async Task PostMessage([FromBody]Message message)
        {

           


            //var apiKey = hidden
            //var client = new SendGridClient(apiKey);
            var from = new EmailAddress(message.Email, message.Name);
            var to = new EmailAddress("sbogucki@mail.usf.edu", "steve bogucki");

            var subject = message.Subject;
            var body = message.Body;

            /*var displayRecipients = false;*/ // set this to true if you want recipients to see each others mail id 
            var msg = MailHelper.CreateSingleEmail(from, to, subject, "plain text", body);
            //var response = await client.SendEmailAsync(msg);
            

            
        }

        //[Route("SendNotification")]
        //[HttpPost]
        //public async Task SubmitForm(Message message)
        //{

        //    string returnMessage = await PostMessage(message);
            
        //}
       
    }
}