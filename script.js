const video = document.getElementById('video');

const handleVisibilityChange = () => {
  if (document.visibilityState === 'hidden') {
    // Save the current time before pausing
    localStorage.setItem('videoTime', video.currentTime);
    video.pause();
  } else if (document.visibilityState === 'visible') {
    // Restore the saved time and play the video
    const savedTime = localStorage.getItem('videoTime');
    if (savedTime) {
      video.currentTime = parseFloat(savedTime);
    }
    video.play();
  }
};

document.addEventListener('visibilitychange', handleVisibilityChange);