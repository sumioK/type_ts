export default function arraySample() {
  //シンプルな配列の型定義
  const clolors: string[] = ["red", "blue"]
  clolors.push("yellow");
  // clolors.push(1)
  console.log("array array sample 1:",clolors);

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push('a')
  console.log("array array sample 2:",even)

  const ids: (string | number)[] = ["a", 1]
  ids.push(2)
  ids.push('b')
  // ids.push(true)
  console.log("array array sample 3:", ids)


  const generateSomeArray = () => {
    const _someArray = [] //any[]
    _someArray.push(123) //number[]
    _someArray.push("ABC") //(string | number)[]
    return _someArray
  }
  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true)
  console.log('array array sample 4:', someArray)

  //イミュータブルな配列
  const commands: readonly string[] = ["git add", "git commit", "git push"]
  // commands.push("git fetch")
  // commands[2] = "git pull"
  console.log("array array sample 6:", commands)
}