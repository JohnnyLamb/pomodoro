$(document).on('ready', function() {
      $("#start").on("click", function() {
        var clock = $('.your-clock').FlipClock({
        });
        clock.setCountdown(true);
        clock.setTime(1499);
        console.log('hey');
      });
       $("#stop").on("click", function() {
      });
});
