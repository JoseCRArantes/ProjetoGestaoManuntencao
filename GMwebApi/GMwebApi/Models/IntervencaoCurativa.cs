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
    
    public partial class IntervencaoCurativa
    {
        public int ID { get; set; }
        public int IDPedido { get; set; }
        public int IDEquipamento { get; set; }
        public string UtilizadorIDUser { get; set; }
        public string Descricao { get; set; }
        public string DataInicioIntervencao { get; set; }
        public string DataFimIntervencao { get; set; }
    
        public virtual Equipamento Equipamento { get; set; }
        public virtual PedidoManutCurativa PedidoManutCurativa { get; set; }
        public virtual Utilizador Utilizador { get; set; }
    }
}
