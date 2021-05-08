export default {
  saveUserName(state, payload) {
    state.displayUsername = payload;
    state.username = payload;
  },

  toggleUsername(state) {
    state.displayUsername === state.username
      ? (state.displayUsername = "toggle")
      : (state.displayUsername = state.username);
  },

  saveCartNumber(state, payload) {
    state.cartCount = payload;
  }
};
