using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Bogoodski2019.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {

        public class Message
        {
            public string Name { get; set; }
            public string Email { get; set; }
            public string Subject { get; set; }
            public string Body { get; set; }
        }

        Message newMessage = new Message();
        List<Message> messages = new List<Message>();   

        [HttpPost("[action]")]
        public Message postMessage([FromBody] Message message)
        {
            newMessage.Name = message.Name;
            newMessage.Email = message.Email;
            newMessage.Subject = message.Subject;
            newMessage.Body = message.Body;
            messages.Add(newMessage);

            return messages[0];
        }

        [HttpGet("[action]")]
        public Message getMessage()
        {
            return messages[0];
        }
    }
}
