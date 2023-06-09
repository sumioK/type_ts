export default async function asyncAwaitSample(){
  const url = "https://api.github.com/users/sumioK"

  type Profile = {
    login: string
    id: Number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = async ()  => {
    const response = await fetch(url)
      .then((res) => res)
      .catch((error) => {
        console.error(error)
        return null
      })
      if(!response){
        return null
      }

      const json = await response.json()
        .then((json: Profile) => {
          console.log("Asyncrono)us async/await Sample 1:", json)
          return json
        })
        .catch((error) => {
          console.error(error)
          return null
        })

        if (!json) return null;

        return json
  }
  const profile = await fetchProfile()
  if(profile){
    console.log("Asynchronous async/await Sample2:", profile)
  }
}