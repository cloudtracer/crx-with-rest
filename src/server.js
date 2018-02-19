
// REST SERVER
console.log("Server has started")
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    //log.info("URL Sender: " + sender.tab.url);
    //////console.log(request);
    if(request.action){
      return true;
    }
  }
  console.log("hit59");
);
