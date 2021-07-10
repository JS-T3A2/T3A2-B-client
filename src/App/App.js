import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { IS_AUTH } from '@utils';

const App = () => {
  const { data, error, loading } = useQuery(IS_AUTH);
  const app = useSelector(({ app }) => app);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h1>Apps</h1>
      <pre>{JSON.stringify({ app }, null, 2)}</pre>
    </div>
  );
};

export default App;
