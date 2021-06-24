export function stringLimit(string){
  const result = string.substring(0,26)
  if(string.length < 26){
    return string
  }
  return `${result} (...)`
}