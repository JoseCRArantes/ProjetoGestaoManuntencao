using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GMwebApi.DTO
{
    public class PedidoManutCurativaDtoCount
    {
        public IQueryable<PedidoManutCurativaDto> PedidoManutCurativaList { get; set; }

        public int CountPedidos { get; set; }
    }
}