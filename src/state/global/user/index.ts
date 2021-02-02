import {
  actionsUser as actions,
  reducersNameUser as reducersName,
} from '@constants';

export const initialState: UserStateModel = {
  data: {
    name: '',
    lastName: '',
    phone_number: 0,
    profile_picture: '',
    email: '',
    gender: '',
    birthday: '',
  },
  pending: false,
  error: {ok: true, text: ''},
};

const reducer = (state: UserStateModel = initialState, action: Action) => {
  switch (action.type) {
    case actions.UPDATE_PROFILE_PICTURE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };

    case actions.UPDATE_USER_INFO:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };

    case actions.RESET_FIELDS_USER:
      return initialState;

    default:
      return state;
  }
};
export default reducer;

export const NAME = reducersName.USER;
