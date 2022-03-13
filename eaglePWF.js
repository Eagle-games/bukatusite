$(window).on('load',function(){
    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
	
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
	
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
   //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg').on('animationend', function() {    
        //この中に動かしたいJSを記載
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
        
});

const targetElement = document.querySelectorAll(".anamationTarget");
console.log("画面の高さ", window.innerHeight)
document.addEventListener("scroll", function() {
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].
        getBoundingClientRect().top + targetElement[i].clientHeight * .6
        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
        }
    }
})

// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

let icon = document.querySelector('.icon-wrapper')
let menu = document.querySelector('.menu-list')
icon.addEventListener('click',()=>{
    icon.classList.toggle('show-animate');
    menu.classList.toggle('show-animate');
})


//derkmodeの動き
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', valueChange);

const body = document.getElementById('body');
const mode = document.getElementById('mode');
const video = document.getElementById('video');
const font = document.querySelectorAll('.font');

const modeText = [
    'DerkModeON',
    'DerkModeOFF'
];
mode.textContent = modeText[1];
function valueChange(event) {
    if (checkbox.checked) {
        body.classList.add('derk');
        mode.classList.remove('off');
        mode.classList.add('on');
        font[0].classList.add('wihte-font');
        font[1].classList.add('wihte-font');
        mode.textContent = modeText[0];
            setTimeout(function(){video.style.opacity = '0';},0);
            setTimeout(function(){video.src = "video/derk-logo-mv.mp4";},500);
            setTimeout(function(){video.style.opacity = '1';},500);
    } else {
        body.classList.remove('derk');
        mode.classList.remove('on');
        mode.classList.add('off');
        font[0].classList.remove('wihte-font');
        font[1].classList.remove('wihte-font');
        mode.textContent = modeText[1]
            setTimeout(function(){video.style.opacity = '0';},0);
            setTimeout(function(){video.style.opacity = '1';},500);
            setTimeout(function(){video.src = "video/rogomogura.mp4";},500);
}}
function check(){
    $("#overflow").show();
}
function ok(){
    $("#overflow").hide();
}
