export default function createRouterReducer(AppNavigator) {
  return (state, action) => (
    AppNavigator.router.getStateForAction(action, state) || state
  );
}
