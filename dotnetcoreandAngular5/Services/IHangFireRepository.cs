

using System.Threading.Tasks;

namespace dotnetcoreandAngular5.Services
{
    public interface IHangFireRepository
    {

        /// <summary>
        /// Method to Impletement Hangfire Job
        /// </summary>
         Task HangFireJobExecute();
    }
}
