using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using GMwebApi.DTO;
using GMwebApi.Models;

namespace GMwebApi.Controllers
{
    public class EquipamentoesController : ApiController
    {
        private BDGestaoManutencaoEntities1 db = new BDGestaoManutencaoEntities1();

        // GET: api/Equipamentoes
        [Authorize]
        public IQueryable<Equipamento> GetEquipamento()
        {
            return db.Equipamento;
        }

        // GET: api/Equipamentoes/5
        [ResponseType(typeof(Equipamento))]
        [Authorize]
        public async Task<IHttpActionResult> GetEquipamento(int id)
        {
            Equipamento equipamento = await db.Equipamento.FindAsync(id);
            if (equipamento == null)
            {
                return NotFound();
            }

            return Ok(equipamento);
        }

        // PUT: api/Equipamentoes/5
        [Authorize]
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutEquipamento(int id, Equipamento equipamento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != equipamento.IDEquipamento)
            {
                return BadRequest();
            }

            db.Entry(equipamento).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EquipamentoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Equipamentoes
        [Authorize]
        [ResponseType(typeof(Equipamento))]
        public async Task<IHttpActionResult> PostEquipamento(EquipamentoDto equipamentoDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Equipamento equipamento = EquipamentoDtoToEquipamento(equipamentoDto);
            db.Equipamento.Add(equipamento);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EquipamentoExists(equipamento.IDEquipamento))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = equipamento.IDEquipamento }, equipamento);
        }

        private Equipamento EquipamentoDtoToEquipamento(EquipamentoDto equipamentoDto)
        {
            return new Equipamento()
            {
                IDGrupoM = equipamentoDto.IDGrupoM,
                NumeroSerie = equipamentoDto.NumeroSerie,
                Descr = equipamentoDto.Descr,
                Marca = equipamentoDto.Marca,
                Tipo = equipamentoDto.Tipo,
                DataCompra = equipamentoDto.DataCompra,
                CodigoInterno = equipamentoDto.CodigoInterno,
                EstadoEqui = equipamentoDto.EstadoEqui
                //DataFimAtividade = equipamentoDto.DataFimAtividade
            };
        }

        // DELETE: api/Equipamentoes/5
        [ResponseType(typeof(Equipamento))]
        public async Task<IHttpActionResult> DeleteEquipamento(int id)
        {
            Equipamento equipamento = await db.Equipamento.FindAsync(id);
            if (equipamento == null)
            {
                return NotFound();
            }

            db.Equipamento.Remove(equipamento);
            await db.SaveChangesAsync();

            return Ok(equipamento);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EquipamentoExists(int id)
        {
            return db.Equipamento.Count(e => e.IDEquipamento == id) > 0;
        }
    }
}