using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GMwebApi.DTO
{
    public class ManutPreventivaGrupoMaquina
    {
        
        public string UtilizadorIDUser { get; set; }
        public Nullable<System.DateTime> DataLimiteManutencaoPrev { get; set; }
        public Nullable<System.DateTime> DataPedido { get; set; }
        public string Descricao { get; set; }

        public Nullable<int> IDEquipamento { get; set; }



        // public Nullable<int> FichaManutencaoID { get; set; }
    }
}