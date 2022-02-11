
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Meals from './components/Meals';

function App() {
  return (
    <div className="App" >
       <ThemeProvider >
       <Navbar />
     <Hero />
     <Meals />
       </ThemeProvider>
 
    </div>
  );
}

export default App;
