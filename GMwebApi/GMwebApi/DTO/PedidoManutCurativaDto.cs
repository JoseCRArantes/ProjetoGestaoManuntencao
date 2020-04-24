using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GMwebApi.DTO
{
    public class PedidoManutCurativaDto
    {
        public int IDPedido { get; set; }
        public string UtilizadorIDUser { get; set; }

        public int IDEquipamento { get; set; }
        public string Descricao { get; set; }
        public Nullable<int> IDEstadoIntervencao { get; set; }
        public Nullable<System.DateTime> DataPedido { get; set; }

    }
}