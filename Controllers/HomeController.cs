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
        ViewBag.From = "東京都御茶ノ水"; //出身地
        ViewBag.Hobby = "プログラミング"; //趣味
        ViewBag.MyBoom = "牛丼屋さん巡り"; //マイブーム
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
