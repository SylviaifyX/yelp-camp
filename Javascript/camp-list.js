function toggleMenu() {
    var div = document.getElementById("nav-menu");
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
  
  var mediaQuery = window.matchMedia("(min-width: 960px)");
  
  function handleMediaChange(e) {
    var div = document.getElementById("nav-menu");
    if (e.matches) {
      // Full screen view
      div.style.display = "none";
    }
  }
  
  mediaQuery.addListener(handleMediaChange);