$(".switch").on("click",changeText);
// changing when click on Switch
function changeText(){
    var isChecked=$("input")[0].checked;
    if(isChecked===true)
    {
        $(".basic ul .h1").html("$19.99");
        $(".profession ul .h1").html("$49.99");
        $(".master ul .h1").html("$39.99");
    }
    else if(isChecked===false)
    {
        $(".basic ul .h1").html("$199.99");
        $(".profession ul .h1").html("$499.99");
        $(".master ul .h1").html("$399.99");
    }
}