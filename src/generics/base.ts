export default function genericsBasicSample() {
  //ジェネリック型を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i< array.length; i++){
      result += array[i]
    }
    return result;
  }
  console.log("Generrics basic sample 1:", stringReduce(["May ", "the ", "force ", "be ", "with ", "you"], ""))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i< array.length; i++){
      result += array[i]
    }
    return result;
  }
  console.log("Generrics basic sample 2:", numberReduce([100, 200, 300], 1000))


//generic型を使用

  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }
  
  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i< array.length; i++){
      result += array[i]
    }
    return result;
  }
  console.log("Generrics basic sample 3:", genericStringReduce(["MAKE ", "TYPESCRIPT ", "GENERIC "], ""))


  //いろいろなジェネリック型の定義
  //完全な呼び出しシグネチャ(個々のシグネチャにジェネリック型を割り当てる)
  type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }

  //呼び出しシグネチャの省略記法
  type GenericReduce3<T> = (array: T[], initialValue: T) => T
  type GenericReduce4 = <T>(array: T[], initialValue: T) => T
}