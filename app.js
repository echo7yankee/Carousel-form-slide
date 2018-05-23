var carousel = document.querySelector('.carousel');
var innerContainer = document.querySelector('.inner-form-container');
var formContainers = document.querySelectorAll('.form-container');
var prev = document.querySelector('.btn-prev');
var next = document.querySelector('.btn-next');
var bubblesContainer = document.querySelector('.bubbles-container');
var currentIteration = 0;
var width = 480;
var bubblesArr = [];

for (var i = 0; i < formContainers.length; i++) {
    var bubbles = document.createElement('span');
    bubbles.classList.add('bubbles');
    bubblesContainer.appendChild(bubbles);
    bubblesArr.push(bubbles);
    

    bubbles.addEventListener('click',function(){

        currentIteration = i;

        if (currentIteration >= formContainers.length) {
            currentIteration = i - 1;
        } if (currentIteration > 0) {
            currentIteration = 0;
        }
        console.log(currentIteration);
        carouselSlide();
    });

}




next.addEventListener('click', function () {
    currentIteration++;
    if (currentIteration >= formContainers.length) {
        currentIteration = 0;
    }
    carouselSlide();
});

prev.addEventListener('click', function () {
    currentIteration--;
    if (currentIteration < 0) {
        currentIteration = formContainers.length - 1;
    }
    carouselSlide();
});

function carouselSlide() {
    innerContainer.style.left = -width * currentIteration + 'px';
    bubblesArr.forEach(function(bubbles,i){

        if (i === currentIteration) {
            bubbles.classList.add('active');
        } else {
            bubbles.classList.remove('active');
        }
    });
}
carouselSlide();
