using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GMwebApi.DTO
{
    public class EquipamentoDto
    {
        public int IDGrupoM { get; set; }
        public string NumeroSerie { get; set; }
        public string Descr { get; set; }
        public string Marca { get; set; }
        public string Tipo { get; set; }
        public DateTime DataCompra { get; set; }
        public string CodigoInterno { get; set; }
        public Nullable<int> EstadoEqui { get; set; }
        //public DateTime DataFimAtividade { get; set; }
    }
}