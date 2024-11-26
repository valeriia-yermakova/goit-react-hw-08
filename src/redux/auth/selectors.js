export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const getUserName = (state) => state.auth.user.name;
export const getIsLoggedIn = (state) => state.auth.isLoggedIn;