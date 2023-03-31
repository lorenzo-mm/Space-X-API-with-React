import { useState, useEffect} from 'react';
import { Heading, Image } from '@chakra-ui/react';
import { LaunchItem } from './components/LaunchItem';
import * as API from './services/launches';
import logo from './assets/logo-spacex.png';
import './app.css'

function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <section id='homepage'>
      <div className='logo' >
        <Image src={logo} w={300} h={100} />
      </div>
      <div>
        <Heading className='title_principal'>SpaceX Launches</Heading>
      </div>
      <div className='container'>
        <p className='launches'>
          {launches.map(launch => (
              <LaunchItem key={launch.flight_number} {...launch}/>
          ))}
        </p>
      </div>
    </section>
  );
}

export default App;
