
using System.Threading.Tasks;
using dotnetcoreandAngular5.Services;
using Microsoft.AspNetCore.Mvc;

namespace dotnetcoreandAngular5.Controllers
{
    [Route("api/HangfireJob")]
    public  class HangfireJobController : Controller
    {
        private readonly IHangFireRepository _IHangFireRepository;

        public HangfireJobController(IHangFireRepository hangFireRepository)
        {
            _IHangFireRepository = hangFireRepository;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public  ActionResult ExecuteHangfireJob()
        {
            _IHangFireRepository.HangFireJobExecute();
            return Ok();
        }
    }
}
