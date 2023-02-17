const $text = document.querySelector(".text");
// 글자 모음 - 개행문자(\n)로 줄바꿈
const letters = [
  "안녕하세요 \n 프론트앤드 개발자 \n 김연수입니다. ",
  "저의 \n 웹페이지에 \n 오신것을 환영합니다.", 
];
// 글자 입력 속도
const speed = 100;
let i = 0;
// 줄바꿈을 위한 <br> 치환
const changeLineBreak = (letter) => {
  return letter.map(text => text === "\n" ? "<br>" : text);
}
// 타이핑 효과
const typing = async () => {  
  // 기존코드에서 개행치환코드 추가
  const letter = changeLineBreak(letters[i].split(""));
  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift(); 
  }  
  // 잠시 대기
  await wait(800);  
  // 지우는 효과
  remove();
}
// 글자 지우는 효과
const remove = async () => {
  // 기존코드에서 개행치환코드 추가
  const letter = changeLineBreak(letters[i].split(""));
  
  while (letter.length) {
    await wait(speed);
    
    letter.pop();
    $text.innerHTML = letter.join(""); 
  }  
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i+1] ? 0 : i + 1;
  typing();
}
// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}
// 초기 실행
setTimeout(typing, 1500);

// 그래프
d3.selectAll('span').datum(function(){return this.dataset;}).style("width","0%").transition().duration(1500).style("width",d=>d.val)

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true, //버튼으로 페이지 이동
    type:'fraction' //페이지 버튼대신 슬라이드번호
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  spaceBetween : 50, // 패널사이의 간격
  grabCursor : true,//스와이프시 마우스 포인터 모양변경
  slidesPerView : 'auto', //css에 지정한 슬라이더의 크기를 반영
  centeredSlides : true, // 슬라이더 패널을 항상 가운데로
  speed : 1000
});

const tabList = document.querySelectorAll('.tab_menu .list li');
for(let i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      tabList[j].classList.remove('is_on');
    }
    this.parentNode.classList.add('is_on');
  });
}