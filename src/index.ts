export function logSuccess(msg: string) {
  console.log(`%c ${msg}`, "color:green");
}

export function logDanger(msg: string) {
  console.log(`%c ${msg}`, "color:red");
}

export function logInfo(msg: string) {
  console.log(`%c ${msg}`, "color:black; background:yellow");
}
