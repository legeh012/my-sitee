/************
.web.js file
************

Backend '.web.js' files contain functions that run on the server side and can be called from page code.

Learn more at https://dev.wix.com/docs/develop-websites/articles/coding-with-velo/backend-code/web-modules/calling-backend-code-from-the-frontend

****/

/**** Call the sample multiply function below by pasting the following into your page code:

import { multiply } from 'backend/new-module.web';

$w.onReady(async function () {
   console.log(await multiply(4,5));
});

****/

import { Permissions, webMethod } from "wix-web-module";

export const multiply = webMethod(
  Permissions.Anyone, 
  (factor1, factor2) => { 
    return factor1 * factor2 
  }
);
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
