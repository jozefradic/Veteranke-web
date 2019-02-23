using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Veteran.Api.Helpers
{
    public class AdvParams
    {
        private const int MaxPageSize = 50;
        // deff value of 1
        public int PageNumber { get; set; } = 1;
        private int pageSize = 10;

        public int PageSize
        {
            get { return pageSize; }
            set { pageSize = (value > MaxPageSize) ? MaxPageSize: value; }
        }

    }
}
