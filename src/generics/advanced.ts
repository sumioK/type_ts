export default function genericsAdvancedSample(){
  //map関数のシグネチャ
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStringsToNumbers : Map<String, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++){
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  const numbers = mapStringsToNumbers(["123", "456", "789"], (item) => Number(item))
  console.log("Generics advenced sample 1:", numbers)
}