import { USER_ACTION_TYPES } from './user.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

  // SET_CURRENT_USER: 'user/SET_CURRENT_USER',
  // CHECK_USER_SESSION: 'user/CHECK_USER_SESSION',
  // GOOGLE_SIGN_IN_START: 'user/GOOGLE_SIGN_IN_START',
  // EMAIL_SIGN_IN_START: 'user/EMAIL_SIGN_IN_START',
  // SIGN_IN_SUCCES: 'user/SIGN_IN_SUCCES',
  // SIGN_IN_FAILED: 'user/SIGN_IN_FAILED',

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)


export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)


export const emailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })


export const signInSuccess = (payload) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCES, payload) //...or here (read backwards)


export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error) //the next error could be here...


//REMINDER the createAction should be returned by every respective function
