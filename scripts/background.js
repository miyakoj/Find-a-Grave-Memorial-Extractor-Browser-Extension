browser.browserAction.onClicked.addListener(async (tab) => {
    try {
      await browser.scripting.executeScript({
        target: {
          tabId: tab.id,
        },
        files: [
          "scripts/wikiTree.js",
          "scripts/extract.js"
        ],
      });

      browser.tabs.sendMessage(tab.id, { action: "extractMemorials" });
    } catch (err) {
      console.error(`Failed to execute script: ${err}`);
    }
});