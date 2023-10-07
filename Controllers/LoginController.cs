using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using safemoney.WEB.Models;

namespace safemoney.API.Controllers
{

public class LoginController : Controller
{
    private readonly ILogger<LoginController> _logger;

    public LoginController(ILogger<LoginController> logger)
    {
        _logger = logger;
    }

    public IActionResult LoginPage()
    {
        return View("LoginPage");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

}
}


