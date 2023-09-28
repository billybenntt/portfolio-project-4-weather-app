function reducer (oldState, action) {

  const { type, payload } = action

  if (type === 'SET_LOADING') {
    return { ...oldState, isLoading: true }
  }

  if (type === 'TOGGLE_SIDEBAR') {
    return { ...oldState, isSideBarOpen: !oldState.isSideBarOpen }
  }

  if (type === 'SET_WEATHER') {
    return { ...oldState, isLoading: false, weatherData: payload }
  }

  if (type === 'SET_CONVERSION') {

    return { ...oldState, conversionType: payload}
  }

  // DEFAULT
  throw new Error('NO MATCHING ACTION TYPE')

}

export default reducer