/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("first-section-content")
    if (x.className === "topnav") {
        x.className += " responsive";
        y.className += " first-section-responsive";
    } else {
        x.className = "topnav";
        y.className = "col-md-8";
    }
}