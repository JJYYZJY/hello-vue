export function getCurrentAuthoruty() {
  return ["admin"];
}

export function check(authority) {
  let current = getCurrentAuthoruty();
  return current.some(item => authority.includes(item));
}

export function isLogin() {
  let current = getCurrentAuthoruty();
  return current && current[0] !== "guest";
}
