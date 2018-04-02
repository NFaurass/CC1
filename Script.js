// Characters Counter Version 1
// All Copyrights To Nidal Faurass
function switchb(e) {
    var t = document.getElementsByName("switch");
    var n = "none";
    for (var r = 0; r < t.length; r++) {
        if (t[r].checked) {
            n = "block";
            break
        }
    }
    document.getElementById(e).style.display = n
}
var x;
var count;
var text = document.getElementById("TextBoxToCount").value;
setInterval(function() {
    var e = 0;
    var t = 0;
    var n = 0;
    var r = 0;
    text = document.getElementById("TextBoxToCount").value;
    s = text;
    s = s.replace(/(^\s*)|(\s*$)/gi, "");
    s = s.replace(/[ ]{2,}/gi, " ");
    s = s.replace(/\n /, "\n");
    x = s.split(" ").length;
    count = text.length;
    if (text == "") {
        x = 0
    }
    sentences = text;
    sentencesDot = sentences.replace(/\!/g, ".").replace(/\?/g, ".");
    sentencesCount = sentencesDot.split(".").length - 1;
    for (var i = 0; i < sentencesCount; i++) {
        r++;
        j = text;
        j = j.replace(/(^\s*)|(\s*$)/gi, "");
        j = j.replace(/[ ]{2,}/gi, " ");
        j = j.replace(/\n /, "\n");
        n = n + j.split(" ").length;
        t = t + sentencesDot.split(".")[i].replace(" ", "").length;
        if (sentencesDot.split(".")[i] != "") {
            e++
        }
    }
    t = t / e;
    n = x / e;
    var p;
    if (text != "") {
        p = text.replace(/\n$/gm, "").split(/\n/).length
    } else {
        p = 0
    }
    document.getElementById("TextInBoxCounter").innerHTML = count + " Characters | " + x + " Words | " + e + " Sentences | " + p + " Paragraphs";
    document.getElementById("sentences").innerHTML = e;
    if (e == 0) {
        document.getElementById("sentenceLength").innerHTML = "0"
    } else {
        document.getElementById("sentenceLength").innerHTML = t.toFixed(2) + " Characters<br>" + n.toFixed(2) + " Words"
    }
}, 100)
