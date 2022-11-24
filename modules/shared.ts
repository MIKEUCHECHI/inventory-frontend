export function isBrowser() {
  return typeof window !== "undefined";
}

export function subStr(str:string, end:number){
  return str?.substring(0, end)
}
