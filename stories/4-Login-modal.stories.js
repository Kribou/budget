import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import LoginModal from '../src/main/webapp/app/modules/login/login-modal';
import { PasswordResetInit } from '../src/main/webapp/app/modules/account/password-reset/init/password-reset-init';
import Register from '../src/main/webapp/app/modules/account/register/register';
import { TranslatorContext } from 'react-jhipster';
import { handleRegister } from '../src/main/webapp/app/modules/account/register/register.reducer';
import '../src/main/webapp/app/app.scss';
import '../src/main/webapp/app/_bootstrap-variables.scss';

export default {
  title: 'Login modal',
};

const passwordStoryStyle = {
  border: '1px solid gray',
  marginBottom: '5px',
  padding: '10px',
};

export const LoginModalStory = () => {
  const login = action('login');
  const close = () => setShow(false);
  const error = action('error');

  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(true)}>Show login modal</button>
      <LoginModal showModal={show} handleClose={close} handleLogin={login} loginError={error} />
    </>
  );
};

LoginModalStory.story = {
  name: 'Login modal',
};

export const PasswordResetInitStory = () => {
  const reset = action('reset');
  const handlePasswordResetInit = action('handlePasswordResetInit');
  return <PasswordResetInit reset={reset} handlePasswordResetInit={handlePasswordResetInit} />;
};

PasswordResetInitStory.story = {
  name: 'Password Reset Init',
};

export const RegisterStory = () => {
  const reset = action('reset');
  const handleRegister = action('handleRegister');
  return <Register />;
};

RegisterStory.story = {
  name: 'Register',
};
