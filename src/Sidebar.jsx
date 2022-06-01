import React from 'react'
//Fazer assim a sidebar Listas
const players = [
  {name: "Marcelo", score: 1},
  {name: "Carolina", score: 5},
  {name: "Iulian", score: 3}
]

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="logo.svg" alt="algo aqui" />
        <p className='title'>Cards4ALL</p>
        <hr className="line" />
      </div>

      <div className='players'>
        <div className='flex player-status'>
          <p>Nome: Marcelo <br />
              Pontuação: 0pts
           </p> 
        </div>
        <div className='flex player-status'>
          <p>Nome: Carolina <br />
              Pontuação: 0pts
           </p> 
        </div>
        <div className='flex player-status'>
          <p>Nome: Iulian <br />
              Pontuação: 0pts
           </p> 
        </div>
        <div className='flex player-status'>
          <p>Nome: Rui <br />
              Pontuação: 0pts
           </p> 
        </div>
        <div className='flex player-status'>
          <p>Nome: Magda <br />
              Pontuação: 0pts
           </p> 
        </div>
        <div className='flex player-status'>
          <p>Nome: Zelia <br />
              Pontuação: 0pts
           </p> 
        </div>
        <div className='flex player-status'>
          <p>Nome: Armando <br />
              Pontuação: 0pts
           </p> 
        </div>
      </div>
    </div>
  )
}
