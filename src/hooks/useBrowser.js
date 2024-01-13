const toMatch = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i,
];

export function useBrowser() {
  const matched = toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });

  return {
    isMovile: Boolean(matched),
  };
}
