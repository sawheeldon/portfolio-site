
//function to hide everything in the portfolioLinks sections until the relevant buttons are clicked.

var hideLinks = function (){
  $('.projectOne').hide();
  $('.projectTwo').hide();
  $('.projectThree').hide();
}

//functions to show information onclick

//show project one and keep others hidden

var showProjOne = function (){
  $('#projectOneButton').click(function(){
    $('.projectOne').toggle();
    $('.projectTwo').hide();
    $('.projectThree').hide();
  });
}

//show project two and keep others hidden

var showProjTwo = function (){
  $('#projectTwoButton').click(function(){
    $('.projectTwo').toggle();
    $('.projectOne').hide();
    $('.projectThree').hide();
  });
}
//show project three and keep others hidden

var showProjThree = function (){
  $('#projectThreeButton').click(function(){
    $('.projectThree').toggle();
    $('.projectOne').hide();
    $('.projectTwo').hide();
  });
}

$(document).ready(function () {
// alert('Link Established');
hideLinks();
showProjOne();
showProjTwo();
showProjThree();

});
