export default {
  saveUserName(context, payload) {
    context.commit("saveUserName", payload);
  },
  toggleDisplayUsername(ctx) {
    ctx.commit("toggleUsername");
  },
  saveCartNumber(ctx, payload){
    ctx.commit('saveCartNumber', payload)
  }
};
