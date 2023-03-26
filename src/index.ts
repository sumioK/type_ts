// import World from './world';

// const root = document.getElementById('root');
// const world = new World("Hello World !!");
// world.sayHello(root);

//03
// import { notExistSample, primitiveSample, anySample, unknown} from "./basic";
// primitiveSample()
// notExistSample()
// anySample()
// unknown()

// 04
// import {logMessage} from './function/basic'
// import {isUserSignedIn, isUserSignedIn2, sumProductsPrice} from './function/parameters'

// logMessage('hello typescript!');
// isUserSignedIn('abc', 'sumio');
// isUserSignedIn2('abc')
// const sum = sumProductsPrice(100, 200, 300, 400, 500)
// console.log('Function parameter sample 5:', sum)

//05.object
// import objectSample from './object/object'
// import typeAliasSample from './object/alias';
// objectSample();
// typeAliasSample();  

//06. array
// import arraySample from "./array/array";
// import tupleSample from "./array/tuple"
// arraySample();
// tupleSample();

//07. generic
// import genericBasicSample from './generics/base'
// import genericsAdvancedSample from './generics/advanced'
// genericBasicSample()
// genericsAdvancedSample()

//08. 非同期処理
import callback from './asyncronous/callback'
import promiseSample from './asyncronous/promise';
callback();
promiseSample();