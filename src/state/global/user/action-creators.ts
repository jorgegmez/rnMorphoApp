import {actionsUser as actions} from '@constants';

export const setUserProfilePicture = (payload?: UpdateUserStateModel) => ({
  type: actions.UPDATE_USER_INFO,
  payload,
});

export const updateUserInfo = (payload?: UpdateUserStateModel) => ({
  type: actions.UPDATE_USER_INFO,
  payload,
});

export const logout = () => ({
  type: actions.RESET_FIELDS_USER,
});
