
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App" >
       <ThemeProvider >
       <Navbar />
     <Hero />
       </ThemeProvider>
 
    </div>
  );
}

export default App;
