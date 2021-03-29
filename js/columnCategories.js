$(function(){
  setTimeout(function(){
    var categories = $('#categoriesColumn');
    var maxHeight =  $(window).height() >= $(document).height() ? $(window).height() : $(document).height();
    var paddingBot = maxHeight - (categories.offset().top + categories.height());
    categories.css({'padding-bottom':paddingBot});
  },200)
  

  $(window).resize(function(){
    var categories = $('#categoriesColumn');
    categories.css({'padding-bottom':0});
    maxHeight =  $(window).height() >= $(document).height() ? $(window).height() : $(document).height();
    paddingBot = maxHeight - (categories.offset().top + categories.height());
    categories.css({'padding-bottom':paddingBot});
  })
})

var urlCateg = window.location.pathname;

var mainCateg = '';

if(urlCateg.includes('lumini') || urlCateg.includes('automatizari_industriale')){
  $('video')[0].volume = 0;
  
  if($('video')[1]){
    $('video')[1].volume = 0;
  }
}

if(urlCateg.includes('automatizari_industriale')){
  $('video').css({maxHeight:$(window).width()<=1920 ? 306 : 712})
}

// $('#categoriesColumn .list-group-item').each(function(){
//   if(urlCateg.includes($(this).attr('href'))){
//     mainCateg= this;
//   }
// }).on({
//   mouseenter:function(){
//     $(mainCateg).toggleClass('activeCateg');
//     $(this).toggleClass('activeCateg');
//   },
//   mouseleave: function(){
//     $(mainCateg).toggleClass('activeCateg');
//     $(this).toggleClass('activeCateg');
//   }
// })