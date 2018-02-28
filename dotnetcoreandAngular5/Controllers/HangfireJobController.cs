
using System.Threading.Tasks;
using dotnetcoreandAngular5.Services;
using Microsoft.AspNetCore.Mvc;

namespace dotnetcoreandAngular5.Controllers
{
    [Route("api/HangfireJob")]
    public  class HangfireJobController : Controller
    {
        private readonly IHangFireRepository _IHangFireRepository;

        public HangfireJobController(HangFireRepository hangFireRepository)
        {
            _IHangFireRepository = hangFireRepository;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public  async Task<ActionResult> ExecuteHangfireJob()
        {
           await _IHangFireRepository.HangFireJobExecute();
            return Ok();
        }
    }
}