import logo from './logo.svg';
import './App.css';


function Kartu (props) {
  return <h1>Halo, {props.nim} - {props.nama}</h1>;
}

function App() {
  return (
    <div>
      <Kartu nim="1841720184" nama="Muhammad Yusril Hasriansyah" />
      <Kartu nim="1841722188" nama="Joko Suwarno" />
      <Kartu nim="1831721450" nama="Fransciscus Jhonny" />
    </div>
  );
}

export default App;