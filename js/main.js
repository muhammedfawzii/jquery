///<reference types="../@types/jquery"/>
$('aside a').on('click', function(e){
  let links = e.target.getAttribute('href')
  let secOffset = $(links).secOffset().top
  $('body, html').animate({scrollTop: secOffset}, 10000)
})


$('#about #heading1').on('click', function(){
    $('#about #para3').slideUp(1000)
    $('#about #para2').slideUp(1000)
    $('#about #para4').slideUp(1000)
    $('#para1').slideToggle(500)
})


$('#about #heading2').on('click', function(){
    $('#about #para3').slideUp(1000)
    $('#about #para1').slideUp(1000)
    $('#about #para4').slideUp(1000)
    $('#para2').slideToggle(500)
})


$('#about #heading3').on('click', function(){
    $('#about #para2').slideUp(1000)
    $('#about #para1').slideUp(1000)
    $('#about #para4').slideUp(1000)
    $('#para3').slideToggle(500)
})


$('#about #heading4').on('click', function(){
    $('#about #para3').slideUp(1000)
    $('#about #para1').slideUp(1000)
    $('#about #para2').slideUp(1000)
    $('#para4').slideToggle(500)
})

$('#open').on('click', function(){
    $('#open').animate({marginLeft: '255'}, 1000)
    $('aside').animate({width: '250' , marginLeft:'0'}, 1000)
})
$('#closeBtn').on('click', function(){
    $('aside').animate({ marginLeft:'-300px'}, 1000)
    $('#open').animate({marginLeft: '0'}, 1000)
})

$(function(){
    $('.loader').fadeOut(2000, function(){
        $('.loading').slideUp(3000, function(){
            $('body').css('overflow', 'auto')
            $('.loading').remove()
        })
    })
})




$(function() {
    // Set the countdown start date to 99 days from now
    var countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 99);
    countDownDate = countDownDate.getTime();

    // Update the countdown every 1 second
    var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the countdown date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in elements with id
        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

        // If the countdown is over, write some text
        if (distance < 0) {
            clearInterval(x);
            $(".countdown").html("EXPIRED");
        }
    }, 1000);
});




