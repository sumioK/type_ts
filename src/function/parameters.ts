// オプショナルパラメーター
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if(userId === 'abc'){
    console.log('Function parameters sample 1: User is signed in! Username is', username)
    return true
  }else{
    console.log('Function parameters sample 2: User is not signed in.')
  return false  
  }
}
// デフォルトパラメーター
export const isUserSignedIn2 = (userId: string, username: string = 'NO NAME'): boolean => {
  if(userId === 'abc'){
    console.log('Function parameters sample 3: User is signed in! Username is', username)
    return true
  }else{
    console.log('Function parameters sample 4: User is not signed in.')
  return false  
  }
}
//レストパラメーターを持つ関数
export const sumProductsPrice = (...productsPrice: number[]):number => {
  return productsPrice.reduce((prevTotal, productPrice) => {
    return prevTotal + productPrice
  }, 0)
}