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
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public PedidoManutPreventiva()
        {
            this.IntervencaoPreventiva = new HashSet<IntervencaoPreventiva>();
        }
    
        public int ID { get; set; }
        public int IDEquipamento { get; set; }
        public int UtilizadorIDUser { get; set; }
        public int FichaManutencaoID { get; set; }
        public string DataLimiteManutencaoPrev { get; set; }
        public string DataDoPedido { get; set; }
    
        public virtual Equipamento Equipamento { get; set; }
        public virtual FichaManutencao FichaManutencao { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<IntervencaoPreventiva> IntervencaoPreventiva { get; set; }
        public virtual Utilizador Utilizador { get; set; }
    }
}