jQuery.Huitab = function (tabBar, tabCon, class_name, tabEvent, i) {
    var $tab_menu = $(tabBar);
    // 初始化操作
    $tab_menu.removeClass(class_name);
    $(tabBar).eq(i).addClass(class_name);
    $(tabCon).hide();
    $(tabCon).eq(i).show();

    $tab_menu.bind(tabEvent, function () {
        $tab_menu.removeClass(class_name);
        $(this).addClass(class_name);
        var index = $tab_menu.index(this);
        $(tabCon).hide();
        $(tabCon).eq(index).show()
    })
}
$(function () {
    $.Huitab("#tab_demo .tabBar span", "#tab_demo .tabCon", "current", "click", "0")
});
Pagination({  
    ele: '#ele', 
    totalCount: 20,
    totalPage: 5,
    currentPage: 1, 
    needTotalCount: true,
    callback: function(page){   

    }
}); 
Pagination({  
    ele: '#ele1', 
    totalCount: 500,
    totalPage: 15,
    currentPage: 1, 
    needTotalCount: true,
    callback: function(page){   

    }
}); 