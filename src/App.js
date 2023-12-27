import './App.css'

function App() {
  return(
    <div className="container">
      <div className="form">
        <div className="container-input-label">
          <div className="children-container-input-label">
            <label>Altura:</label>
            <input placeholder='Digite sua altura'/>
          </div>
          <div className="children-container-input-label">
            <label>Peso:</label>
            <input placeholder='Digite seu peso'/>
          </div>
          <div className="container-button">
          <button>CALCULAR</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App