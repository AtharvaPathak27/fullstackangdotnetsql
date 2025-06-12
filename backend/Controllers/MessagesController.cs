using Microsoft.AspNetCore.Mvc;
using Backend.Data;
using Backend.Models;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MessagesController : ControllerBase
{
    private readonly AppDbContext _context;

    public MessagesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Message message)
    {
        _context.Messages.Add(message);
        await _context.SaveChangesAsync();
        return Ok(message);
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_context.Messages.ToList());
    }
}
