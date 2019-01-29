using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace Bogoodski2019.Controllers
{
    public class EmailController : Controller
    {

        public class Message 
        {
            public string Name { get; set; }
            public string Email { get; set; }
            public string Subject { get; set; }
            public string Body { get; set; }
        }

        [Route("/api/sendemail")]
        [HttpPost]
        public async Task<IActionResult> SendMail([FromBody] Message message)
        {


            string key;
            string env = System.Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

            if (env == "Development")
            {
                key = System.Environment.GetEnvironmentVariable("SENDGRID_APIKEY");
            } else if (env == "Production")
            {
                key = Environment.GetEnvironmentVariable("SENDGRID_APIKEY");
            } else
            {
                key = System.Environment.GetEnvironmentVariable("SENDGRID_APIKEY");
            };

     
            
            var apiKey = key;
            var client = new SendGridClient(apiKey);
            string email = message.Email;
            string name = message.Name;
            string subject = message.Subject;
            string body = message.Body;

            var msg = new SendGridMessage()
            {
                From = new EmailAddress($"{email}", $"{name}"),
                Subject = $"{subject}",
                PlainTextContent = "test",
                HtmlContent = $"{body}"
            };
            msg.AddTo(new EmailAddress("sbogucki@mail.usf.edu", "Steve Bogucki"));
            var response = await client.SendEmailAsync(msg);

            return Ok(response);
        }
    }
}