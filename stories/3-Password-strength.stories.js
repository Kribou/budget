import React from 'react';
import PasswordStrengthBar from '../src/main/webapp/app/shared/layout/password/password-strength-bar';
import { text } from '@storybook/addon-knobs';

const passwords = ['', 'a123eza', 'a123ezaaz23za1^', 'a123ezaaz23za1!aZ'];

export default {
  title: 'PasswordStrength',
};

const passwordStoryStyle = {
  border: '1px solid gray',
  marginBottom: '5px',
  padding: '10px',
};
export const PasswordStrengthStory = () =>
  passwords.map((password, index) => {
    const passwordKnob = text('Password' + index, password);

    return (
      <div key={index} style={passwordStoryStyle}>
        <label key={index} for={'password' + index}>
          Password :{' '}
        </label>
        <input key={index} style={{ border: 'none' }} id={'password' + index} type="text" value={passwordKnob} disabled />
        <PasswordStrengthBar key={index} password={passwordKnob} />
      </div>
    );
  });

PasswordStrengthStory.story = {
  name: 'with PasswordStrength',
};
