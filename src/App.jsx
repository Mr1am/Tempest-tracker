import { useState } from 'react'
import './App.scss'

function App() {
  return (
    <>
      <header>
        <button>
        </button>
        <h3>Город</h3>
        <img src='../src/assets/location.svg'></img>
      </header>
      <section id='main'>
        <img src=''/>
        <h3>Солнечно</h3>
        <h1>3</h1>
        <h3>от 1 до 6</h3>
      </section>
      <section id='widgets'>
        <section>
          <div>
            <h4> <img src="" alt=""/>ветер</h4>
            <h2>12м/c</h2>
            <h4>ЮЗ</h4>
          </div>
          <div>
            <h4>осадки</h4>
            <h2>1мм</h2>
            <h4>37% влаж...</h4>
          </div>
          <div id="forecast">
            <h4>прогноз на 3 дня</h4>
            <h2>-- -- --</h2>
            <h4>недоступно</h4>
          </div>
        </section>
        <div id="map">
          <h4>карта погоды</h4>
          <div>
          </div>
        </div>
      </section>
      <section id='sidebar'>
        <div>
          <div>
            <img/> <h2>Город</h2> 
            <button></button>
          </div>
          <div>
            <form action="POST">
            <input></input>
            <button></button>
            </form>
          </div>
        </div>
        <div>
          <h2>Избранное</h2>
          <h3>Недоступно в текущей версии сайта</h3>
        </div>
        <footer>
          <button><img></img>Источник</button>
          <button><img></img>Приложение</button>
          <button>Тема</button>
        </footer>
      </section>
    </>
  )
}

export default App
