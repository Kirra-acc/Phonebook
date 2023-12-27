import React from 'react';
import { useForm } from 'react-hook-form';

export const Register = () => {
  const { register, handleSubmit } = useForm();
  const submit = data => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
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
          <input {...register('password')} type="text" />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
};
