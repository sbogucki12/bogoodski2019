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
        public string BlogContentPart2 { get; set; }
        public string BlogContentPart3 { get; set; }
        public string BlogContentPart4 { get; set; }

        public string BlogLink { get; set; }

        public BlogClass(int id, string blogTitle, string publishDate, string blogContent, string blogLink)
        {
            Id = id;
            BlogTitle = blogTitle;
            PublishDate = publishDate;
            BlogContent = blogContent;
            BlogLink = blogLink;            
        }

        public BlogClass(int id, string blogTitle, string publishDate, string blogContent, string blogContentPart2, string blogContentPart3, string blogContentPart4, string blogLink)
        {
            Id = id;
            BlogTitle = blogTitle;
            PublishDate = publishDate;
            BlogContent = blogContent;
            BlogContentPart2 = blogContentPart2;
            BlogContentPart3 = blogContentPart3;
            BlogContentPart4 = blogContentPart4;
            BlogLink = blogLink;
        }
    }
}
