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
    
    public partial class Utilizador
    {
        public int IDUser { get; set; }
        public int IDTipo { get; set; }
        public int NumeroUtilizador { get; set; }
        public string Nome { get; set; }
        public Nullable<int> EstadoAtividade { get; set; }
        public Nullable<System.DateTime> DataInativacao { get; set; }
    }
}
