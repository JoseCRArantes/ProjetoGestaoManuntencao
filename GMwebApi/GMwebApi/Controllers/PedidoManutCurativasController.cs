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
using System.Web.Http.Description;
using GMwebApi.Models;
using GMwebApi.DTO;
using System.Threading;
using System.Web.Security;
using System.Web;
using System.Security.Claims;
using Microsoft.Owin.Security.OAuth;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity;

namespace GMwebApi.Controllers
{
    [Authorize]
    public class PedidoManutCurativasController : ApiController
    {
        private BDGestaoManutencaoEntities1 db = new BDGestaoManutencaoEntities1();


        /// <summary>
        /// GET Pedidos, com paginação incluída.
        /// </summary>
        /// <param name="pedidosPerPage"></param>
        /// <param name="currentPage"></param>
        /// <returns></returns>
        [Authorize(Roles = "Admin, Utilizador, Convidado")]
        public PedidoManutCurativaDtoCount GetPedidoManutCurativa(int pedidosPerPage, int currentPage, int grupoMaquina, string dataInicio, string dataFim, int equipamentoId)
        {
            PedidoManutCurativaDtoCount pedidoManutCurativaDtoCount = new PedidoManutCurativaDtoCount();

            DateTime aux = new DateTime();

            //Pesquisa sem filtros
            if (grupoMaquina == 0 && equipamentoId==0)
            {
                Console.Write(dataFim);
                DateTime dataInicioConvertida = DateTime.ParseExact(dataInicio, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);
                DateTime dataFimConvertida = DateTime.ParseExact(dataFim, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);

                aux = dataFimConvertida.AddDays(1);
                

                //Adiciona 1 dia à data fim, por definicão e como exemplo, 
                // o dia 1 de Janeiro conta até ás 00H00 e não às 23h:59.

                IQueryable<PedidoManutCurativaDto> pMcurativa =
                 from c in db.AspNetUsers
                 from p in db.PedidoManutCurativa
                 where (p.UtilizadorIDUser == c.Id && p.DataPedido >= dataInicioConvertida && p.DataPedido <= aux)
                 orderby p.DataPedido descending
                 select new PedidoManutCurativaDto
                 {
                     IDPedido = p.IDPedido,
                     UtilizadorIDUser = c.Nome,
                     IDEquipamento = p.IDEquipamento,
                     Descricao = p.Descricao,
                     DataPedido = p.DataPedido
                 };

                IQueryable<PedidoManutCurativaDto> result = pMcurativa.Skip(
                     pedidosPerPage * (currentPage - 1)).Take(pedidosPerPage);

                pedidoManutCurativaDtoCount = new PedidoManutCurativaDtoCount()
                {
                    PedidoManutCurativaList = result,
                    CountPedidos = pMcurativa.Count()
                };

            }

            //Filtro apenas com grupo de máquina.
            if (grupoMaquina != 0 && equipamentoId==0)
            {
                DateTime dataInicioConvertida = DateTime.ParseExact(dataInicio, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);
                DateTime dataFimConvertida = DateTime.ParseExact(dataFim, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);
                aux = dataFimConvertida.AddDays(1);

                dataFimConvertida = dataFimConvertida.AddDays(1); //Adiciona 1 dia à data fim, por definicão e como exemplo, 
                // o dia 1 de Janeiro conta até ás 00H00 e não às 23h:59.

                IQueryable<PedidoManutCurativaDto> pMcurativa =
                 from eq in db.Equipamento
                 from c in db.AspNetUsers
                 from p in db.PedidoManutCurativa
                 where p.UtilizadorIDUser ==c.Id
                 where (p.IDEquipamento == eq.IDEquipamento && eq.IDGrupoM == grupoMaquina && p.DataPedido >= dataInicioConvertida && p.DataPedido <= aux)
                 orderby p.DataPedido descending
                 select new PedidoManutCurativaDto
                 {
                     IDPedido = p.IDPedido,
                     UtilizadorIDUser = c.Nome,
                     IDEquipamento = p.IDEquipamento,
                     Descricao = p.Descricao,
                     DataPedido = p.DataPedido
                 };

                IQueryable<PedidoManutCurativaDto> result = pMcurativa.Skip(
                     pedidosPerPage * (currentPage - 1)).Take(pedidosPerPage);

                pedidoManutCurativaDtoCount = new PedidoManutCurativaDtoCount()
                {
                    PedidoManutCurativaList = result,
                    CountPedidos = pMcurativa.Count()
                };
            }

            //Pesquisa com todos os filtros ativos.
            if (grupoMaquina!=0 && equipamentoId!=0)
            {
                DateTime dataInicioConvertida = DateTime.ParseExact(dataInicio, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);
                DateTime dataFimConvertida = DateTime.ParseExact(dataFim, "yyyy-MM-dd",
                                         System.Globalization.CultureInfo.InvariantCulture);

                aux = dataFimConvertida.AddDays(1); //Adiciona 1 dia à data fim, por definicão e como exemplo, 
                                                                  // o dia 1 de Janeiro conta até ás 00H00 e não às 23h:59.

                IQueryable<PedidoManutCurativaDto> pMcurativa =
                      from eq in db.Equipamento
                      from c in db.AspNetUsers
                      from p in db.PedidoManutCurativa
                      where p.UtilizadorIDUser == c.Id
                      where (p.IDEquipamento == eq.IDEquipamento && eq.IDGrupoM == grupoMaquina && p.IDEquipamento==equipamentoId &&
                      p.DataPedido >= dataInicioConvertida && p.DataPedido <=aux)
                      orderby p.DataPedido descending
                      select new PedidoManutCurativaDto
                      {
                          IDPedido = p.IDPedido,
                          UtilizadorIDUser = c.Nome,
                          IDEquipamento = p.IDEquipamento,
                          Descricao = p.Descricao,
                          DataPedido = p.DataPedido
                      };

                IQueryable<PedidoManutCurativaDto> result = pMcurativa.Skip(
                     pedidosPerPage * (currentPage - 1)).Take(pedidosPerPage);

                pedidoManutCurativaDtoCount = new PedidoManutCurativaDtoCount()
                {
                    PedidoManutCurativaList = result,
                    CountPedidos = pMcurativa.Count()
                };
            }

           

                return pedidoManutCurativaDtoCount;
        }





        // GET: api/PedidoManutCurativas/5
        [Authorize(Roles = "Admin, Utilizador, Convidado")]
        [ResponseType(typeof(PedidoManutCurativa))]
        public async Task<IHttpActionResult> GetPedidoManutCurativa(int id)
        {
            PedidoManutCurativa pedidoManutCurativa = await db.PedidoManutCurativa.FindAsync(id);
            if (pedidoManutCurativa == null)
            {
                return NotFound();
            }

            return Ok(pedidoManutCurativa);
        }

        // PUT: api/PedidoManutCurativas/5
        [Authorize(Roles = "Admin, Utilizador")]
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPedidoManutCurativa(int id, PedidoManutCurativa pedidoManutCurativa)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pedidoManutCurativa.IDPedido)
            {
                return BadRequest();
            }

            db.Entry(pedidoManutCurativa).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PedidoManutCurativaExists(id))
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
        

        /// <summary>
        /// DTO para o método Post
        /// </summary>
        /// <param name="pedidoManutCurativaDto"></param>
        /// <returns></returns>
        private PedidoManutCurativa PedidoMCurativaDtoTOPedidoMCurativa(PedidoManutCurativaDto pedidoManutCurativaDto)
        {
            var user = User.Identity.GetUserId();
            return new PedidoManutCurativa()
            {
                UtilizadorIDUser = (string)user,
                IDEquipamento = pedidoManutCurativaDto.IDEquipamento,
                Descricao = pedidoManutCurativaDto.Descricao,
                DataPedido = DateTime.Now //pedidoManutCurativaDto.DataPedido
            };
        }


        // POST: api/PedidoManutCurativas
        [Authorize(Roles = "Admin, Utilizador, Convidado")]
        [ResponseType(typeof(PedidoManutCurativa))]
        public async Task<IHttpActionResult> PostPedidoManutCurativa(PedidoManutCurativaDto pedidoManutCurativaDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            PedidoManutCurativa pedidoManutCurativa = PedidoMCurativaDtoTOPedidoMCurativa(pedidoManutCurativaDto);
            db.PedidoManutCurativa.Add(pedidoManutCurativa);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PedidoManutCurativaExists(pedidoManutCurativa.IDPedido))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = pedidoManutCurativa.IDPedido }, pedidoManutCurativa);
        }

        // DELETE: api/PedidoManutCurativas/5
        [Authorize(Roles = "Admin, Utilizador")]
        [ResponseType(typeof(PedidoManutCurativa))]
        public async Task<IHttpActionResult> DeletePedidoManutCurativa(int id)
        {
            PedidoManutCurativa pedidoManutCurativa = await db.PedidoManutCurativa.FindAsync(id);
            if (pedidoManutCurativa == null)
            {
                return NotFound();
            }

            db.PedidoManutCurativa.Remove(pedidoManutCurativa);
            await db.SaveChangesAsync();

            return Ok(pedidoManutCurativa);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PedidoManutCurativaExists(int id)
        {
            return db.PedidoManutCurativa.Count(e => e.IDPedido == id) > 0;
        }
    }
}