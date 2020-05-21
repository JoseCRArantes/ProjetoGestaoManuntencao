using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace GMwebApi.DTO
{
    public class IntervencaoCurativaDtoCount
    {
        public IQueryable<IntervencaoCurativaDto> IntervencaoCurativaList { get; set; }

        public int CountIntervencoes { get; set; }

    }
}