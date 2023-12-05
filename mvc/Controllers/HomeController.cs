using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SampleMVCApp.Models;

namespace SampleMVCApp.Controllers;

public class HomeController : Controller
{

    public IActionResult Index()
    {
        ViewBag.Hello = "Hello World.";
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

}
