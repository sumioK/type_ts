export default function tupleSample(){
  //一般的なタプル型定義
  let response: [number, string] = [200, "OK"]
  // response = [400, "BadrRequest","Email parameter is missing"]
  // response = ["400", "BadRequest"]
  console.log('array taple sample 1:', response)

  const girlfriends: [string, ...string[]] = ["Kana", "Miku", "Keiko"]
  girlfriends.push("Misa")
  console.log('array tuple 5:', girlfriends)
}