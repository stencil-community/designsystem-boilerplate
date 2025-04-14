import { MyComponent, MyCounter } from '@placid/react'
import './App.css'

function App() {
  return (
    <>
      <div>
        <header>
          <a href="https://stenciljs.com" className="logo">
            <svg width="256px" height="197px" viewBox="0 0 256 197" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
              <title>Stencil</title>
              <g>
                  <path d="M193.065354,138.495015 L139.731692,196.923077 L41.5985231,196.923077 L94.4010831,138.495015 L193.065354,138.495015 Z M256,69.2476062 L202.694892,127.675077 L0,127.675077 L53.3053046,69.2476062 L256,69.2476062 Z M214.399015,2.13162821e-14 L161.311508,58.4277662 L62.9326769,58.4277662 L116.098954,2.13162821e-14 L214.399015,2.13162821e-14 Z" fill="currentColor"></path>
              </g>
            </svg>
          </a>
        </header>
        <MyComponent first="Stencil" last="'Don't call me a framework' JS"></MyComponent>
        <div>
          <MyCounter startCount={42}></MyCounter>
        </div>
        <p>Click on the StencilJS logo to learn more</p>
      </div>
    </>
  )
}

export default App
