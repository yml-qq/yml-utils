// 主流机型
const appleIphone = /iPhone/i;
const appleIpod = /iPod/i;
const appleTablet = /iPad/i;
const appleUniversal = /\biOS-universal(?:.+)Mac\b/i;
const androidPhone = /\bAndroid(?:.+)Mobile\b/i; // Match 'Android' AND 'Mobile'
const androidTablet = /Android/i;
const amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i; // Match 'Silk' AND 'Mobile'
const amazonTablet = /Silk/i;
const windowsPhone = /Windows Phone/i;
const windowsTablet = /\bWindows(?:.+)ARM\b/i; // Match 'Windows' AND 'ARM'
const otherBlackBerry = /BlackBerry/i;
const otherBlackBerry10 = /BB10/i;
const otherOpera = /Opera Mini/i;
const otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
const otherFirefox = /Mobile(?:.+)Firefox\b/i; // Match 'Mobile' AND 'Firefox'

function createMatch(userAgent: string): (regex: RegExp) => boolean {
  return (regex: RegExp): boolean => regex.test(userAgent);
}

/**
 *
 * @desc 获取是否为移动端
 * @return {Boolean}
 */
export const getIsMobile = (device: string): boolean => {
  let userAgent = navigator.userAgent;
  let tmp = userAgent.split("[FBAN");

  if (typeof tmp[1] !== "undefined") {
    userAgent = tmp[0];
  }
  tmp = userAgent.split("Twitter");
  if (typeof tmp[1] !== "undefined") {
    userAgent = tmp[0];
  }

  const match = createMatch(userAgent);

  return (
    match(appleIphone) ||
    match(appleIpod) ||
    match(appleTablet) ||
    match(appleUniversal) ||
    match(amazonTablet) ||
    match(amazonPhone) ||
    match(androidPhone) ||
    match(androidTablet) ||
    match(windowsPhone) ||
    match(windowsTablet) ||
    match(otherBlackBerry) ||
    match(otherBlackBerry10) ||
    match(otherOpera) ||
    match(otherFirefox) ||
    match(otherChrome)
  );
};
