using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ValidateCreditCard.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
    // Luhn alogitham server validation code.

    //public static class LuhnUtility
    //{
    //    public static bool IsCardNumberValid(string cardNumber, bool allowSpaces = false)
    //    {
    //        if (allowSpaces)
    //        {
    //            cardNumber = cardNumber.Replace(" ", "");
    //        }

    //        if (cardNumber.Any(c => !Char.IsDigit(c)))
    //        {
    //            return false;
    //        }

    //        int checksum = cardNumber
    //           .Select((c, i) => (c - '0') << ((cardNumber.Length - i - 1) & 1))
    //           .Sum(n => n > 9 ? n - 9 : n);

    //        return (checksum % 10) == 0 && checksum > 0;
    //    }
    //}
}