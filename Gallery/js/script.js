$(document).ready(function(){

    var div=$("<div></div>");
    div.addClass("gallery-thumbnails");

    $(".gallery .gallery-item").each(function(){
        var a=$("<a href='#'></a>");
        var img=$("<img/>");
        img.attr("src",$(this).find("img").data("thumbnails"));
        a.append(img);
        div.append(a);
    })
    $(".gallery").append(div);

   $(".gallery .gallery-thumbnails a").hover(function(){
      var index=$(this).index();

      $(".gallery .gallery-thumbnails").find(".border").removeClass("border");
      $(this).addClass("border");

      $(".gallery").find(".active").removeClass("active");
      $(".gallery .gallery-item").eq(index).addClass("active");
   })
});