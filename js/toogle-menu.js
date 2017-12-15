// JavaScript Document

//navbar open close

$(".menu-opener").click(function () {
  $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
});

//navbar show hide on scroll
$(document).ready(function () {

  $(window).scroll(function () {

    var scrollValue = ($(window).scrollTop());

    console.log(scrollValue)
    if ($(window).scrollTop() > 200) {
      $('#nav_bar').show(300);
    }
    if ($(window).scrollTop() < 199) {
      $('#nav_bar').hide(100);
    }
  });
});

//chat window show hide
$(document).ready(function () {
  //$('#chat-window').hide();
  $('#chat').click(function () {
    /*  if ($('#chat-window').hasClass('spaceInRight')) {
      $('#chat-window').removeClass('spaceInRight');
      $('#chat-window').addClass('spaceOutRight');
    } else {
      $('#chat-window').removeClass('spaceOutRight');
      $('#chat-window').addClass('spaceInRight');
    }
 */
    $('#chat-window').toggle(function () {
      if ($('#chat-window').hasClass('spaceInRight')) {
        $('#chat-window').removeClass('spaceInRight');
        $('#chat-window').addClass('spaceOutRight');
      }
      if ($('#chat-window').hasClass('spaceOutRight')) {
        $('#chat-window').removeClass('spaceOutRight');
        $('#chat-window').addClass('spaceInRight');
      }
      /*  else {
        $('#chat-window').removeClass('spaceOutRight');
        $('#chat-window').addClass('spaceInRight');
      } */
    });

  })
});

//chat hint answer horizontal scroll

$(document).ready(function () {
  $('#ans-hints').mousewheel(function (e, delta) {
    this.scrollLeft -= (delta * 20);
    e.preventDefault();
  });

});