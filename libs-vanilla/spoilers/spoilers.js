(function(){
  var detailsSpoilers = function(siblings){
  
  var spoilers = document.querySelectorAll('[data-spoiler-item]'),
       minimizeSiblings = siblings;
  
  init = function(){
    spoilersCycle();
  }
  spoilersCycle = function(){
    Array.prototype.slice.call(spoilers).forEach(item => {
       var question = item.querySelector('[data-spoiler-title]'),
       answer = item.querySelector('[data-spoiler-content]'),
       animationDuration = getComputedStyle(answer).getPropertyValue('--animation-duration'),
       milliseconds = parseInt(parseFloat(animationDuration) * (/\ds$/.test(animationDuration) ? 1000 : 1)),
       setHeight = function(){answer.style.setProperty('--details-height', answer.scrollHeight + 'px')};

      item.classList.add('js-details');

      if (item.open) {
        item.classList.add('is-open');
        setHeight();
      } else {
        item.open = true;
        setHeight();
        item.open = false;
      }
      
      question.addEventListener('click', clickListener);
    });
  }
  clickListener = function(e){
    var item = e.target.closest('[data-spoiler-item]'),
       answer = item.querySelector('[data-spoiler-content]'),
       animationDuration = getComputedStyle(answer).getPropertyValue('--animation-duration'),
       milliseconds = parseInt(parseFloat(animationDuration) * (/\ds$/.test(animationDuration) ? 1000 : 1));
    console.log(item)
    item.classList.toggle('is-open');
    
    if (item.open) {
      event.preventDefault();
      setTimeout(function () {
        item.open = false;
      }, milliseconds);
    }

    if (!minimizeSiblings) return;
    
    const siblings = Array.prototype.slice.call(item.parentNode.children)
    .filter(function(el){return el.classList.contains('js-details')})
      .filter(function(el){ return el !== event.target.parentNode});
    
    siblings.forEach(el => {
      el.classList.remove('is-open')
      setTimeout(function () {
        el.open = false
      }, milliseconds)
    });
  }
  init();
}
  detailsSpoilers(true);//true - при открытии одного спойлера закрываются его сиблинги; false - не закрываются
})();