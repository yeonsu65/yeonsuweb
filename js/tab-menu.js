
  // $("div.table ul.menu li").click(function(){
  //   var ids = $(this).index();
  //   $("div.table ul.menu li").removeClass("on");
  //   $("div.table ul.menu li").addClass("on");
  //   $("div.content_wrap > div").hide();
  //   $("div.content_wrap > div").eq(idx).show();
  // })

  const menu = document.querySelector("div.table ul.menu li");
  menu.addEventListener('click', function(){
    var ids = (this).index();
    menu.removeClass("on");
    menu.addClass("on");
    const div = document.querySelector("div.content_wrap > div");
    div.hide();
    div.eq(ids).show();
  })