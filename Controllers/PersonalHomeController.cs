 using System.Diagnostics;
 using Microsoft.AspNetCore.Mvc;
 using safemoney.WEB.Models;
 namespace safemoney.API.Controllers
 {
 public class PersonalHomeController : Controller
 {
     private readonly ILogger<PersonalHomeController> _logger;
     public PersonalHomeController(ILogger<PersonalHomeController> logger)
     {
         _logger = logger;
     }
     public IActionResult PersonalHome()
     {
         return View();
     }
     [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
     public IActionResult Error()
     {
         return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
     }
 }
 }
