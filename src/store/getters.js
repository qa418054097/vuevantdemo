const getters = {
  isLoading: state => state.isLoading,
  networkSuccess: state => state.networkSuccess,
  error: state => state.error,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name
}
export default getters
