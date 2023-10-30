/* 
Author: Xiangyu Ma
Last day of modification: 2023-4-9
js file for fetching most recent Japan travel guid video using Youtube API
*/

// This function fetches Japan travel guide videos using the YouTube Data API
async function getJapanTravelVideos(apiKey) {
    // This is the base URL for the YouTube Data API
    const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
    // The 'japan travel guides' can be replaced, later can use user input
    const query = encodeURIComponent('japan travel guides');

    // Construct the request URL
    // read the documentation for the API here
    // https://developers.google.com/youtube/v3/docs/search/list
    const requestUrl = `${baseUrl}?part=snippet&q=${query}&type=video&maxResults=1&key=${apiKey}`;

    try {
        // Send the HTTP request and get the response
        const response = await fetch(requestUrl);

        // Check the response status
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON data
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        return null;
    }
}

// This function creates an iframe for the given video ID
function createVideoIframe(videoId) {
    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    return iframe;
}

// Replace with my own API key
const apiKey = 'I delete this since its personal API key';

// Fetch Japan travel videos and add them to the video container
getJapanTravelVideos(apiKey).then((videos) => {
    console.log('Japan travel videos:', videos);
    // Select the video container element
    var videoContainer = document.querySelector('.video-container');
    // Loop through the videos and create an iframe for each video
    for (const video of videos) {
        // Create a div element for the video thumbnail
        const thumbnailDiv = document.createElement('div');
        thumbnailDiv.className = 'thumbnail';
        // Create an iframe for the current video
        const iframe = createVideoIframe(video.id.videoId);
        // Append the iframe and thumbnailDiv to the video container
        videoContainer.appendChild(iframe);
        videoContainer.appendChild(thumbnailDiv);
    }
});