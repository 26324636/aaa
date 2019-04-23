
$(".db_choose").on('dblclick',function(){
    var name = $(this).find('.db_choose_name')[0].innerHTML;
    console.log(name)
    layer_close("people_choose.html")
})
// var choose = document.getElementsByClassName('db_choose');

// console.log(choose)