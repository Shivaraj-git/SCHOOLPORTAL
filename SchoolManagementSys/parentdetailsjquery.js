$(document).ready(function(){
    let details=new URLSearchParams(window.location.search);
    $("#stdname").append(details.get("stdname"));
    $("#stdreg").append(details.get("stdreg"));
    $("#stdroll").append(details.get("stdroll"));

    $("#pntname").append(details.get("pntname"));
    $("#pntpno").append(details.get("pntpno"));
    $("#pntrel").append(details.get("pntrel"));
    $("#pntocc").append(details.get("pntocc"));

});

$("#backtologin").click(function(){
    window.location.href="parentidlogin.html";
});

$("#mousevent").mouseover(function(){
    let details=new URLSearchParams(window.location.search);
    let name=details.get("stdname");
    $(this).text(name);
});

$("#mousevent").mouseout(function(){
    $(this).text("Student name appears here when you bring cursor here....");
});

$("#doubleclick").dblclick(function(){
    window.alert("You double clicked the button!");
});

$("#focusblur").focus(function(){
    $(this).css("background-color","blueviolet");
});

$("#focusblur").focus(function () {
    this.style.backgroundColor = "blueviolet";  
});

$("#focusblur").blur(function () {
    this.style.backgroundColor = "aquamarine"; 
});