using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GMwebApi.DTO
{
    public class PedidoPreventivaDtoCount
    {

        public IQueryable<PedidoPreventivaDto> PedidoManutPreventivoList { get; set; }

        public int CountPedidos { get; set; }
    }
}