// Viewport height fix for mobile devices
// This fixes the common 100vh issue on mobile browsers

let resizeTimeout;
const setViewportHeight = () => {
  // Get the viewport height and multiply by 1% to get a value for 1vh
  const vh = window.innerHeight * 0.01;
  // Set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  // Also set actual viewport height for better mobile support
  document.documentElement.style.setProperty('--actual-vh', `${window.innerHeight}px`);
};

// Debounced resize handler for better performance
const debouncedSetViewportHeight = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(setViewportHeight, 100);
};

// Set on initial load
if (typeof window !== 'undefined') {
  // Set immediately
  setViewportHeight();
  
  // Set on resize and orientation change with debouncing
  window.addEventListener('resize', debouncedSetViewportHeight, { passive: true });
  window.addEventListener('orientationchange', () => {
    // Delay to ensure orientation change is complete
    setTimeout(setViewportHeight, 200);
  }, { passive: true });
  
  // For better mobile experience - set on touch events
  if ('ontouchstart' in window) {
    document.addEventListener('DOMContentLoaded', setViewportHeight);
    // Also set on visual viewport changes (mobile browser UI changes)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', debouncedSetViewportHeight);
    }
  }
}

export default setViewportHeight; 