using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bogoodski2019
{
    public class RunArchiveContext : IRunArchiveContext
    {
        private readonly IMongoDatabase _db;
        public RunArchiveContext(IOptions<Settings> options)
        {
            var client = new MongoClient(options.Value.ConnectionString);
            _db = client.GetDatabase(options.Value.Database);
        }
        public IMongoCollection<RunData> RunDatas => _db.GetCollection<RunData>("bogoodskirunarchive");
    }
}
