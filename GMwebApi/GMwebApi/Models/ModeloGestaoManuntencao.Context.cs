﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class BDGestaoManutencaoEntities1 : DbContext
    {
        public BDGestaoManutencaoEntities1()
            : base("name=BDGestaoManutencaoEntities1")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AspNetRoles> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaims> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogins> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUsers> AspNetUsers { get; set; }
        public virtual DbSet<Equipamento> Equipamento { get; set; }
        public virtual DbSet<EstadoIntervencao> EstadoIntervencao { get; set; }
        public virtual DbSet<FichaManutencao> FichaManutencao { get; set; }
        public virtual DbSet<GrupoMaquina> GrupoMaquina { get; set; }
        public virtual DbSet<IntervencaoCurativa> IntervencaoCurativa { get; set; }
        public virtual DbSet<IntervencaoPreventiva> IntervencaoPreventiva { get; set; }
        public virtual DbSet<PedidoManutCurativa> PedidoManutCurativa { get; set; }
        public virtual DbSet<PedidoManutPreventiva> PedidoManutPreventiva { get; set; }
        public virtual DbSet<sysdiagrams> sysdiagrams { get; set; }
        public virtual DbSet<TipoUtilizador> TipoUtilizador { get; set; }
    }
}