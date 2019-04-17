using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bogoodski2019.Models
{
    public class BlogClass
    {
        public int Id { get; set; }
        public string BlogTitle { get; set; }
        public string PublishDate { get; set; }
        public string BlogContent { get; set; }
        public string BlogLink { get; set; }

        public BlogClass(int id, string blogTitle, string publishDate, string blogContent, string blogLink)
        {
            Id = id;
            BlogTitle = blogTitle;
            PublishDate = publishDate;
            BlogContent = blogContent;
            BlogLink = blogLink;
        }
    }
}
