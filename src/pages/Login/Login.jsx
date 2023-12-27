import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginThunk } from 'store/auth/operations';

export const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: 'o',
      password: 'dd',
    },
  });
  const dispatch = useDispatch();
  const submit = data => {
    console.log(data);
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        navigate('/contacts');
        toast.success(`Welcome ${res.user.name}!`);
      })
      .catch(() => {
        alert('Error');
      });
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
