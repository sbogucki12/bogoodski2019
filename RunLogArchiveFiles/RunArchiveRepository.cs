using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bogoodski2019
{
    public class RunArchiveRepository : IRunArchiveRepository
    {
        private readonly IRunArchiveContext _context;
        public RunArchiveRepository(IRunArchiveContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<RunData>> GetAllRunDatas()
        {
            return await _context
                            .RunDatas
                            .Find(_ => true)
                            .ToListAsync();
        }
        public Task<RunData> GetRunData(int key)
        {
            FilterDefinition<RunData> filter = Builders<RunData>.Filter.Eq(m => m.Key, key);
            return _context
                    .RunDatas
                    .Find(filter)
                    .FirstOrDefaultAsync();
        }

        public async Task Create(RunData runData)
        {
            await _context.RunDatas.InsertOneAsync(runData);
        }
        public async Task<bool> Update(RunData runData)
        {
            ReplaceOneResult updateResult =
                await _context
                        .RunDatas
                        .ReplaceOneAsync(
                            filter: g => g.Id == runData.Id,
                            replacement: runData);
            return updateResult.IsAcknowledged
                    && updateResult.ModifiedCount > 0;
        }
        public async Task<bool> Delete(int key)
        {
            FilterDefinition<RunData> filter = Builders<RunData>.Filter.Eq(m => m.Key, key);
            DeleteResult deleteResult = await _context
                                                .RunDatas
                                                .DeleteOneAsync(filter);
            return deleteResult.IsAcknowledged
                && deleteResult.DeletedCount > 0;
        }
    }
}
