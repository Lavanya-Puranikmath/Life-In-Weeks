
var num =prompt("enter ur age")

function Life(age)
{
    var days  = (90-age)*365
    var weeks = (90 -age)*52
    var months = (90-age)*12

    alert("you have " + days + "days " + weeks + "weeks "+ months +"months left. ")
}

Life(num)
