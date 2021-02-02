import * as Yup from 'yup';
import {schemasGlobal, validations} from '@constants';

export const authUserSchema = Yup.object().shape({
  email: schemasGlobal.USER_AUTH_EMAIL_EMPTY(validations.AUTH_EMAIL_INVALID),
  password: schemasGlobal.USER_AUTH_EMAIL_INVALID(
    validations.AUTH_PASSWORD_INVALID,
  ),
});
