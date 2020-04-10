using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GMwebApi.DTO
{
    public class UtilizadorDto
    {
        public string Id { get; set; }
        public int IDTipo { get; set; }
        public int NumeroUtilizador { get; set; }
        public string Nome { get; set; }

        //public Nullable<System.DateTime> DataInativacao { get; set; }
    }
}