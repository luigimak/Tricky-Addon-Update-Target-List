import { linkRedirect } from './main.js';

const telegramLink = document.getElementById('telegram');
const githubLink = document.getElementById('github');

// Function to show about overlay
document.getElementById("about").addEventListener("click", () => {
    const aboutOverlay = document.getElementById('about-overlay');
    const closeAbout = document.getElementById('close-about');

    // Show about menu
    document.body.classList.add("no-scroll");
    aboutOverlay.style.display = 'flex';
    setTimeout(() => {
        aboutOverlay.style.opacity = '1';
    }, 10);

    const hideMenu = () => {
        document.body.classList.remove("no-scroll");
        aboutOverlay.style.opacity = '0';
        setTimeout(() => {
            aboutOverlay.style.display = 'none';
        }, 200);
    };

    closeAbout.addEventListener("click", hideMenu);
    aboutOverlay.addEventListener('click', (event) => {
        if (event.target === aboutOverlay) hideMenu();
    });
});

// Event listener for link redirect
telegramLink.addEventListener('click', function() {
    linkRedirect('https://t.me/kowchannel');
});
githubLink.addEventListener('click', function() {
    linkRedirect('https://github.com/KOWX712/Tricky-Addon-Update-Target-List');
});