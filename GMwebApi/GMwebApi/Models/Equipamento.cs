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
    
    public partial class Equipamento
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
