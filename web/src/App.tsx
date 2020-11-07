import React from 'react';
import './App.css';

import Routes from './routes';

function App() {

  return (
    <Routes />
  );
}

export default App;

//#region Código de exemplo de Estado
// function App() {

//   // useState retorna um array [valor do estado, função para atualizar o valor do estado]
//   const [counter, setCounter] = useState(0);
//   /* Não é possível alterar diretamente um estado e sim pela função que ele retorna */

//   function addButtonClick() {
//     setCounter(counter + 1);
//   }

//   function decreaseButtonClick() {
//     if (counter - 1 >= 0)
//       setCounter(counter - 1);
//   }

//   return (
//     <div>
//       <Header title="Double Sync" />
//       <h1>{counter}</h1>
//       <button type="button" onClick={addButtonClick} >Aumentar</button>
//       <button type="button" onClick={decreaseButtonClick} >Diminuir</button>
//     </div>
//   );
// }
//#endregion
