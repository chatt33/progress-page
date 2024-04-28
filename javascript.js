function updateProgress(progress) {
    const progressBar = document.getElementById("progress");
    progressBar.style.width = progress + "%";
  }
  
  // Example usage: update the progress every second
  let currentProgress = 0;
  const interval = setInterval(() => {
    currentProgress += 10;
    updateProgress(currentProgress);
    if (currentProgress >= 100) {
      clearInterval(interval);
    }
  }, 1000);