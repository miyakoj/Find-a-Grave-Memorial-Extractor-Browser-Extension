if (typeof browser === "undefined") {
  // Chrome does not support the browser namespace yet.
  globalThis.browser = chrome;
}

browser.browserAction.onClicked.addListener(async (tab) => {
    try {
      await browser.scripting.executeScript({
        target: {
          tabId: tab.id,
        },
        files: [
          "scripts/extract.js"
        ],
      });
    } catch (err) {
      console.error(`Failed to execute script: ${err}`);
    }
});