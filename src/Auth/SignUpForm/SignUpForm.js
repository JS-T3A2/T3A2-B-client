import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { useActions } from '@hooks';
import { CREATE_NEW_ADMIN, storeAuthToken } from '@utils';

const SignUpForm = () => {
  const { setAdminData } = useActions();
  const history = useHistory();
  const [createNewAdmin, { data, loading }] = useMutation(CREATE_NEW_ADMIN);

  const formik = useFormik({
    initialValues: { email: '', password: '', passwordConfirmation: '' },
    onSubmit: async ({ email, password }) => {
      try {
        await createNewAdmin({ variables: { email, password } });
      } catch (error) {
        console.log(error?.graphQLErrors);
      }
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).max(99).required(),
      passwordConfirmation: Yup.string()
        .required('Password confirmation is required.')
        .oneOf([Yup.ref('password'), null], 'Passwords must match!'),
    }),
  });

  useEffect(() => {
    if (data) {
      storeAuthToken(data.createNewAdmin.authToken);
      setAdminData(jwt_decode(data.createNewAdmin.authToken));
      history.push('/admin');
    }
  }, [data]);

  return (
    <div>
      <h1>Sign Up Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <input placeholder="email" type="email" {...formik.getFieldProps('email')} />
        <input type="password" {...formik.getFieldProps('password')} />
        <input type="password" {...formik.getFieldProps('passwordConfirmation')} />
        <button type="submit">Sign Up</button>
      </form>
      <pre>{JSON.stringify({ data, errors: formik.errors, loading })}</pre>
    </div>
  );
};

export default SignUpForm;
