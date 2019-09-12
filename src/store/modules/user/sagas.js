import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { updateProfileFailure, updateProfileSuccess } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;
    const profile = {
      avatar_id,
      name,
      email,
      ...(rest.oldPassword ? rest : {})
    };
    console.tron.log(profile);
    const response = yield call(api.put, 'users', profile);
    toast.success('Perfil atualizado');
    yield put(updateProfileSuccess(response.data));
  } catch (e) {
    toast.error('Erro ao atualizar perfil');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
