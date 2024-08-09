import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [name, setName] = useState('');
  const [datetime,setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);


  useEffect(()=>{
    const url = process.env.REACT_APP_API_URL+'/transactions';
    axios.get(url).then(({data})=>{
      setTransactions(data);
    });
  },[]);
  
  async function addNewTransaction(ev){
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL+'/transaction';
    const price = name.split(' ')[0];

    try {
      const {data} = await axios.post(url,{
        name: name.substring(price.length+1),
        price,
        description,
        datetime});
      console.log(data);
    } catch (error) {
      console.error('There was an error!', error);
    }
    setName('');
    setDatetime('');
    setDescription('');
    window.location.reload();

  }

  function getColor(price){
    let className='pricegreen';
    if (price.charAt(0)=='-')
      className = 'pricered';

    return className;
  }
  let balance=0;
  for(const transaction of transactions){
    let sign = transaction.price.charAt(0);
    let temp = transaction.price.substring(2);
    let num = parseFloat(temp);
    if (sign=='-')
      num = 0-num;
    balance = balance + num;
    
  }
  let str = balance.toFixed(2);
  const whole = str.split('.')[0];
  const fraction = str.split('.')[1];

  return (
    <main>
      <h1>${whole}<span>.{fraction}</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input type='text' placeholder='+/- $200 New TV' value={name} onChange={ev => setName(ev.target.value)}></input>
          <input type='datetime-local' value={datetime} onChange={ev => setDatetime(ev.target.value)}></input>
        </div>
        <div className='description'>
          <input type='text' placeholder='description' value={description} onChange={ev => setDescription(ev.target.value)}/>
        </div>
        <button type='submit'> Add new transaction</button>
      </form>

      <div className='transactions'>
        {transactions.length>0 && transactions.map(transaction => (
          <div className='transaction'>
             <div className='left'>
               <div className='name'>{transaction.name}</div>
               <div className='description'>{transaction.description}</div>
             </div>
             <div className='right'>
               <div className={getColor(transaction.price)}>{transaction.price}</div>
               <div className='datetime'>{transaction.datetime}</div>
             </div>
          </div>
        ))}
        

      </div>
    </main>
  );
}

export default App;
