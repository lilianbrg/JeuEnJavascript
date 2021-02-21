/* Les assets, on pourra plus tard ajouter des sons et des musiques */
const assetsToLoadURLs = {
    vaisseau: { url: "/assets/images/vaisseau.png" },
    background: { url: "/assets/images/background.jpg" },
    alien: { url: "/assets/images/alien.png" },
    alienmechant: { url: "/assets/images/alienmechant.png" },
    bulletleft: {url: "/assets/images/bulletleft.png"},
    bullettop: {url: "/assets/images/bullettop.png"},
    bulletbottom: {url: "/assets/images/bulletbottom.png"},
    bulletright: {url: "/assets/images/bulletright.png"}
    
    /*musicHome: {
        url:
            "./assets/audio/musicHome.wav",
        buffer: true,
        loop: true,
        volume: 0.1,
    },
    musicEnd: {
        url:
            "./assets/audio/musicEnd.wav",
        buffer: true,
        loop: true,
        volume: 0.1,
    },*/
    /* Travail de victor
    musicGame : {
    url:
    "./assets/audio/musicGame.mp3",
    buffer: true,
    loop: true,
    volume: 0.3,
    },
    drinkRhum: {
    url:9
    "./assets/audio/drink.wav",
    buffer: false,
    loop: false,
    volume: 0.5,
    },
    sharkPain: {
    url:
    "./assets/audio/pain.wav",
    buffer: false,
    loop: false,
    volume: 0.5,
    } */
};

function loadAssets(callback) {
    // here we should load the souds, the sprite sheets etc.
    // then at the end call the callback function
    loadAssetsUsingHowlerAndNoXhr(assetsToLoadURLs, callback);
}

// You do not have to understand in details the next lines of code...
// just use them!

/* ############################
BUFFER LOADER for loading multiple files asyncrhonously. The callback functions is called when all
files have been loaded and decoded 
############################## */
function isImage(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

function isAudio(url) {
    return url.match(/\.(mp3|ogg|wav)$/) != null;
}

function loadAssetsUsingHowlerAndNoXhr(assetsToBeLoaded, callback) {
    var assetsLoaded = {};
    var loadedAssets = 0;
    var numberOfAssetsToLoad = 0;

    // define ifLoad function
    var ifLoad = function () {
        if (++loadedAssets >= numberOfAssetsToLoad) {
            callback(assetsLoaded);
        }
        console.log("Loaded asset " + loadedAssets);
    };

    // get num of assets to load
    for (var name in assetsToBeLoaded) {
        numberOfAssetsToLoad++;
    }

    console.log("Nb assets to load: " + numberOfAssetsToLoad);

    for (name in assetsToBeLoaded) {
        var url = assetsToBeLoaded[name].url;
        console.log("Loading " + url);
        if (isImage(url)) {
            assetsLoaded[name] = new Image();

            assetsLoaded[name].onload = ifLoad;
            // will start async loading.
            assetsLoaded[name].src = url;
        } else {
            // We assume the asset is an audio file
            console.log(
                "loading " + name + " buffer : " + assetsToBeLoaded[name].loop
            );
            assetsLoaded[name] = new Howl({
                urls: [url],
                buffer: assetsToBeLoaded[name].buffer,
                loop: assetsToBeLoaded[name].loop,
                autoplay: false,
                volume: assetsToBeLoaded[name].volume,
                onload: function () {
                    if (++loadedAssets >= numberOfAssetsToLoad) {
                        callback(assetsLoaded);
                    }
                    console.log("Loaded asset " + loadedAssets);
                },
            }); // End of howler.js callback
        } // if
    } // for
} // function