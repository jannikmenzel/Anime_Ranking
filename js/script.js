let videos = [
    "7aMOurgDB-o", "faqmNf_fZlE", "CID-sYQNCew", "YkJvHe3KK2c",
    "GwaRztMaoY0", "ZYlaUrj2Zkk", "C0zMWogztQs", "210R0ozmLwg",
    "-pHfPJGatgE", "1oOBjyOKu2o", "a4na2opArGY", "rwCJvSKzQkc",
    "dFlDRhvM4L0", "MM8RufZr5lw", "qMHVyjuza44", "aso1mQLUAbc",
    "kNyR46eHDxE", "9deedzO71hk", "hsfBOwAIhOw", "wzoIZO8WbI8",
    "HndMAbZoz2A", "A4kLcDWBYcQ", "JBqxVX_LXvk", "60A31DKGzAM",
    "FKIT6G_lw7c", "2oQSUoGhEBg", "hkcdLR_tdtA", "Rrni7T7sGZk",
    "jf1jnJGNYfs", "04WuoQMhhxw"
];

function getRandomPair() {
    if (videos.length === 1) {
        document.getElementById("video-container").innerHTML = `
                    <h2>Champion:</h2>
                    <iframe width='560' height='315' src='https://www.youtube.com/embed/${videos[0]}' frameborder='0' allowfullscreen></iframe>
                `;
        return;
    }

    let shuffled = videos.sort(() => 0.5 - Math.random());
    let [video1, video2] = shuffled.slice(0, 2);
    displayVideos(video1, video2);
}

function displayVideos(video1, video2) {
    document.getElementById("video-container").innerHTML = `
                <div class='row'>
                    <div class='col-md-6 text-center'>
                        <iframe width='100%' height='315' src='https://www.youtube.com/embed/${video1}' frameborder='0' allowfullscreen></iframe>
                        <button class='btn btn-success mt-2' onclick='vote("${video1}", "${video2}")'>Vote</button>
                    </div>
                    <div class='col-md-6 text-center'>
                        <iframe width='100%' height='315' src='https://www.youtube.com/embed/${video2}' frameborder='0' allowfullscreen></iframe>
                        <button class='btn btn-success mt-2' onclick='vote("${video2}", "${video1}")'>Vote</button>
                    </div>
                </div>`;
}

function vote(winner, loser) {
    videos = videos.filter(video => video !== loser);
    getRandomPair();
}

window.onload = getRandomPair;