var championName = document.getElementById("textInput");
var searchButton = document.getElementById("searchButton");
var selectedRank = document.getElementById("rank");

var defaultlink = "https://u.gg/lol/champions/tryndamere/build?rank=master_plus";
var link1 = "https://u.gg/lol/champions/";
var link2 = "/build?rank=";



searchButton.onclick = function() {
    var rank = selectedRank.value;
    var champion = championName.value;
    var newlink =  link1 + champion + link2 + rank;
    chrome.tabs.update({active: true, url: newlink});
}