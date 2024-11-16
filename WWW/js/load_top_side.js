document.addEventListener('DOMContentLoaded', function() {
    // Function to load HTML content into elements with a specified class
    async function loadContent(url, className) {
        try {
            let cache = sessionStorage.getItem(url);
            if (!cache) {
                const response = await fetch(url);
                cache = await response.text();
                sessionStorage.setItem(url, cache);
            }
            document.querySelectorAll(`.${className}`).forEach(element => {
                element.innerHTML = cache;
            });
        } catch (error) {
            console.error('Error loading content:', error);
        }
    }

    // Load the top menu in the class 'banner'
    loadContent('top_section.html', 'banner');

    // Load the side menu in the class 'left_3c'
    loadContent('side_menu.html', 'left_3c');
});
