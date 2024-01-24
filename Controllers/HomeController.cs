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
        ViewBag.Name = "ライゾン 太郎";
        //以下の3項目を追加しよう！
        //出身地
        //趣味
        //マイブーム
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
