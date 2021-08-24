interface iAction {
  type: string;
  payload: number;
}

const reducer = (state = 0, action: iAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'deposit':
      return state + payload;
    case 'withdraw':
      return state - payload;
    default:
      return state;
  }
}

export default reducer;