const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
}


export const fetchUserLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }
        resolve(location)
      },
      (err) => {
        reject(err)
       alert('Sorry, no position available.')
      },
      options
    )
  })
}
