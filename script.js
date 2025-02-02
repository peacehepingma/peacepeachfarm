// Handle the link for mobile devices
document.getElementById('uniswapLink').addEventListener('click', function(e) {
  e.preventDefault();

  // Try to open Uniswap app (uniswap://app) on mobile device
  const appLink = 'uniswap://app';
  const fallbackURL = 'https://app.uniswap.org/#/swap'; // Fallback to web app if Uniswap is not installed

  // Check if the device is mobile (simplified detection)
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = appLink;

    // Fallback mechanism: If the app doesn't open, after a delay, redirect to web app
    setTimeout(() => {
      if (document.hidden) {
        window.location.href = fallbackURL;
      }
    }, 1500); // 1.5 seconds delay
  } else {
    // If not on mobile, redirect to the web version
    window.location.href = fallbackURL;
  }
});