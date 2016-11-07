# ShakeToPlay

This is an example app which uses tone.js & gyro.js to modify the playbackRate of a mp3 file. In order to increase the playbackRate you have to shake your phone up and down. After a few seconds the playbackRate will decrease again and you have to repeat the shaking process.

**Important**: The Tone.Buffer takes ages to load the mp3 file - this part needs some optimization!


## Installation

### Requirements

* [Cordova](https://github.com/apache/cordova-cli)

### Clone repo and create project

Clone the repository to a temporary directory:

```
git clone https://github.com/jnsdbr/shaketoplay.git shaketoplaytmp
```

Create a new cordova project

```
cordova create ShakeToPlay
```

Copy the files from the repository to the cordova project

```
cd shaketoplaytmp
cp -R * ../ShakeToPlay/
cd ..
rm -rf shaketoplaytmp
cd ShakeToPlay
```

Add a platform

```
cordova platform add android
```

Build & run

```
cordova build android
cordova run android
```

### Libraries used

* [Tone.js](https://github.com/Tonejs/Tone.js)
* [gyro.js](https://github.com/tomgco/gyro.js)

### Song Credits

[Decktonic - Watch Your Dubstep Version 2](http://freemusicarchive.org/music/Decktonic/Stars/Decktonic_-_Stars_-_06_Watch_Your_Dubstep_Version_2)
