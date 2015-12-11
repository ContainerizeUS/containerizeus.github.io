var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
           events: {
               'onReady': onPlayerReady}
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.mute();
}


