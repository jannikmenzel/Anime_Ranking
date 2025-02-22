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

// Funktion, um eine zufällige Reihenfolge zu erzeugen und zu speichern
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Prüfen, ob bereits eine Reihenfolge im localStorage gespeichert ist
if (!localStorage.getItem("videoOrder")) {
    // Wenn nicht, zufällig mischen und speichern
    shuffleArray(videos);
    localStorage.setItem("videoOrder", JSON.stringify(videos));  // Reihenfolge im localStorage speichern
} else {
    // Wenn ja, aus dem localStorage laden
    videos = JSON.parse(localStorage.getItem("videoOrder"));
}

let index = 0; // Startindex für den Vergleich

function getNextPair() {
    if (videos.length === 1) {
        document.getElementById("video-container").innerHTML = `
            <h2>Champion:</h2>
            <iframe width='560' height='315' src='https://www.youtube.com/embed/${videos[0]}' frameborder='0' allowfullscreen></iframe>
        `;
        return;
    }

    if (index >= videos.length - 1) {
        index = 0; // Starte von vorne, falls das Ende erreicht ist
    }

    let video1 = videos[index];
    let video2 = videos[index + 1];

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
    getNextPair();
}

window.onload = getNextPair;