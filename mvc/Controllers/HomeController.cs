using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace LyzonMVCApp.Controllers;

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

        public IActionResult Discount()
    {
        return View();
    }

        public IActionResult Janken()
    {
        return View();
    }

}
