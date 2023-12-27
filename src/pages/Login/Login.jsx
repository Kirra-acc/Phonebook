import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'store/auth/operations';

export const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: 'o',
      password: 'dd',
    },
  });
  const dispatch = useDispatch();
  const submit = data => {
    console.log(data);
    dispatch(loginThunk(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Email</span>
          <input {...register('email')} type="text" />
        </label>
        <label>
          <span>Password</span>
          <input {...register('password')} type="password" />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};
