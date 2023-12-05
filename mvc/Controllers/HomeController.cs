using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace SampleMVCApp.Controllers;

public class HomeController : Controller
{

    public IActionResult Index()
    {
        ViewBag.Hello = "Hello World.";
        return View();
    }

    public IActionResult Profile()
    {
        return View();
    }

}
