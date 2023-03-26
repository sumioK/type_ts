export default function objectSample(){

  const a: object = {
    name: 'Sumio',
    age: 27
  }
  // a.name

  let country: {
    language: string
    name: string
  } = {
    language: "Japanese",
    name: "Japan"
  }
  console.log("object object sample 1:", country)

  country = {
    language: "English",
    name: "USA"
  }
  console.log("object object sample 2:", country)

  //
  const sumio: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: "Kawaguchi",
    firstName: "Sumio"
  }
  sumio.gender = 'male'
  sumio.lastName = 'Kamado'
  // sumio.firstName = 'Tanjiro'  readonlyは上書きできない
  console.log('object object sample 3', sumio)

  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul'
  }

  capitals.China = "Beijing"
  capitals.Canada = "ottawa"
  
  console.log('object object sample4', capitals)
}