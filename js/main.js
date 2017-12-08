 /*Initialize Swiper*/
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',

    }

});


 var music=document.getElementById("music");
 var imgbg=document.getElementById("imgbg");
 var imgmc=document.getElementById("imgmc");
 var audio=document.getElementById("audio");
 var flag = 1;
 music.onclick = function(){
     if(flag == 1){
        imgbg.style.display="none";
         imgmc.style.animation="none";
         audio.pause();
         flag=0;
     }else {
         imgbg.style.display="block";
         imgmc.style.animation="zhuan 1s infinite linear";
         audio.play();
         flag=1;
     }
};




