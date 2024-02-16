document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', smoothScroll);
    }
    
    function smoothScroll(e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      var topOffset = targetElement.offsetTop;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  });