(function () {

    var player = document.querySelector('.video-stream');
    var originalVolume = player.volume;

    player.addEventListener('timeupdate', function (event) {
        var duration = event.currentTarget.duration;
        var currentTime = event.currentTarget.currentTime;
        var percentage = currentTime / duration;
        if (duration - currentTime < 20.0 || percentage > 0.95) {
            player.volume = 1.0;
            console.log('BOOM!');
        } else {
            player.volume = originalVolume - (percentage * originalVolume);
        }
    });

})();
