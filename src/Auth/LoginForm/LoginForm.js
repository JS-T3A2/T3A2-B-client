import { useLazyQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';

import { LOGIN } from '@utils';

const LoginForm = () => {
  const [login, { data, error, loading }] = useLazyQuery(LOGIN, { fetchPolicy: 'no-cache' });

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: async ({ email, password }) => {
      try {
        await login({ variables: { email, password } });
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Please enter a valid email.').required('Email is required.'),
      password: Yup.string().min(6).required('Password is required.'),
    }),
  });

  useEffect(() => {
    if (data) {
      console.log(data.login);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error.graphQLErrors);
    }
  }, [error]);

  return (
    <div>
      <h1>LoginForm</h1>
      <form onSubmit={formik.handleSubmit}>
        <input placeholder="email" type="email" {...formik.getFieldProps('email')} />
        <input placeholder="password" type="password" {...formik.getFieldProps('password')} />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default LoginForm;
