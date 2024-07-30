let contentResources = {
    chrome: {
        headingContent: "Google Chrome web-browser",
        bodyText: "Google Chrome is a widely-used web browser known for its speed, simplicity, and robust performance. Its seamless integration with Google services and extensive library of extensions makes it a top choice for many users.",
        imgUrl: "https://cdn-icons-png.flaticon.com/128/2702/2702602.png",
        imgAlt: "Chrome Logo"
    },
    firefox: {
        headingContent: "Mozilla Firefox web-browser",
        bodyText: "Mozilla Firefox is a flexible, open-source web browser celebrated for its privacy features and customization options. With a focus on user control and security, Firefox offers a range of extensions and tools to enhance browsing.",
        imgUrl: "https://cdn-icons-png.flaticon.com/128/5968/5968827.png",
        imgAlt: "Firefox Logo"
    },
    opera: {
        headingContent: "Opera web-browser",
        bodyText: "Opera is a versatile web browser that stands out with its innovative features, such as built-in ad blockers, VPN, and battery-saving mode. Its sleek design and focus on enhancing user experience make it a strong alternative to mainstream browsers.",
        imgUrl: "https://cdn-icons-png.flaticon.com/128/4945/4945981.png",
        imgAlt: "Opera Logo"
    }
};


let contentContainer = document.getElementById('content');
let icons = document.querySelectorAll('.icon');
loadContent('chrome');

icons.forEach(icon => {
    icon.addEventListener('click', (ev) => {
        icons.forEach(icon => icon.classList.remove('active-icon'));
        ev.target.classList.add('active-icon');
        if (ev.target.id === 'chrome-icon') {
            loadContent('chrome');
        } else if (ev.target.id === 'firefox-icon') {
            loadContent('firefox');
        } else if (ev.target.id === 'opera-icon') {
            loadContent('opera')
        }
    });
});

function loadContent(contentKey) {
    let {
        headingContent,
        bodyText,
        imgUrl,
        imgAlt
    } = contentResources[contentKey];
    contentContainer.innerHTML = `
    <h2>${headingContent}</h2> <img src="${imgUrl}" alt="${imgAlt}" style="width: 100px; height: 100px;">
    <p>${bodyText}</p>
    
    `;
}