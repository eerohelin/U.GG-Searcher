// Get elements
var checkbox = document.getElementById("open-tab-checkbox");

// Make the page match the settings from chrome.storage
chrome.storage.sync.get('open_new_tab_setting', function(result) {
  checkbox.checked = result.open_new_tab_setting;
});

// Make checkbox change the open_new_tab_setting in chrome.storage
checkbox.addEventListener('change', function() {
  if (this.checked) {
    chrome.storage.sync.set({open_new_tab_setting: true}, function() {
      console.log('Value is set to ' + "true");
    });
  } else {
    chrome.storage.sync.set({open_new_tab_setting: false}, function() {
        console.log('Value is set to ' + "false");
      });
  }
});