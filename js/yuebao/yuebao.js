
$(document).ready(function () {

    // window.location.reload();
    $("#tableMain").FrozenTable(0, 0, 5, 0);

})
// var buss_people = document.getElementsByClassName('buss_people');
// buss_people[0].onclick = function(){
//     console.log(2222)
// }
$(".buss_people").on('click',function(){
    var title ='人员选择';
    welcome_showNotice(title,'people_choose.html','','710')
})

function welcome_showNotice(title, url, w, h) {
    layer_show(title, url, w, h);
}