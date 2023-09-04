function reducer (oldState, action) {

  const { type, payload } = action

  if (type === 'LOADING') {
    return { ...oldState, loading: true }
  }

  if (type === 'TOGGLE_SIDEBAR') {
    return { ...oldState, isSideBarOpen: !oldState.isSideBarOpen }
  }

  // DEFAULT
  throw new Error('NO MATCHING ACTION TYPE')

}

export default reducer