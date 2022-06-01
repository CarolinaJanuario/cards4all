import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <div className='areaDeJogo'>
        <div className="perguntas"><h3>Everybody hates_________.</h3></div>
        <div className='areaResposta'></div>
        <div className="cartas">
          <div className='carta'>Respostas</div>
          <div className='carta'>Respostas</div>
          <div className='carta'>Respostas</div>
          <div className='carta'>Respostas</div>
          <div className='carta'>Respostas</div>
        </div>
        <div className='areaAcoes'>
          {/* <button>Troca as 5 cartas aleatoriamente</button> */}
          <button>Jogar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
