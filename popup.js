// Get inputs
var championName = document.getElementById("textInput");
var searchButton = document.getElementById("searchButton");
var selectedRank = document.getElementById("rank");

var defaultlink = "https://u.gg/lol/champions/tryndamere/build?rank=master_plus";
var link1 = "https://u.gg/lol/champions/";
var link2 = "/build?rank=";

// Search function
searchButton.onclick = function() {

    // Creating the link
    var rank = selectedRank.value;
    var champion = championName.value;
    var newlink =  link1 + champion + link2 + rank;

    // Opening the link and closing the extension
    chrome.tabs.update({active: true, url: newlink});
    window.close();
}