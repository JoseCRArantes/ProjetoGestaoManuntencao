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
    
    public partial class PedidoManutPreventiva
    {
        public int ID { get; set; }
        public int IDEquipamento { get; set; }
        public string UtilizadorIDUser { get; set; }
        public int FichaManutencaoID { get; set; }
        public string DataLimiteManutencaoPrev { get; set; }
        public string DataDoPedido { get; set; }
    }
}
