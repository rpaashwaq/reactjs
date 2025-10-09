using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductApiController : ControllerBase
    {
        static List<Product> products = new List<Product>()
        {
            new() { Category = 1, Price = 1000, ProductCode = "P001", ProductId = 101, ProductName = "Laptop" }
        };

        [HttpGet]
        [Route("getall")]
        public IActionResult GetAllProducts()
        {

            return StatusCode(StatusCodes.Status200OK, products);
        }

        [HttpPost]
        [Route("add")]
        public IActionResult AddProduct([FromBody] Product productToAdd)
        {
            products.Add(productToAdd);
            return StatusCode(StatusCodes.Status201Created, true);
        }

        [HttpDelete("delete/{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var prodctToDelete = products.FirstOrDefault(d => d.ProductId == id);
            if (prodctToDelete != null)
            {
                products.Remove(prodctToDelete);
                return Ok(true);
            }
            return StatusCode(StatusCodes.Status204NoContent);
        }

        [HttpGet("get/{id}")]
        public IActionResult GetProduct(int id)
        {
            var product = products.FirstOrDefault(p => p.ProductId == id);
            if (product != null)
                return StatusCode(StatusCodes.Status200OK, product);
            else
                return NotFound();

        }
    }
}
