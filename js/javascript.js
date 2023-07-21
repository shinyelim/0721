//현재 index 를 저장하는 변수 (초기값:0)으로 설정함
let cur = 0;
let len = $('.slide-item').length;
//console.log(len)
// len이라는 변수에, .slide-item라는 클래스가 가진 요소들의 총 갯수 저장
for (i =0; i < len; i++) {
  //dots이라는 id값을
  $('#dots').append('<div></div>');
  
}
//slide 이동하는 함수, <dir> 이라는 매개변수에 따라서 이전이나 다음으로 이동하는것이다. 
function sliding(dir) {
  cur = cur + dir;
  //cur 값이 양수일 경우에  다음번 슬라이드로 이동
  //음수값일경우에는 이전 슬라이드로 이동
  //마지막 슬라이드에서 다음버튼을 누르면 처음슬라이드로 이동
  //처음 슬라이드에서 이전버튼을 누르면 마지막 슬라이드로 이동 
  if (cur >= len) {
    cur = 0 
  }else if (cur < 0) {
    cur = len -1;
  }
  {
    
  }
  //siblings:형제 요소를 찾는 함수
  //siblings 이용해서 현재 슬라이드를 제외한 나머지 슬라이드를 
  //제외한 나머지 슬라이드를 fadeOut 시킨다.//
$('.slide-item').eq(cur).siblings('.slide-item').stop().fadeOut();

//fadeIn()으로 현재 슬라이드를 화면에 보이게 한다.//
$('.slide-item').eq(cur).stop().fadeIn(function () {
  $(this).siblings('.slide-item').children('p').css({
    marginTop:"20px",
    opacity: 0
  })
  $(this).children('p').stop().animate({
    marginTop: 0,
    opacity: 1
  },600)
});

$('#dots div').removeClass('is-active');
$('#dots div').eq(cur).addClass('is-active');
}
sliding(0)
//백그라운드 이미지가 밑에있는 버튼같이 애니메이션효과올려오는 기능
$('#prev').click(function(){sliding(-1)});


$('#next').click(function(){sliding(0.5)});
  
let auto = setInterval(sliding, 2000, 1);
 //밑에있는 원버튼3개 해당 슬라이드로 이동
 $('#dots div').click(function () {
  cur = 0;
  let num = $(this).index()
  sliding(num);
})

