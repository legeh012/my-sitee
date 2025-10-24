import { triggerRemix } from 'backend/remix.jsw';

$w.onReady(() => {
  $w('#episodeVideo').play();

  const result = triggerRemix("dhilo");
  $w('#overlayText').text = result.overlay;
});
import { triggerRemix } from 'backend/remix.jsw';

$w.onReady(() => {
  // ✅ Play Episode 1
  $w('#episodeVideo').src = "https://static.wixstatic.com/media/ea6478_a793fe9e8f2f4781ac853ef674390456.mp4"; // Replace with your actual video URL
  $w('#episodeVideo').play();

  // ✅ Trigger Remix Overlay
  const result = triggerRemix("dhilo");
  $w('#overlayText').text = result.overlay;

  // ✅ Enable Download Button
  $w('#downloadEpisode').link = "https://static.wixstatic.com/media/ea6478_a793fe9e8f2f4781ac853ef674390456.mp4";
  $w('#downloadEpisode').target = "_blank";
});
import { triggerRemix } from 'backend/remix.jsw';

$w.onReady(() => {
  // ✅ Play Episode 1
  $w('#episodeVideo').src = "https://static.wixstatic.com/media/ea6478_a793fe9e8f2f4781ac853ef674390456.mp4"; // Replace with your actual video URL
  $w('#episodeVideo').play();

  // ✅ Trigger Remix Overlay
  const result = triggerRemix("dhilo");
  $w('#overlayText').text = result.overlay;

  // ✅ Enable Download Button
  $w('#downloadEpisode').link = "https://static.wixstatic.com/media/ea6478_a793fe9e8f2f4781ac853ef674390456.mp4";
  $w('#downloadEpisode').target = "_blank";
});
export function triggerRemix(triggerWord) {
  switch (triggerWord) {
    case "dhilo":
      return {
        overlay: "🔥 Cast Exposed!",
        music: "https://suno.com/@djluckluck/dhilo-drop"
      };
    case "naya":
      return {
        overlay: "👑 Queen Energy Activated",
        music: "https://suno.com/@djluckluck/naya-mode"
      };
    case "hayee":
      return {
        overlay: "😱 Drama Incoming",
        music: "https://suno.com/@djluckluck/hayee-shock"
      };
    case "maya":
      return {
        overlay: "🚫 Blocked Energy",
        music: "https://suno.com/@djluckluck/maya-wall"
      };
    default:
      return {
        overlay: "🎭 Remix Triggered",
        music: "https://suno.com/@djluckluck/default-drop"
      };
  }
}
