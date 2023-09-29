function success (position) {
  console.log(position)

  console.log(position.coords.latitude, position.coords.longitude)
}

function error () {
  alert('Sorry, no position available.')
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
}

export const fetchUserLocation = () => {

  navigator.geolocation.getCurrentPosition(success, error, options)

}