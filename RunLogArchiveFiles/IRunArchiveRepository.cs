using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bogoodski2019
{
    public interface IRunArchiveRepository
    {
        Task<IEnumerable<RunData>> GetAllRunDatas();
        Task<RunData> GetRunData(string date);
        Task Create(RunData runData);
        Task<bool> Update(RunData runData);
        Task<bool> Delete(string date);
    }
}
