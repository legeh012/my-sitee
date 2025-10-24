// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {
  // Load video URL from metadata or hardcoded link
  const videoUrl = "https://player.vimeo.com/video/461456109";

  // Set video player source
  $w("#videoPlayer").src = videoUrl;

  // Set download button link (replace with your actual file URL if hosted elsewhere)
  $w("#downloadButton").link = "https://yourdomain.com/assets/plane-overhead.mp4";

  // Export buttons
  $w("#tiktokExport").onClick(() => {
    wixLocation.to(`https://yourdomain.com/export/tiktok?video=${videoUrl}`);
  });

  $w("#youtubeExport").onClick(() => {
    wixLocation.to(`https://yourdomain.com/export/youtube?video=${videoUrl}`);
  });

  $w("#instagramExport").onClick(() => {
    wixLocation.to(`https://yourdomain.com/export/instagram?video=${videoUrl}`);
  });

  // Optional: Trigger overlays or music on play
  $w("#videoPlayer").onPlay(() => {
    // triggerSunoTrack("ep1"); // If wired to backend
    // showOverlay("castIntro");
    console.log("Video started playing");
  });
});

