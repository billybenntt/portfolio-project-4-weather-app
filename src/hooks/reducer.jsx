function reducer (oldState, action) {

  const { type, payload } = action

  if (type === 'SET_LOADING') {
    return { ...oldState, isLoading: true }
  }

  if (type === 'TOGGLE_SIDEBAR') {
    return { ...oldState, isSideBarOpen: !oldState.isSideBarOpen }
  }

  if (type === 'SET_WEATHER') {
    return { ...oldState, isLoading: false, weatherData: payload}
  }

  if (type === 'SET_CONVERSION') {
    return { ...oldState, tempUnit: payload }
  }

  if (type === 'SET_COORDINATES') {
    const { latitude, longitude } = payload
    return { ...oldState, isTextLocation: false, latitude, longitude }
  }

  if (type === 'SET_LOCATION') {
    return { ...oldState, isTextLocation: true, location: payload }
  }

  // DEFAULT
  throw new Error('NO MATCHING ACTION TYPE')

}

export default reducer