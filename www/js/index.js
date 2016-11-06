var app = {
    isPlaying: false,
    player: null,
    audioFiles: [
        'decktonic-watch_your_dubstep_version2.mp3'
    ],
    timerInterval: null,
    currentPlaybackRate: 1,
    defaultTimeOut: 10000,
    timeOut: 0,

    // Application Constructor
    initialize: function() {
        var _this = this;
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        // gyro.js - detect shaking
        gyro.frequency = 100;
        gyro.startTracking(function(o) {
            if (o.y < -20 || o.y > 20) {
                _this.currentPlaybackRate += 0.025;
                if (_this.currentPlaybackRate > 1) {
                    _this.currentPlaybackRate = 1;
                    _this.timeOut = _this.defaultTimeOut;
                    document.getElementById('icon-phone').className = 'icon-phone_android big';
                }
                _this.player.playbackRate = _this.currentPlaybackRate;
            }
        });
    },

    updateTimer: function() {
        if (this.timeOut > 0) {
            this.timeOut -= 500;
        }
        else {
            document.getElementById('icon-phone').className = 'icon-phone_android big shake';
            this.currentPlaybackRate -= 0.025;

            if (this.currentPlaybackRate < 0) {
                this.currentPlaybackRate = 0;
            }

            this.player.playbackRate = this.currentPlaybackRate;
            this.timer = 0;
        }
    },

    onDeviceReady: function() {
        // Player
        this.player = new Tone.Player({
            'url': 'audio/' + this.audioFiles[0],
            'loop': true
        }).toMaster();

        Tone.Buffer.on("load", function(){
            console.log('Buffer loaded -> play');
            this.timerInterval = setInterval(this.updateTimer.bind(this), 500);
            document.getElementById('icon-phone').className = 'icon-phone_android big shake';

            // Disable autostart if you want
            this.player.start();
            this.isPlaying = true;
            this.timeOut = this.defaultTimeOut;
            this.currentPlaybackRate = 0;
            this.player.playbackRate = this.currentPlaybackRate;
        }.bind(this));
    }
};

app.initialize();
