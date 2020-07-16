using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GMwebApi.DTO
{
    public class GrupoMaquinaDto
    {
        public int IDGrupoMaquinas { get; set; }
        public Nullable<int> CodigoInterno { get; set; }
        public string Descr { get; set; }
    }
}