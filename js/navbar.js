var url = window.location.pathname;

var elements = {tab1:'index',tab2:'despreNoi',myDropdown:'lucrariExecutate',tab4:'contact'}

var main = '';

for(let el in elements){
  if(url.includes(elements[el])){
    main = `#${el}`;
  }
}

main = main==='' ? `#myDropdown` : main;

$('.nav-item').click(function(event){
  if($(this).attr('id') === $(event.target).attr('id') && !($(this).attr('id') === 'myDropdown' && main==='#myDropdown')){
    $(this).children()[0].click();
  }
})

$('#myDropdown').click(function(event){
  if($(window).width() < 992 && main === '#myDropdown'){
    event.preventDefault();
    if($('#subCategoriesVeLE').css('visibility') === 'hidden'){
      $('#subCategoriesVeLE').stop().css({visibility:'visible',maxHeight:1000})
    }else{
      $('#subCategoriesVeLE').stop().css({maxHeight:0});
    window.myTimeout = setTimeout(function(){
      $('#subCategoriesVeLE').stop().css({visibility:'hidden'})
    },1000)
    }
  }
})

// $('.nav-item').on({
//   mouseenter:function(){
//     $(main).toggleClass('active');
//     $(this).toggleClass('active');
//   },
//   mouseleave: function(){
//     $(main).toggleClass('active');
//     $(this).toggleClass('active');
//   }
// })
