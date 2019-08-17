var len = dPlayerOptions.length;
var dPlayers = [];
for(var i=0;i<len;i++){
    dPlayers.push(new DPlayer({
        container: document.getElementById('player' + dPlayerOptions[i]['id']),
        live: dPlayerOptions[i]['live'],
        autoplay: dPlayerOptions[i]['autoplay'],
        theme: dPlayerOptions[i]['theme'],
        loop: dPlayerOptions[i]['loop'],
        lang: dPlayerOptions[i]['lang'],
        screenshot: dPlayerOptions[i]['screenshot'],
        hotkey: dPlayerOptions[i]['hotkey'],
        preload: dPlayerOptions[i]['preload'],
        logo: dPlayerOptions[i]['logo'],
        volume: dPlayerOptions[i]['volume'],
        mutex: dPlayerOptions[i]['mutex'],
        video: dPlayerOptions[i]['video'],
		hlsjsConfig: {
            debug: false,
            p2pConfig: {
            logLevel: true,
            live: dPlayerOptions[i]['live'],// 如果是直播设为true
            },
        },
        subtitle: dPlayerOptions[i]['subtitle'],
        danmaku: dPlayerOptions[i]['danmaku'],
    }));
}