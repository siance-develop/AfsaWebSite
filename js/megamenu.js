$(function(){
  $('.pc-nav > ul > li').hover(function(){
    Panel = $(this).children('.Wrap');
    $('> a', this).addClass('active');
    Panel.each(function(){
      Panel.css({display:'block',opacity:'0',marginTop:'0px'}).stop().animate({opacity:'1',marginTop:'0'},100,'linear');
    });
  },function(){
    Panel.css({display:'none'});
    $('> a', this).removeClass('active');
  });
});
