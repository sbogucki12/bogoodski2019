using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bogoodski2019.GuestbookFiles
{
    public class GuestbookRepository : IGuestbookRepository
    {
        private readonly IGuestbookContext _context;
        public GuestbookRepository(IGuestbookContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<GuestbookData>> GetAllGuestbookDatas()
        {
            return await _context
                            .GuestbookDatas
                            .Find(_ => true)
                            .ToListAsync();
        }
        public Task<GuestbookData> GetGuestbookData(int key)
        {
            FilterDefinition<GuestbookData> filter = Builders<GuestbookData>.Filter.Eq(m => m.Key, key);
            return _context
                    .GuestbookDatas
                    .Find(filter)
                    .FirstOrDefaultAsync();
        }

        public async Task Create(GuestbookData guestbookData)
        {
            await _context.GuestbookDatas.InsertOneAsync(guestbookData);
        }
        public async Task<bool> Update(GuestbookData guestbookData)
        {
            ReplaceOneResult updateResult =
                await _context
                        .GuestbookDatas
                        .ReplaceOneAsync(
                            filter: g => g.Id == guestbookData.Id,
                            replacement: guestbookData);
            return updateResult.IsAcknowledged
                    && updateResult.ModifiedCount > 0;
        }
        public async Task<bool> Delete(int key)
        {
            FilterDefinition<GuestbookData> filter = Builders<GuestbookData>.Filter.Eq(m => m.Key, key);
            DeleteResult deleteResult = await _context
                                                .GuestbookDatas
                                                .DeleteOneAsync(filter);
            return deleteResult.IsAcknowledged
                && deleteResult.DeletedCount > 0;
        }
    }
}
