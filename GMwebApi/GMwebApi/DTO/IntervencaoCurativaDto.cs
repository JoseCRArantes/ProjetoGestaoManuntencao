using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GMwebApi.DTO
{
    public class IntervencaoCurativaDto
    {
        public int IDEstadoIntervencao { get; set; }
        public int ID { get; set; }
        public int IDPedido { get; set; }
        public string UtilizadorIDUser { get; set; }
        public string Descricao { get; set; }
        public System.DateTime DataInicioIntervencao { get; set; }
        public System.DateTime DataFimIntervencao { get; set; }

    }
}

