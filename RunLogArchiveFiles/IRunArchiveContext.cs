using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bogoodski2019
{
    public interface IRunArchiveContext
    {
        IMongoCollection<RunData> RunDatas { get; }
    }
}
