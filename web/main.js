// OCPD: External Logic Layer for Web
// INTJ Strategy: Zero-jitter transition from loading state to Flutter

window.addEventListener('load', function (ev) {
  // Failsafe: Log initialization
  console.log('WAssistant System Initializing...');

  _registerServiceWorker();

  // Logic: Remove the loader ONLY after Flutter has rendered its first frame
  window.addEventListener('flutter-first-frame', function () {
    const loader = document.getElementById('loading-indicator');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.remove();
        console.log('WAssistant System Ready.');
      }, 500);
    }
  });
});

function _registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('flutter_service_worker.js?v=' + new Date().getTime());
  }
}
