using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bogoodski2019.GuestbookFiles
{
    public interface IGuestbookRepository
    {
        Task<IEnumerable<GuestbookData>> GetAllGuestbookDatas();
        Task<GuestbookData> GetGuestbookData(int key);
        Task Create(GuestbookData guestbookData);
        Task<bool> Update(GuestbookData guestbookData);
        Task<bool> Delete(int key);
    }
}
