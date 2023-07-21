import logo from './logo.svg';
import { Navigation } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import './App.css';

function App()
{
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
