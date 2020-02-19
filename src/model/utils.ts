export function createNamedWrapperReducer(
  reducerFunction: any,
  reducerName: any
) {
  return (state: any, action: any) => {
    const { name } = action;
    const isInitializationCall = state === undefined;
    if (name !== reducerName && !isInitializationCall) {
      return state;
    }
    return reducerFunction(state, action);
  };
}
