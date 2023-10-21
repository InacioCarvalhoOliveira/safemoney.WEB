 using System.Diagnostics;
 using Microsoft.AspNetCore.Mvc;
 using safemoney.WEB.Models;
 namespace safemoney.API.Controllers
 {
 public class LoginControllercopy : Controller
 {
     private readonly ILogger<LoginControllercopy> _logger;
     public LoginControllercopy(ILogger<LoginControllercopy> logger)
     {
         _logger = logger;
     }
     public IActionResult LoginPage()
     {
         return View("LoginPagecopy");
     }
     [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
     public IActionResult Error()
     {
         return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
     }
 }
 }
