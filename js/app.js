$(document).ready(function() {
  var $heart = $(".heart");
  $heart.click(function(){
    $(this).toggleClass("heart-clicked fa-heart fa-heart-o");
  });
  var $profileOverlay = $(".profile__overlay");
  var $closeBtn = $(".cancelLauncher");

  $closeBtn.click(function(){
    $profileOverlay.fadeOut();
  });
  var $openBtn = $(".fa-cog");
  $openBtn.click(function(){
    $profileOverlay.fadeIn();
  })

  var $logoutBtn = $(".logoutLauncher");
  $logoutBtn.click(function(){
    window.location = 'index.html'
  })
});
