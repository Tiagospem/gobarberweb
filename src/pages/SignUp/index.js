import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(8, 'A senha deve conter no mínimo 6 caracteres')
    .required('A senha é obrigatória')
});

const SignUp = () => {
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="Gobarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">{loading ? 'Aguarde...' : 'Criar conta'}</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
};

export default SignUp;
