// OCPD: External Logic Layer for Web
// Handles Loading State & Service Worker Management

window.addEventListener('load', function(ev) {
    console.log("WAssistant Web Loaded");
    
    // Failsafe: Remove loader after 5 seconds if Flutter doesn't
    setTimeout(function() {
        const loader = document.getElementById('loading-indicator');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }
    }, 5000);

    _registerServiceWorker();
});

function _registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('flutter-first-frame', function () {
            navigator.serviceWorker.register('flutter_service_worker.js?v=' + new Date().getTime());
            console.log("Service Worker Registered");
        });
    }
}
