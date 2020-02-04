
replaceBodyAndTitle(0);

function replaceBodyAndTitle(count) {
  let youtubes = document.getElementsByTagName('ytd-app');
  if (isNullOrUndefined(youtubes) || isNullOrUndefined(youtubes[0])) {
    setTimeout(() => replaceBodyAndTitle(count), 10);
  } else {
    let youtube = youtubes[0];
    youtube.innerHTML = 'back to work conn';
    if (count < 4) {
      setTimeout(() => replaceBodyAndTitle(++count), 500);
    }
  }
}

function isNullOrUndefined(anything) {
  return anything === null || anything === undefined;
}
