# FindAGrave Memorial Extractor

This Firefox/Chrome/Edge browser extension extracts a list of memorials from a FindAGrave cemetery memorial list page and saves the data in CSV format.

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
- Downloads the extracted data as a CSV file and saves it to your browser's default download folder.

## Installation

This extension is currently in the process of being submitted to the Firefox and Chrome add-on stores.

## Usage

1. Navigate to a FindAGrave cemetery memorial list page.
2. Pin the extension icon to your toolbar for convenience.
3. Click the extension icon on the toolbar in your browser. The extension will scroll down the page until all memorials are loaded, extract the data for the memorials, and then either download a CSV file with the data to your default download location (Firefox and Chrome) or show you prompt asking you what to do with the file (Edge).

## Development

To set up the extension for local development:

1. **Clone the repository:**
   ```
   git clone https://github.com/miyakoj/FindAGraveMemorialExtractorExtension.git
   cd FindAGraveMemorialExtractorExtension
   ```

2. **Load the extension in your browser:**
   - **Firefox:**
     1. Go to `about:debugging#/runtime/this-firefox`.
     2. Click "Load Temporary Add-on".
     3. Select the `manifest.json` file in the extension folder.

   - **Chrome:**
     1. Go to `chrome://extensions/`.
     2. Click "Load unpacked" and select the extension folder.

   - **Edge:**
     1. Go to `edge://extensions/`.
     2. Enable "Developer mode".
     3. Click "Load unpacked" and select the extension folder.

   - **Safari:** The extension should also work in Safari, but I'm not able to test that.

3. **Make changes and reload the extension in your browser to see updates.**

## Testing

The following cemeteries were used for testing:
1. [Mount Newell Memorial Garden](https://www.findagrave.com/cemetery/2788136) (Small memorial list.)
2. [Mount Zion MB Church Cemetery](https://www.findagrave.com/cemetery/2465876) (Small memorial list with every birth and death date combination.)
3. [Pleasant Grove MB Church Cemetery](https://www.findagrave.com/cemetery/62035) (Large memorial list.)
4. [Cottrell Memorial Garden](https://www.findagrave.com/cemetery/58088) (Very large memorial list.)

## Libraries Used

* [WebExtension Browser API Polyfill](https://github.com/mozilla/webextension-polyfill/)

## Extension Icon

[Down, download, arrow icon from the bitsies! pack](https://www.iconfinder.com/icons/728930/down_download_arrow_direction_move_icon)

## License

MIT License