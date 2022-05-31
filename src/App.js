import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <div className='areaDeJogo'>
        <div className="perguntas">Perguntas</div>
        <div className='resposta'>Área das Respostas</div>
        <div className="cartas">
          <div className='carta'>Respostas</div>
          <div className='carta'>Respostas</div>
          <div className='carta'>Respostas</div>
          <div className='carta'>Respostas</div>
        </div>
      </div>
      {/* <div className='acoes'>
        <button>Troca as 5 cartas aleatoriamente</button>
        <button>Troca uma carta aleatoriamente</button>
      </div> */}
    </div>
  );
}

export default App;
