import './global.css'
import './app.css'
import Input from './components/input/input.jsx'
import ButtonOperation from './components/button/button-operation.jsx'
import ButtonNumber from './components/button/button.jsx'
import { useState } from 'react'


function App() {
  
  //O estado do numero atual e o próximo
  const [currentNumber, setCurrentNumber] = useState('0');

  //Primeiro número
  const [firstNumber, setFirstNumber] = useState('')

  //Operação
  const [operation, setOperation] = useState('')


  //Função para adicionar um número
  const addNumber = (number) => {
    setCurrentNumber(prev => (prev === '0' ? number : `${prev}${number}`));
  }

  //Funlção para deletar o ultimo elemento
  const delNumber = () => {
    setCurrentNumber(prev => prev.slice(0, -1))
  }

  //Função para limpar tudo
  const clear = () => {
    setCurrentNumber('0')
    setFirstNumber('')
    setOperation('')
  }

  //Função para somar
  const sumNumbers = () => {
    const sum = Number(firstNumber) + Number(currentNumber)
    setCurrentNumber(String(sum))
    setFirstNumber('');
    setOperation('')
    
  }

  //Função para subtrair
  const subNumbers = () => {
    const sub = Number(firstNumber) - Number(currentNumber)
    setCurrentNumber(String(sub))
    setFirstNumber('');
    setOperation('')
    
  }

  //Função para multiplicar
  const multiNumbers = () => {
    const multi = Number(firstNumber) * Number(currentNumber)
    setCurrentNumber(String(multi))
    setFirstNumber('');
    setOperation('')
    
  }

  //Função para dividir
  const divNumbers = () => {
    const div = Number(firstNumber) / Number(currentNumber)
    setCurrentNumber(String(div))
    setFirstNumber('');
    setOperation('')
    
  }

  //Função para elevar ao quadrado
  const squareNumbers = () => {
    const square = Number(firstNumber) * Number(firstNumber)
    setCurrentNumber(String(square))
    setFirstNumber('');
    setOperation('')
    
  }

  //Função para tirar a raiz quadrada
  const squareRoot = () => {
    const root = Math.sqrt(Number(currentNumber))
    setCurrentNumber(String(root))
    setFirstNumber('');
    setOperation('')
    
  }

  
  //Função de igual
  const equals = () => {
    if (firstNumber != '0' && operation != '' && currentNumber != '0' ){
      switch (operation){
        case '+':
          sumNumbers();
          break;
        case '-':
          subNumbers();
          break;
        case '×':
          multiNumbers();
          break;
        case '÷':
          divNumbers();
          break;
        case '²':
          squareNumbers();
          break;
        case '√':
          squareRoot();
          break;
      }
    }
  }

  return (
    <>
      <div className="conteiner">
        <Input value={`${firstNumber} ${operation} ${currentNumber}`}/>

        <div className="numbers">
          
          <ButtonNumber value='7' click={() => addNumber('7')}/>
          <ButtonNumber value='8' click={() => addNumber('8')}/>
          <ButtonNumber value='9' click={() => addNumber('9')}/>
          <ButtonOperation value='×' click={() => {
            setOperation('×');
            setFirstNumber(currentNumber);
            setCurrentNumber('');
          }}/>

          <ButtonNumber value='4' click={() => addNumber('4')}/>
          <ButtonNumber value='5' click={() => addNumber('5')}/>
          <ButtonNumber value='6' click={() => addNumber('6')}/>
          <ButtonOperation value='÷' click={() => {
            setOperation('÷');
            setFirstNumber(currentNumber);
            setCurrentNumber('');
          }}/>

          <ButtonNumber value='1' click={() => addNumber('1')}/>
          <ButtonNumber value='2' click={() => addNumber('2')}/>
          <ButtonNumber value='3' click={() => addNumber('3')}/>
          <ButtonOperation value='+' click={() => {
            setOperation('+');
            setFirstNumber(currentNumber);
            setCurrentNumber('');
          }}/>

          <ButtonOperation value='Del' click={() => delNumber()}/>
          <ButtonNumber value='0' click={() => addNumber('0')}/>
          <ButtonOperation value='.' click={() => addNumber('.')}/>
          <ButtonOperation value='–' click={() => { 
            setOperation('-');
            setFirstNumber(currentNumber);
            setCurrentNumber('');}
          }/>
            
          <ButtonOperation value='C' click={() => clear()}/>

          <ButtonOperation value='x²' click={() => {
            setOperation('²');
            setFirstNumber(currentNumber);
            setCurrentNumber('');
          }}/>
          <ButtonOperation value='√' click={() => {
            setOperation('√');
            setFirstNumber('');
            setCurrentNumber('');
          }}/>

          <ButtonOperation value='=' click={() => equals()}/>
          
        </div>
      </div>
    </>
  )
}

export default App
