import './App.css';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import FormattedTime from './components/FormattedTime/FormattedTime';
import { useState, useEffect }from "react";
import './styles/normalize.scss';
import './styles/global.scss';

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    clearInterval(timer);
    setTimer( setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1))
  };

  const stop = () => {
    clearInterval(timer);
  }

  const reset = () => {
    clearInterval(timer);
    setTime(0);
  }

  useEffect(() => {
    return () => {
      if(timer) clearInterval(timer);
    };
  }, []);


  return (
    <Container>
      <FormattedTime time={time}/>
      <Button action={start}>Start</Button>
      <Button action={stop}>Stop</Button>
      <Button action={reset}>Reset</Button>
    </Container>
  );
}

export default App;
