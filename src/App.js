import ButtonDefault from './components/ButtonDefault';
import ButtonDefaultHover from './components/ButtonDefaultHover';
import ButtonOutline from './components/ButtonOutline';
import ButtonOutlineHover from './components/ButtonOutlineHover';
import ButtonDefaultText from './components/ButtonDefaultText';
import ButtonDefaultTextHover from './components/ButtonDefaultTextHover';
import ButtonDisableShadow from './components/ButtonDisableShadow';
import ButtonDisabled from './components/ButtonDisabled';
import ButtonDisabledText from './components/ButtonDisabledText';
import ButtonStartIcon from './components/ButtonStartIcon';
import ButtonEndIcon from './components/ButtonEndIcon';
import ButtonDefaultSmall from './components/ButtonDefaultSmall';
import ButtonDefaultMedium from './components/ButtonDefaultMedium';
import ButtonDefaultLarge from './components/ButtonDefaultLarge';
import ButtonVariant from './components/ButtonVariant';
import './App.css';
import './components/Button.css';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Buttons</h1>
      </header>


      <div className="TopBtn">
        <ButtonDefault />
        <ButtonDefaultHover />
        <ButtonOutline />
        <ButtonOutlineHover />
        <ButtonDefaultText />
        <ButtonDefaultTextHover />
      </div>

      <ButtonDisableShadow />

      <div className="TopBtn">
        <ButtonDisabled />
        <ButtonDisabledText />
        <ButtonStartIcon />
        <ButtonEndIcon />
      </div>

      <div className="MidBtn">
        <ButtonDefaultSmall />
        <ButtonDefaultMedium />
        <ButtonDefaultLarge />
      </div>

      <div className="LowerBtn">
        <ButtonVariant 
          btnName='Default' 
          btnClass='Default default'
          btnType='<Button color=”default” />'
          pClass='Text' />

        <ButtonVariant 
          btnName='Default' 
          btnClass='Default Primary'
          btnType='<Button color=”primary” />'
          pClass='Text' />

        <ButtonVariant 
          btnName='Secondary' 
          btnClass='Default Secondary'
          btnType='<Button color=”secondary” />'
          pClass='Text' />

        <ButtonVariant 
          btnName='Danger' 
          btnClass='Default Danger'
          btnType='<Button color=”danger” />'
          pClass='Text' />
      </div>

      <div className="LowerBtn">
        <ButtonVariant 
            btnName='Default' 
            btnClass='Default defaultHover'
            btnType='&:hover, &:focus'
            pClass='Text2' />

          <ButtonVariant 
            btnName='Default' 
            btnClass='Default PrimaryHover'
            btnType='&:hover, &:focus'
            pClass='Text2'
           />

          <ButtonVariant 
            btnName='Secondary' 
            btnClass='Default SecondaryHover'
            btnType='&:hover, &:focus'
            pClass='Text2'
           />

          <ButtonVariant 
            btnName='Danger' 
            btnClass='Default DangerHover'
            btnType='&:hover, &:focus'
            pClass='Text2'
           />
      </div>

        


      <footer>
        <small>debo9210  @ DevChallenges.io</small>
      </footer>
    </div>
  );
}

export default App;
