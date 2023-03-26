export default function callback(){
  const url = "https://api.github.com/users/sumioK"

  //コールバックで呼び出す非同期処理
  const fetchProfile = () => {
    return fetch(url)
      .then((res) => {
        //レスポンスのBodyをJsonで読み取った結果を返す
        res.json()
        .then((json) => {
          console.log("Asynchronous Callback Sample 1:", json)
          return json
        })
        .catch((error) => {
          console.error(error)
        })
      })
      .catch((error) => {
        console.error(error);
      })
  }
  const profile = fetchProfile()
  console.log("Asynchronous Callback Sample2:", profile)
}