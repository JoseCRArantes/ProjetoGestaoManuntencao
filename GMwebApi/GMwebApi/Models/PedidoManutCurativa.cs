//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace GMwebApi.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class PedidoManutCurativa
    {
        public int IDPedido { get; set; }
        public int UtilizadorIDUser { get; set; }
        public int IDEquipamento { get; set; }
        public string Descricao { get; set; }
        public Nullable<int> IDEstadoIntervencao { get; set; }
        public string DataPedido { get; set; }
    }
}