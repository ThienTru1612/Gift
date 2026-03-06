const data = {
title: "Happy Women's Day",
subtitle: "Gửi đến Người phụ nữ tuyệt vời",
message:
"Thế giới này trở nên dịu dàng và ý nghĩa hơn nhờ có sự hiện diện của phái đẹp. Chúc bạn luôn rạng rỡ như những đóa hoa, tự tin tỏa sáng theo cách riêng và tận hưởng một ngày 8/3 trọn vẹn yêu thương!"
};

window.addEventListener("load", () => {

document.getElementById("title").innerText = data.title;
document.getElementById("subtitle").innerText = data.subtitle;

setTimeout(() => {

document.getElementById("intro").style.opacity = "0";

setTimeout(() => {

document.getElementById("intro").style.display = "none";
document.getElementById("main").style.opacity = "1";

if (typeof initStars === "function") initStars();

const bouquet = document.getElementById("bouquet");

setTimeout(() => {
bouquet.classList.add("active");
}, 500);

setTimeout(() => {

const env = document.getElementById("envelopeWrapper");

env.style.display = "block";

setTimeout(() => {
env.classList.add("float");
}, 100);

}, 3000);

}, 1000);

}, 3000);

});


function startTyping(text) {

let i = 0;
const el = document.getElementById("typingText");

el.innerHTML = "";

function type() {

if (i < text.length) {

el.innerHTML += text.charAt(i);

i++;

setTimeout(type, 35);
}

}

type();

}


let isOpened = false;

function openEnvelope() {

if (isOpened) return;

isOpened = true;

const env = document.getElementById("envelopeWrapper");

env.classList.remove("float");
env.classList.add("open");

burstSakura();

setTimeout(() => {

startTyping(data.message);

}, 1000);

}
