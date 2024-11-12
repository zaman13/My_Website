$("#slideshow > div:gt(0)").hide();





$(document).ready(function() {
  setInterval(function() { 
    $('#slideshow > div:first').fadeOut(1500, function() {
      $(this).next().fadeIn(1500).end().appendTo('#slideshow');
    });
  }, 6000);
});

$("#slideshow2 > div:gt(0)").hide();


$(document).ready(function() {
  setInterval(function() { 
    $('#slideshow2 > div:first').fadeOut(1500, function() {
      $(this).next().fadeIn(1500).end().appendTo('#slideshow2');
    });
  }, 11000);
});

