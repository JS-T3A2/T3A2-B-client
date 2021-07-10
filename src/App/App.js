import { useQuery } from '@apollo/client';
import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useActions } from '@hooks';
import { getStoredAuthToken, IS_AUTH } from '@utils';

const App = () => {
  const { setAdminData } = useActions();
  const { data, error, loading } = useQuery(IS_AUTH);
  const { adminData } = useSelector(({ app }) => app);

  useEffect(() => {
    if (data && !error && !loading) {
      if (data.isAuth) {
        console.log(data);
        const tokenPayload = jwt_decode(getStoredAuthToken());
        setAdminData(tokenPayload);
      } else {
        console.log('GO to atuyh');
      }
    }
  }, [data, error, loading]);

  return (
    <div>
      <h1>Learn React</h1>
      {loading ? 'Loading...' : <h2>{adminData?.username}</h2>}
    </div>
  );
};

export default App;
