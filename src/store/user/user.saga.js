import { takeLatest, call, all, put } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.types';
import { signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutFailed,
  signOutSuccess,} from './user.action';
import { getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,} from '../../utils/firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails){
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails)
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (e) {
    yield put(signInFailed(e))
  }
}

export function* isUserAuthenticated(){
  try {
    const userAuth = yield call(getCurrentUser)
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth)
  } catch (e) {
    yield put(signInFailed(e))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup)
    yield call(getSnapshotFromUserAuth, user)
  } catch (e) {
    yield put(signInFailed(e))
  }
}

export function* signInWithEmail({ payload:{ email, password}}){
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password)
    yield call(
      getSnapshotFromUserAuth,
      user)
  } catch (e) {
    yield put(signInFailed(e))
  }
}

export function* signUp({ payload:{ email, password, displayName}}){
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password)
    yield put(signUpSuccess(user, {displayName}))
  } catch (e) {
    yield put(signUpFailed(e))
  }
}

export function* signOut(){
  try {
    yield call(signOutUser)
    yield put(signOutSuccess())
  } catch (e) {
    yield put(signOutFailed(e))
  }
}

export function* signInAfterSignUp({ payload:{ user, additionalDetails }}){
  yield call(getSnapshotFromUserAuth, user, additionalDetails)
}

export function* onCheckUserSession(){
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onGoogleSignIn(){
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignIn(){
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignUpStart(){
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_STARTED, signUp)
}

export function* onSignUpSuccess(){
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart(){
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas(){
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart)])
}
