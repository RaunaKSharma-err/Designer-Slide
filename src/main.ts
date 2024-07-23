const prev = document.getElementById('prev') as HTMLElement;
const next = document.getElementById('next') as HTMLElement;
const listItem = document.querySelector('.caurosel .list') as HTMLElement;
const listThumb = document.querySelector('.caurosel .thumbnail') as HTMLElement;
const carosel = document.querySelector('.caurosel') as HTMLElement;

let timeRunning : number = 3000;
let runTimeOut:number;
let autoTime:number = 7000; 
let autoRun = setTimeout(() => {
  next.click();
},autoTime);

next.onclick = function(){
     showSlide('next');}
prev.onclick = function(){
     showSlide('prev');}
     
function showSlide(type:string) {
     let itemSlider:NodeListOf<Element>  = document.querySelectorAll('.caurosel .list .item');
     let itemThubnail:NodeListOf<Element> = document.querySelectorAll('.caurosel .thumbnail .item');

     if(type === 'next'){
          listItem.appendChild(itemSlider[0]);
          listThumb.appendChild(itemThubnail[0]);
          carosel.classList.add('next');
     }else{
          const lastPositionItem: number = itemSlider.length-1;
          console.log(lastPositionItem);
          
          listItem.prepend(itemSlider[lastPositionItem]);
          listThumb.prepend(itemThubnail[lastPositionItem]);
          carosel.classList.add('prev');
     }
     clearTimeout(runTimeOut);
     runTimeOut = setTimeout(()=> {
          carosel.classList.remove('next');
          carosel.classList.remove('prev');
     },timeRunning);
}