export default function primitiveSample(){
  let name: string = 'sumio'
  console.log('Primitive sample 1:', typeof name, name)
  let age: number = 27;
  console.log('Primitive sample 2:', typeof age, age)
  let isSingle: boolean = false;
  console.log("Primitive sample 3:", typeof isSingle, isSingle)

  const isOver20: boolean = age >= 20
  console.log("Primitive sample 4", typeof isOver20, isOver20)
}