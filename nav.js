(function(){
  var toggle = document.getElementById('navToggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  function closeMenu(){
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    var openDrops = document.querySelectorAll('.nav-drop.is-open');
    for (var i = 0; i < openDrops.length; i++) { openDrops[i].classList.remove('is-open'); }
  }

  toggle.addEventListener('click', function(){
    var isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Services dropdown: tap to expand in the mobile menu (desktop keeps using hover)
  var dropToggles = document.querySelectorAll('.nav-drop-toggle');
  for (var j = 0; j < dropToggles.length; j++) {
    dropToggles[j].addEventListener('click', function(e){
      if (window.innerWidth > 768) return;
      e.preventDefault();
      var parent = this.parentElement;
      if (parent) { parent.classList.toggle('is-open'); }
    });
  }

  // Close the mobile menu once a real link is tapped
  var navAnchors = links.querySelectorAll('a');
  for (var k = 0; k < navAnchors.length; k++) {
    navAnchors[k].addEventListener('click', closeMenu);
  }

  // Close on outside tap
  document.addEventListener('click', function(e){
    if (!links.classList.contains('is-open')) return;
    if (links.contains(e.target) || toggle.contains(e.target)) return;
    closeMenu();
  });

  // Reset if the viewport grows back to desktop width
  window.addEventListener('resize', function(){
    if (window.innerWidth > 768) closeMenu();
  });
})();
