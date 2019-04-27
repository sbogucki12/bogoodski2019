using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bogoodski2019.BlogContent;
using Bogoodski2019.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bogoodski2019.Controllers
{
    
    [ApiController]
    public class BlogController : ControllerBase
    {
        [HttpGet]
        [Route("api/getblog")]
        public IActionResult GetBlog(int id)
        {
            if(id == 0)
            {
                BlogClass blog = WhatHappenedInDecember.blog;
                return Ok(blog);
            }
            if(id == 1)
            {
                BlogClass blog = MajorKey.blog;
                return Ok(blog);
            }

            return NotFound("Blog Not Found");
        }
    }
}