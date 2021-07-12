import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Routes from './Routes';
import { Wrapper } from './Styles';

const Admin = () => {
  const history = useHistory();
  const { adminData } = useSelector(({ app }) => app);

  useEffect(() => {
    if (adminData !== undefined) {
      if (!adminData) {
        history.push('/admin/authenticate');
      }
    }
  }, [adminData]);

  return (
    <Wrapper>
      <h1>Admin</h1>
      <pre>{JSON.stringify({ adminData }, null, 2)}</pre>
      <Routes />
    </Wrapper>
  );
};

export default Admin;
