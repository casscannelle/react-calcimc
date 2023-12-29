import './App.css';
import React, {useState} from 'react';

function App () {

  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [imc, setImc] = useState('')
  const [message, setMessage] = useState('')

  function calculator() {
    const calculatedImc = (weight / (height * height)).toFixed(2);
    setImc(calculatedImc);
  
    if (calculatedImc < 18.5) {
      setMessage('Classificação: Magreza');
    } else if (calculatedImc >= 18.6 && calculatedImc <= 24.9) {
      setMessage('Classificação: Normal');
    } else if (calculatedImc >= 25 && calculatedImc <= 29.9) {
      setMessage('Classificação: Sobrepeso');
    } else if (calculatedImc > 30) {
      setMessage('Classificação: Obesidade');
    }
  }

  return (
      <div className="IMC">
          <div class="header"><h2>Descubra o seu IMC</h2></div>

          <div class="form">
          <label>Peso:</label>
          <input 
              type="text" 
              placeholder="0.00" 
              value={weight}
              onChange={ e => setWeight(e.target.value)}
          />
          
          <label>Altura: </label>
          <input 
              type="text" 
              placeholder="0.00"
              value={height} 
              onChange={ e => setHeight(e.target.value)}
          />
          

          <button onClick={calculator}>Calcular</button>

          <p>Resultado: {imc}</p>
          <p>{message}</p>
          
          </div>
      </div>
  )

}

export default App