const DOMReady = (callback) => {
  if (document.readyState == 'loading') {
    // still loading, wait for the event
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    // DOM is ready!
    callback();
  }
};

export default DOMReady;
