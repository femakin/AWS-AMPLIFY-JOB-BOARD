import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { DataStore } from '@aws-amplify/datastore';
import { JobList } from './models';

import awsExports from './aws-exports';
import { useEffect } from 'react';
import Home from './components/Home/Home';

Amplify.configure(awsExports);





function App() {


  const QueryData = async () => {
    const models = await DataStore.query(JobList);
    console.log(models);
  }

  useEffect(() => {
    QueryData()

  }, [])


  return (
    // <Authenticator>
    //   {({ signOut, user }) => (
    //     <main>

    //       {/* <h1>Hello {user.username}</h1>
    //       <button onClick={signOut}>Sign out</button> */}
    //       {/* <Header /> */}
    //       <Home />
    //     </main>
    //   )}
    // </Authenticator>
    <main>

      {/* <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button> */}
      {/* <Header /> */}
      <Home />
    </main>

  );
}

export default App;
