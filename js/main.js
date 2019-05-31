const STORAGE_KEY = 'KillNewsFeed';
let interval;

function replaceBodyAndTitle() {
  let youtubes = document.getElementsByTagName('ytd-app');
  if (isNullOrUndefined(youtubes) || isNullOrUndefined(youtubes[0])) {
    setTimeout(replaceBodyAndTitle, 100);
  } else {
    let youtube = youtubes[0];
    youtube.innerHTML = 'back to work conn';
    setTimeout(replaceBodyAndTitle, 1000);
  }
}

function isNullOrUndefined(anything) {
  return anything === null || anything === undefined;
}

replaceBodyAndTitle();

// chrome.storage.sync.get(STORAGE_KEY, value => {
//   if (value.hasOwnProperty(STORAGE_KEY) && value[STORAGE_KEY] === true) {
//     replaceBodyAndTitle();
//     interval = window.setInterval(replaceBodyAndTitle, 3000);
//   }
// });

// chrome.storage.onChanged.addListener((changes, namespace) => {
//   if (changes[STORAGE_KEY].newValue) {
//     replaceBodyAndTitle();
//     interval = window.setInterval(replaceBodyAndTitle, 3000);
//   } else {
//     window.clearInterval(interval);
//   }
// });
