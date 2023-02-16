// KEONI HAN
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
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/orders",
        success: function(response) {
            console.log(response);
            var newData = $("#List");
            newData.empty(); // remove any existing items
            $.each(response, function(index, order) {
                var currentItem = $("<li>").text(order.quantity + " " + order.topping);
                newData.append(currentItem);
            });
          },
          error: function(error) {
            console.log(error);
          }
    });
});
$( "#Feb" ).click(function() {
    document.getElementById("monthDrop").textContent="Feb";
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/orders",
        success: function(response) {
            console.log(response);
            var newData = $("#List");
            newData.empty(); // remove any existing items
            $.each(response, function(index, order) {
                var currentItem = $("<li>").text(order.quantity + " " + order.topping);
                newData.append(currentItem);
            });
          },
          error: function(error) {
            console.log(error);
          }
    });
});
$( "#Mar" ).click(function() {
    document.getElementById("monthDrop").textContent="Mar";
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/orders",
        success: function(response) {
            console.log(response);
            var newData = $("#List");
            newData.empty(); // remove any existing items
            $.each(response, function(index, order) {
                var currentItem = $("<li>").text(order.quantity + " " + order.topping);
                newData.append(currentItem);
            });
          },
          error: function(error) {
            console.log(error);
          }
    });
});
$( "#Apr" ).click(function() {
    document.getElementById("monthDrop").textContent="Apr";
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/orders",
        success: function(response) {
            console.log(response);
            var newData = $("#List");
            newData.empty(); // remove any existing items
            $.each(response, function(index, order) {
                var currentItem = $("<li>").text(order.quantity + " " + order.topping);
                newData.append(currentItem);
            });
          },
          error: function(error) {
            console.log(error);
          }
    });
});
$( "#May" ).click(function() {
    document.getElementById("monthDrop").textContent="May";
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/orders",
        success: function(response) {
            console.log(response);
            var newData = $("#List");
            newData.empty(); // remove any existing items
            $.each(response, function(index, order) {
                var currentItem = $("<li>").text(order.quantity + " " + order.topping);
                newData.append(currentItem);
            });
          },
          error: function(error) {
            console.log(error);
          }
    });
});
$( "#Jun" ).click(function() {
    document.getElementById("monthDrop").textContent="Jun";
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/orders",
        success: function(response) {
            console.log(response);
            var newData = $("#List");
            newData.empty(); // remove any existing items
            $.each(response, function(index, order) {
                var currentItem = $("<li>").text(order.quantity + " " + order.topping);
                newData.append(currentItem);
            });
          },
          error: function(error) {
            console.log(error);
          }
    });
});
$( "#Jul" ).click(function() {
    document.getElementById("monthDrop").textContent="Jul";
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/orders",
        success: function(response) {
            console.log(response);
            var newData = $("#List");
            newData.empty(); // remove any existing items
            $.each(response, function(index, order) {
                var currentItem = $("<li>").text(order.quantity + " " + order.topping);
                newData.append(currentItem);
            });
          },
          error: function(error) {
            console.log(error);
          }
    });
});
$( "#Aug" ).click(function() {
    document.getElementById("monthDrop").textContent="Aug";
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/orders",
        success: function(response) {
            console.log(response);
            var newData = $("#List");
            newData.empty(); // remove any existing items
            $.each(response, function(index, order) {
                var currentItem = $("<li>").text(order.quantity + " " + order.topping);
                newData.append(currentItem);
            });
          },
          error: function(error) {
            console.log(error);
          }
    });
});
$( "#Sep" ).click(function() {
    document.getElementById("monthDrop").textContent="Sep";
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/orders",
        success: function(response) {
            console.log(response);
            var newData = $("#List");
            newData.empty(); // remove any existing items
            $.each(response, function(index, order) {
                var currentItem = $("<li>").text(order.quantity + " " + order.topping);
                newData.append(currentItem);
            });
          },
          error: function(error) {
            console.log(error);
          }
    });
});
$( "#Oct" ).click(function() {
    document.getElementById("monthDrop").textContent="Oct";
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/orders",
        success: function(response) {
            console.log(response);
            var newData = $("#List");
            newData.empty(); // remove any existing items
            $.each(response, function(index, order) {
                var currentItem = $("<li>").text(order.quantity + " " + order.topping);
                newData.append(currentItem);
            });
          },
          error: function(error) {
            console.log(error);
          }
    });
});
$( "#Nov" ).click(function() {
    document.getElementById("monthDrop").textContent="Nov";
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/orders",
        success: function(response) {
            console.log(response);
            var newData = $("#List");
            newData.empty(); // remove any existing items
            $.each(response, function(index, order) {
                var currentItem = $("<li>").text(order.quantity + " " + order.topping);
                newData.append(currentItem);
            });
          },
          error: function(error) {
            console.log(error);
          }
    });
});
$( "#Dec" ).click(function() {
    document.getElementById("monthDrop").textContent="Dec";
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/orders",
        success: function(response) {
            console.log(response);
            var newData = $("#List");
            newData.empty(); // remove any existing items
            $.each(response, function(index, order) {
                var currentItem = $("<li>").text(order.quantity + " " + order.topping);
                newData.append(currentItem);
            });
          },
          error: function(error) {
            console.log(error);
          }
    });
});
