using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Bogoodski2019.GuestbookFiles
{
    public class GuestbookContext : IGuestbookContext
    {
        private readonly IMongoDatabase _db;
        public GuestbookContext(IOptions<Settings> options)
        {
            var client = new MongoClient(options.Value.ConnectionString);
            _db = client.GetDatabase(options.Value.Database);
        }
        public IMongoCollection<GuestbookData> GuestbookDatas => _db.GetCollection<GuestbookData>("bogoodskiguestbook");
    }
}
