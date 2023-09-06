import './App.css'
import { IntroductionSection, AboutSection, ConclusionSection } from './components/otherModules';
import {MainPart} from './components/defaultModule';


function App() {

  return(
    <>
      {MainPart ()}
      {IntroductionSection ()}
      {AboutSection ()}
      {ConclusionSection ()}
    </>
  )
};
export default App
