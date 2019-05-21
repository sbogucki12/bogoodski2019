using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bogoodski2019.Models
{
    public class RunArchiveData
    {
        public int Id { get; set; }
        public double Duration { get; set; }
        public double Distance { get; set; }
        public string Date { get; set; }
        public string Comment { get; set; }

        public RunArchiveData(string comment, string date, double distance, double duration, int id)
        {
            Comment = comment;
            Date = date;
            Distance = distance;
            Duration = duration; 
            Id = id; 
        }
    }
}
