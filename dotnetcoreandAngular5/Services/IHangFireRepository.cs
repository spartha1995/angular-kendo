

using System.Threading.Tasks;

namespace dotnetcoreandAngular5.Services
{
    interface IHangFireRepository
    {

        /// <summary>
        /// Method to Impletement Hangfire Job
        /// </summary>
         Task HangFireJobExecute();
    }
}
