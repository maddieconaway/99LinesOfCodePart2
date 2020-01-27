var nameArray = ["Maddie", "Josie", "Alex", "Alden", "Hanna"];

let btn = document.getElementById('btn');
btn.addEventListener('click', sing);

function sing() {
    var nameLoop;
    var lyricLoop;
    for (nameLoop = 0; nameLoop < nameArray.length; nameLoop++) {
        let div = document.createElement('div');
        div.className = 'friend';
        let h3 = document.createElement('h3');
        h3.textContent = nameArray[nameLoop];
        div.appendChild(h3);
        for (lyricLoop = 99; lyricLoop > 0; lyricLoop--) {
            let lyricString = '';
            let p = document.createElement('p');
            lyricString = lyricString + lyricFormat(lyricLoop) + " in the file, " + lyricFormat(lyricLoop) + "; " +
                nameArray[nameLoop] + " strikes one out, clears it all out, " +
                lyricFormat(lyricLoop - 1) + " in the file. ";
            p.textContent = lyricString;
            div.appendChild(p);
        }
        document.body.appendChild(div);
    }
}

function lyricFormat(lyricNbr) {
    var lineStr;
    const ofCode = "of code";

    if (lyricNbr == 1) {
        lineStr = " line ";
    } else {
        lineStr = " lines ";
    }
    return lyricNbr + lineStr + ofCode;

}

