"use strict";
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const listItem = document.querySelector('.caurosel .list');
const listThumb = document.querySelector('.caurosel .thumbnail');
const carosel = document.querySelector('.caurosel');
let timeRunning = 3000;
let runTimeOut;
let autoTime = 7000;
let autoRun = setTimeout(() => {
    next.click();
}, autoTime);
next.onclick = function () {
    showSlide('next');
};
prev.onclick = function () {
    showSlide('prev');
};
function showSlide(type) {
    let itemSlider = document.querySelectorAll('.caurosel .list .item');
    let itemThubnail = document.querySelectorAll('.caurosel .thumbnail .item');
    if (type === 'next') {
        listItem.appendChild(itemSlider[0]);
        listThumb.appendChild(itemThubnail[0]);
        carosel.classList.add('next');
    }
    else {
        const lastPositionItem = itemSlider.length - 1;
        console.log(lastPositionItem);
        listItem.prepend(itemSlider[lastPositionItem]);
        listThumb.prepend(itemThubnail[lastPositionItem]);
        carosel.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carosel.classList.remove('next');
        carosel.classList.remove('prev');
    }, timeRunning);
}
