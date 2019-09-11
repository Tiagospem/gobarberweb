import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { signInSuccess, signFailure, signUpSuccess } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', { email, password });
    const { token, user } = response.data;
    if (!user.provider) {
      toast.error('Usuário não é prestador');
      return;
    }
    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (e) {
    toast.error('Falha na autenticação, verifique seus dados!');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true
    });
    toast.success(
      'Cadastro efetuado com sucesso, efetue login com seus dados de acesso!'
    );
    yield put(signUpSuccess());
    history.push('/');
  } catch (e) {
    toast.error('Falha no cadastro, verifique seus dados!');
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp)
]);
