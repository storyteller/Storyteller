import "babel/polyfill";
export function range (begin, end) {
  return Array.from(Array(end + 1).keys()).slice(begin);
}
