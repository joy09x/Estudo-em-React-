
import './App.css';
import Conversor from "./components/Conversor"

function App() {
  return (
    
    <div className="App">
     <h1> Conversor IESB de Moedas
     </h1>
    <h2> Desenvolvido por Joyce Rabello </h2>
    <h3>Disciplina: Linguagem de Programação para WEB</h3>
    <div className="linha"> 
    <Conversor moedaA="USD" moedaB="BRL"></Conversor>
    <Conversor moedaA="BRL" moedaB="USD"></Conversor>  
    </div>
    <div className="linha">  
    <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
    <Conversor moedaA="BRL" moedaB="EUR"></Conversor>  
    </div>
    <div className="linha">  
    <Conversor moedaA="GBP" moedaB="BRL"></Conversor>
    <Conversor moedaA="BRL" moedaB="GBP"></Conversor>  
    </div>
    </div>
  );
}

export default App;
