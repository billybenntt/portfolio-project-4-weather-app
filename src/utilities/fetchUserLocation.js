const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

function success(position) {
  const { latitude, longitude } = position.coords;
  return { latitude, longitude };
}

function error() {
  alert('Sorry, no position available.');
}

export const fetchUserLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = success(position);
        resolve(location);
      },
      (err) => {
        reject(err);
      },
      options
    );
  });
};
