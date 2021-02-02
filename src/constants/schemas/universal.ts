import * as Yup from 'yup';
import {validations} from '../strings';

export const INPUT_FIELD = (customRequiredMessage?: string) =>
  Yup.string()
    .nullable()
    .required(customRequiredMessage || validations.TEXT_FIELD_REQUIRED_ERROR);

export const ONLY_LETTERS_FIELD = (
  customRequiredMessage?: string,
  customValidMessage?: string,
) =>
  Yup.string()
    .matches(/^[a-zA-Z]+$/, customValidMessage)
    .required(customRequiredMessage || validations.TEXT_FIELD_ONLY_LETTERS);

export const USER_AUTH_EMAIL_EMPTY = (
  customRequiredMessage?: string,
  customValidMessage?: string,
) =>
  Yup.string()
    .matches(/^[^0-9]+$/, customValidMessage)
    .required(customRequiredMessage || validations.AUTH_EMAIL_REQUIRED);

export const USER_AUTH_EMAIL_INVALID = (
  customRequiredMessage?: string,
  customValidMessage?: string,
) =>
  Yup.string()
    .matches(/[\w-]+@([\w-]+\.)+[\w-]+/, customValidMessage)
    .required(customRequiredMessage);

export const USER_AUTH_PASSWORD_EMPTY = (
  customRequiredMessage?: string,
  customValidMessage?: string,
) =>
  Yup.string()
    .matches(/^[^0-9]+$/, customValidMessage)
    .required(customRequiredMessage || validations.AUTH_PASSWORD_REQUIRED);

export const USER_AUTH_PASSWORD_INVALID = (
  customRequiredMessage?: string,
  customValidMessage?: string,
) =>
  Yup.string()
    .matches(/^[^0-9]+$/, customValidMessage)
    .required(customRequiredMessage || validations.AUTH_PASSWORD_INVALID);
