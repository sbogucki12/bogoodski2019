using System;
using SendGrid.Helpers.Mail;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http.Headers;
using System.Web;
using SendGrid;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;


namespace Bogoodski2019.services
{
    public class SendGridEmailService
    {


        private readonly IConfiguration _configuration;

        public SendGridEmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task Execute(string name, string email, string subject, string body)
        {
            var apiKey = _configuration.GetSection("SENDGRID_API_KEY").Value; 
            var client = new SendGridClient(apiKey);
            var msg = new SendGridMessage()
            {
                From = new EmailAddress(email, name),
                Subject = subject,
                PlainTextContent = "Plain text Content",
                HtmlContent = body
            };
            msg.AddTo(new EmailAddress("sbogucki@mail.usf.edu", "From BoGoodSki.com"));
            var response = await client.SendEmailAsync(msg);
        }
    }
}
