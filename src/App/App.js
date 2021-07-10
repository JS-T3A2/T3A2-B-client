import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { IS_AUTH } from '@utils';

const App = () => {
  const { data, error, loading } = useQuery(IS_AUTH);
  const { adminData } = useSelector(({ app }) => app);

  useEffect(() => {
    if (data && !error && !loading) {
      console.log(data);
    }
  }, [data, error, loading]);

  return (
    <div>
      <h1>Learn React</h1>
      {loading ? 'Loading...' : <h2>{adminData}</h2>}
    </div>
  );
};

export default App;
