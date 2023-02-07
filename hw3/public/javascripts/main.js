$(document).ready(function () {
            
    //This function called when the button is clicked
    $("#button").click(function () {

        var txt = $("#descText").val();

        // WARNS USER THAT THERE IS DAIRY IN THE CHEESECAKES
        if (txt.indexOf("vegan")!=-1)
        {
            alert('WARNING: Cheesecake Contains Dairy')
        }
        // REMOVES HTML ELEMENTS IF THERE IS NO VEGAN INSTRUCTIONS
        else {
            $("#descText").remove()
            $("#button").remove()
            $("#Plain").remove()
            $("#Cherry").remove()
            $("#Chocolate").remove()
            $("#quantity").remove()
            $("#table").remove()
            $("#Notes").remove()
            $("#List").remove()
            $("#orderTitle").remove()
            $("#monthDrop").remove()
            $("#imageCake").remove()
            $("#top header").remove()
            $("body").append("<h2>THANK YOU FOR ORDERING!</h2>");
        }
        
    });
});


$( "#Jan" ).click(function() {
    document.getElementById("monthDrop").textContent="Jan";
});
$( "#Feb" ).click(function() {
    document.getElementById("monthDrop").textContent="Feb";
});
$( "#Mar" ).click(function() {
    document.getElementById("monthDrop").textContent="Mar";
});
$( "#Apr" ).click(function() {
    document.getElementById("monthDrop").textContent="Apr";
});
$( "#May" ).click(function() {
    document.getElementById("monthDrop").textContent="May";
});
$( "#Jun" ).click(function() {
    document.getElementById("monthDrop").textContent="Jun";
});
$( "#Jul" ).click(function() {
    document.getElementById("monthDrop").textContent="Jul";
});
$( "#Aug" ).click(function() {
    document.getElementById("monthDrop").textContent="Aug";
});
$( "#Sep" ).click(function() {
    document.getElementById("monthDrop").textContent="Sep";
});
$( "#Oct" ).click(function() {
    document.getElementById("monthDrop").textContent="Oct";
});
$( "#Nov" ).click(function() {
    document.getElementById("monthDrop").textContent="Nov";
});
$( "#Dec" ).click(function() {
    document.getElementById("monthDrop").textContent="Dec";
});
