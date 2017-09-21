
function ValidateCard() {
    var result = true;
    /*Regular expressions to validate credit card is in valid format
    */
    var VisaReg = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var AmericanExpressReg = /^3[47][0-9]{13}$/;
    var MasterCardReg = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;

    var cardnumber = $("#cardNumber").val();
    var cardtype = $("#ddlCardType").val();
    var expirydate = $("#cardExpiry").val();
    var cardholdername = $("#cardHolderName").val();

    if (cardnumber == null || cardnumber == "") {
        $("#spncardNumber").text("Please Enter Card Number");
        $("#spncardNumber").show();
        result = false;
    }
    else if (cardnumber != null && cardnumber != "") {
        if (cardtype == "VISA") {
            if (!VisaReg.test(cardnumber)) {
                $("#spncardNumber").text("Enter Valid Visa Card Number");
                $("#spncardNumber").show();
                result = false;
            }
        }
        else if (cardtype == "AMERICAN EXPRESS") {
            if (!AmericanExpressReg.test(cardnumber)) {
                $("#spncardNumber").text("Enter Valid AE Card Number");
                $("#spncardNumber").show();
                result = false;
            }
        }
        else {
            if (!MasterCardReg.test(cardnumber)) {
                $("#spncardNumber").text("Enter Valid Master Card Number");
                $("#spncardNumber").show();
                result = false;
            }
        }       
    }
    if (expirydate == null || expirydate == "") {
        $("#spncardExpiry").text("Please Enter Expiry Date");
        $("#spncardExpiry").show();
        result = false;
    }
    if (cardholdername == null || cardholdername == "") {
        $("#spncardHolderName").text("Please Enter Card Holder Name");
        $("#spncardHolderName").show();
        result = false;
    }
    if (result == true) {
        if (!isCardNumberValid(cardnumber, false)) {
            alert("Card Number Faile Luhn Alogitham Test");
            result = false;
        }
    }
    return result;
}

/*checks whether card is valid or not using luhn algoritham
current credit cards in market are following this algoritham*/
function isCardNumberValid(cardNumber, allowSpaces) {
    if (allowSpaces) {
        cardNumber = cardNumber.replace(/ /g, '');
    }
    if (!cardNumber.match(/^\d+$/)) {
        return false;
    }
    var checksum = 0;
    for (var i = 0; i < cardNumber.length; i++) {
        var n = (cardNumber.charAt(cardNumber.length - i - 1) - '0') << (i & 1);
        checksum += n > 9 ? n - 9 : n;
    }
    return (checksum % 10) == 0 && checksum > 0;
}

$(document).ready(function () {
    $("#cardNumber").focus(function () {
        if ($("#cardNumber") != "") {
            $("#spncardNumber").hide();
        }
    });
    $("#cardExpiry").focus(function () {
        if ($("#cardExpiry") != "") {
            $("#spncardExpiry").hide();
        }
    });
    $("#cardHolderName").focus(function () {
        if ($("#cardHolderName") != "") {
            $("#spncardHolderName").hide();
        }
    });
});