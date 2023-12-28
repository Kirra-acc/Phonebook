import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'store/auth/operations';
import s from './Register.module.css';

export const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    console.log(data);
    dispatch(registerThunk(data));
  };
  return (
    <div>
      <form className={s.registerForm} onSubmit={handleSubmit(submit)}>
        <label>
          <span>Name</span>
          <input {...register('name')} type="text" />
        </label>
        <label>
          <span>Email</span>
          <input {...register('email')} type="text" />
        </label>
        <label>
          <span>Password</span>
          <input {...register('password')} type="password" />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
};
