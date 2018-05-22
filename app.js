var carousel = document.querySelector('.carousel');
var innerContainer = document.querySelector('.inner-form-container');
var formContainers = document.querySelectorAll('.form-container');
var prev = document.querySelector('.btn-prev');
var next = document.querySelector('.btn-next');
var currentIteration = 0;
var width = 480;

for (var i = 0; i < formContainers.length;i++);

next.addEventListener('click',function(){
    currentIteration++;
    if(currentIteration >= formContainers.length ) {
        currentIteration = 0;
    }
    carouselSlide();
});

prev.addEventListener('click',function(){
    currentIteration--;
    if (currentIteration < 0) {
        currentIteration = formContainers.length - 1;
    }
    carouselSlide();
});

function carouselSlide() {
    innerContainer.style.left = - width * currentIteration + 'px';
}