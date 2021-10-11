interface IInitialState {
  isAuth: boolean;
  error: null | string;
}

const initialState: IInitialState = {
  isAuth: false,
  error: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
