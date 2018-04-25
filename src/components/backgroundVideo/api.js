const playerDefaults = {
  autoplay: 0, 
  autohide: 1, 
  modestbranding: 0, 
  rel: 0, 
  showinfo: 0, 
  loop: 1,
  controls: 0, 
  disablekb: 1, 
  enablejsapi: 0, 
  iv_load_policy: 3
};

export default class Video {
  constructor(videoId, id, screen) {
    this.player = null;
    this.screen = screen;
    this.videoId = videoId;
    this.id = id;
    this.play = this.play.bind(this);
    this.createPlayer = this.createPlayer.bind(this);
    this.rescale = this.rescale.bind(this)
    this.videoSettings = {
      'videoId': videoId, 
      'startSeconds': 18, 
      'suggestedQuality': 'hd720'
    }
  }

  init() {
    this.createPlayer(playerDefaults);
    this.rescale();
    this.play();
  }

  createPlayer(options) {
    const yt = require("youtube-player");
    this.player = yt(this.id, this.videoSettings);
  }

  play() {
    this.player.loadVideoById(this.videoId);
    this.player.playVideo()
      .then(() => {
        document.getElementById(this.id).classList.add('active');
      });
    this.player.mute();

    this.player.on("stateChange", (e) => {
      if (e.data === YT.PlayerState.ENDED) {
          this.player.playVideo(); 
      }
    })
  }

  rescale() {
    const w = window.innerWidth + 400;
    const h = window.innerHeight + 400;
    const screen = document.querySelector(this.screen);
    const tv1 = document.getElementById(this.id)

    if (w/h > 16/9) {
      this.player.setSize(w, w/16*9);
    } else {
      this.player.setSize(h/9*16, h);
    }
  }
}