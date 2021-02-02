import {Dispatch} from 'redux';
import * as actionCreators from './action-creators';
import axios from 'axios';
import {auth_login} from '@api';

export const setUserProfilePictureAction = (payload?: UpdateUserStateModel) => (
  dispatch: Dispatch,
) => {
  dispatch(actionCreators.setUserProfilePicture(payload));
};

export const identifyUserAction = (payload: AuthStateModel) => () => {
  console.log('entro a identifyUserAction', payload);
  axios
    .post(auth_login('dev'), {
      email: payload.email,
      password: payload.password,
    })
    .then((res: any) => {
      const token = 'Bearer ' + res.access_token;
      console.log('res', res, token);
    })
    .catch((err) => {
      console.log('err', err);
    });
};

export const updateUserInfoAction = (payload: UpdateUserStateModel) => (
  dispatch: Dispatch,
) => {
  dispatch(actionCreators.updateUserInfo(payload));
};

export const logoutAction = () => (dispatch: Dispatch) => {
  dispatch(actionCreators.logout());
};
