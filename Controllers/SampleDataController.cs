using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SendGrid;
using SendGrid.Helpers.Mail;
using Microsoft.Extensions.Configuration;

namespace Bogoodski2019.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SampleDataController : Controller
    {
        //private readonly IConfiguration _configuration;

        //public SampleDataController(IConfiguration configuration)
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

        //Message newMessage = new Message();
        //List<Message> messages = new List<Message>();

        
        [HttpPost("sendnotification")]
        public Task PostMessage([FromBody] Message message)
        {
            string name = message.Name;
            string email = message.Email;
            string subject = message.Subject;
            string body = message.Body;

            Task response = Execute(name, email, subject, body);

            return response; 
            //newMessage.Name = message.Name;
            //newMessage.Email = message.Email;
            //newMessage.Subject = message.Subject;
            //newMessage.Body = message.Body;
            //messages.Add(newMessage);
        }

        static async Task Execute(string email, string name, string body, string subject)
        {
            //var apiKey = hidden
           
            //var client = new SendGridClient(apiKey);
            var from = new EmailAddress(email, name);
            var to = new EmailAddress("sbogucki@mail.usf.edu", "steve bogucki");



            var htmlContent = body;
            /*var displayRecipients = false;*/ // set this to true if you want recipients to see each others mail id 
            var msg = MailHelper.CreateSingleEmail(from, to, subject, "plain text", htmlContent);
            //var response = await client.SendEmailAsync(msg);
            //Response response = await client.SendEmailAsync(msg);

        }




        //[HttpGet("[action]")]
        //public Message getMessage()
        //{
        //    return newMessage;
        //}
    }
}
