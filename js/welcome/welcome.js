

$(".sysNotice").on('click',function(){
    var title ='公告详情 —— ' + this.innerText;
    welcome_showNotice(title,'welcomeDetail.html','','410')
})


function welcome_showNotice(title, url, w, h) {
    layer_show(title, url, w, h);
}