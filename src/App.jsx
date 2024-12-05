
import styles from './App.module.css';
import { Navbar } from './components/navbar';


import { About } from "./components/About/About";

import { Projects } from "./components/Projects/Projects";

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      
      <About />
      
      <Projects/>
      
    </div>
  )
}

export default App
