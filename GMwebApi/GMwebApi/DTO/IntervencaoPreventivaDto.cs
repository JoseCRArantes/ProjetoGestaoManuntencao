using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GMwebApi.DTO
{
    public class IntervencaoPreventivaDto
    {
        public int ID { get; set; }
        public int PedidoManutPreventivaID { get; set; }
        public string Observacoes { get; set; }
        public System.DateTime DataInicioIntervencao { get; set; }
        public System.DateTime DataFimIntervencao { get; set; }
        public Nullable<int> IDEstadoIntervencao { get; set; }
        public string UtilizadorIDUser { get; set; }

    }
}