// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { triggerRemix } from 'backend/remix.jsw';

$w.onReady(() => {
  // Push Episode 1 to the video player
  $w('#episodeVideo').src = "https://video.wixstatic.com/video/your-episode1-url.mp4"; // Replace with your actual video URL
  $w('#episodeVideo').play();

  // Trigger remix overlay logic
  const result = triggerRemix("dhilo");
  $w('#overlayText').text = result.overlay;
});
 your code

});