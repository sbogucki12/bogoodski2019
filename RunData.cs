using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bogoodski2019
{
    public class RunData
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string Comment { get; set; }
        public double Distance { get; set; }
        public double Duration { get; set; }
        public string Date { get; set; }
        public string Key { get; set; }
    }
}
