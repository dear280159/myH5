let $conlist = $('.content');
let $page = $(".swiper-slide");
var mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项
  effect: 'flip',
  on: {
    slideChange: function(){
      let ind = this.activeIndex;
      // console.log(ind);
      
      // if(ind >= 5){
      //   ind = 1;
      // }
      cut(ind)
    }
  },
});


function cut (index){
  // console.log(index);
  
  $page.eq(index - 1).addClass('current').siblings().removeClass('current');
  let lala = $('.content_one');
  let lalala = $(lala[1]);
  if(index == 5) {
    lalala.addClass('current');
  }else{
    lalala.removeClass('current');
  }
}