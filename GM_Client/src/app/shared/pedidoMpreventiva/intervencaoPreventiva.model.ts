export interface IntervencaoPreventivo {
    ID: number;
    PedidoManutPreventivaID: number;
    UtilizadorIDUser: string;
    DataInicioIntervencao: Date;
    DataFimIntervencao: Date;
    Observacoes: string;
    IDEstadoIntervencao:number;
}


