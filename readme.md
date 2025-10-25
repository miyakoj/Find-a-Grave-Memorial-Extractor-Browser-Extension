# FindAGrave Memorial Extractor

This Firefox (and possibly Safari) browser extension extracts a list of memorials from a FindAGrave cemetery memorial list page and saves the data in CSV format. **Note:** FindAGrave limits the total length of a memorial list to 10,000 memorials on a single page.

This extension was developed for genealogy researchers. Here is the [extension page on WikiTree](https://www.wikitree.com/wiki/Space:FindAGrave_Memorial_Extractor_Browser_Extension) that may contain more information.

For the Chromium (Chrome, Edge, and Opera) version see: https://github.com/miyakoj/FindAGraveMemorialExtractorExtensionChromium. There are two versions because I need to use manifest version 2 in order for the extension to work in Firefox for Android, but manifest version 2 is no longer supported in Chromium.

## Features

- Automatically scrolls and loads all memorials on a FindAGrave cemetery page.
- Extracts key information for each memorial:
  - Memorial ID
  - Name of the deceased
  - Birth date
  - Death date
  - Whether or not a memorial photo exists
  - Whether or not a photo of the actual gravesite exists
  - Link to the memorial page
- Downloads the extracted data as a CSV file and saves it to your device.

## Installation

Install from the [Firefox Add-On Store](https://addons.mozilla.org/en-US/firefox/addon/findagrave-memorial-extractor/) for Desktop Firefox and Firefox for Android.

## Usage

1. Navigate to a FindAGrave cemetery memorial list page.
2. Pin the extension icon to your toolbar for convenience.
3. Click the extension icon on the toolbar in your browser. The extension will scroll down the page until all memorials are loaded, extract the data for the memorials, and then download a CSV file with the data to your default download location.

## Development

To set up the extension for local development:

1. **Clone the repository:**
   ```
   git clone https://github.com/miyakoj/FindAGrave-Memorial-Extractor-Browser-Extension.git
   cd FindAGrave-Memorial-Extractor-Browser-Extension
   ```

2. **Load the extension in your browser:**
   - **[Desktop Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/):**
     1. Go to `about:debugging#/runtime/this-firefox`.
     2. Click "Load Temporary Add-on".
     3. Select the `manifest.json` file in the extension folder.

   - **Mobile Firefox:** Follow the instructions [here](https://extensionworkshop.com/documentation/develop/developing-extensions-for-firefox-for-android/).

   - **Safari:** This extension should also work in Safari, but I'm not able to test that. If you are interested in a version for Safari and are willing to work on it, please contact me.

3. **Make changes and reload the extension in your browser to see the updates.**

## Testing

The following cemeteries were used for testing:
1. [Mount Newell Memorial Garden](https://www.findagrave.com/cemetery/2788136) (Small memorial list of 13.)
2. [Mount Zion MB Church Cemetery](https://www.findagrave.com/cemetery/2465876) (Small memorial list of 37 with every birth and death date combination.)
3. [Pleasant Grove MB Church Cemetery](https://www.findagrave.com/cemetery/62035) (Medium memorial list of 484.)
4. [Cottrell Memorial Garden](https://www.findagrave.com/cemetery/58088) (Large memorial list of 1,124.)
5. [Gracelawn Cemetery](https://www.findagrave.com/cemetery/615/gracelawn-cemetery) (Extremely large memorial list of 22,993.)

## Libraries Used

* [WebExtension Browser API Polyfill](https://github.com/mozilla/webextension-polyfill/)

## Extension Icon

[Down, download, arrow icon from the bitsies! pack](https://www.iconfinder.com/icons/728930/down_download_arrow_direction_move_icon)

## License

MIT License