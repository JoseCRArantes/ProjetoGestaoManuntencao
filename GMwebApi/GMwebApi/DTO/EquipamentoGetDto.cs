using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GMwebApi.DTO
{
    public class EquipamentoGetDto
    {
        public int IDEquipamento { get; set; }
        public int IDGrupoM { get; set; }
        public string NumeroSerie { get; set; }
        public string Descr { get; set; }
        public string Marca { get; set; }
        public string Tipo { get; set; }
        public Nullable<System.DateTime> DataCompra { get; set; }
        public string CodigoInterno { get; set; }
        public Nullable<int> EstadoEqui { get; set; }
        public Nullable<System.DateTime> DataFimAtividade { get; set; }
    }
}