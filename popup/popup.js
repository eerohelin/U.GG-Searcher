// Get inputs
var championName = document.getElementById("textInput");
var searchButton = document.getElementById("searchButton");
var selectedRank = document.getElementById("rank");

var defaultlink = "https://u.gg/lol/champions/tryndamere/build?rank=master_plus";
var link1 = "https://u.gg/lol/champions/";
var link2 = "/build?rank=";

// Get if the url should be opened in a new tab from chrome.storage
var open_new_tab;
chrome.storage.sync.get('open_new_tab_setting', function(result) {
  window.open_new_tab = result.open_new_tab_setting;
});

// Search function
searchButton.onclick = function() {

    // Creating the link
    var rank = selectedRank.value;
    var champion = championName.value;
    var newlink =  link1 + champion + link2 + rank;
    // Opening the link and closing the extension
    if (open_new_tab) { // Logic whether to open the url in a new tab or not
      window.open(newlink, '_blank').focus();
    } else {
      chrome.tabs.update({active: true, url: newlink});
    }
    
    window.close();
}

// Simulate the button click if "ENTER" key pressed
championName.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      searchButton.click();
    }
  });