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
    
    public partial class IntervencaoPreventiva
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
