document.addEventListener("DOMContentLoaded", function() {
    loadVideos('director.json', 'directorVideos');
    loadVideos('first_ad.json', 'firstAdVideos');
    loadVideos('second_ad.json', 'secondAdVideos');
});

function loadVideos(jsonFile, elementId) {
    fetch(`path/to/your/json/${jsonFile}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById(elementId);
            data.videos.forEach(video => {
                const iframe = document.createElement('iframe');
                iframe.setAttribute('src', video.url);
                iframe.setAttribute('width', '400');
                iframe.setAttribute('height', '225');
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allowfullscreen', 'true');
                iframe.setAttribute('loading', 'lazy');
                // Optionally, add a title or class to the iframe
                
                const div = document.createElement('div');
                div.className = 'video'; // Assuming "video" class for styling
                div.appendChild(iframe);
                
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Error loading the videos:', error));
}
