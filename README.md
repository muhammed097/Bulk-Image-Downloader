# Image Downloader

A simple JavaScript function to download all images from a webpage with a single click.

## Description

The `downloadImages()` function selects all `<img>` elements on the page, extracts their source URLs, fetches the images as blobs, creates temporary URLs, and triggers downloads for each image.

## Usage

Include the `downloadImages()` function in your JavaScript code:

```javascript
function downloadImages() {
  // Function code
}

**Considerations**
The function may encounter CORS restrictions when downloading images from external domains. Downloading multiple large images can impact performance, so consider optimizing the process. Provide appropriate error handling for failed downloads.
Ensure the automatic downloads align with user expectations and website terms of use.

**Contributing**
If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the GitHub repository.

**Contact**
For any questions or feedback, please contact muhammedibrim97@gmail.com
