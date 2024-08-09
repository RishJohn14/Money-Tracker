import './App.css';

function App() {
  return (
    <main>
      <h1> $400 <span>.00</span></h1>
      <form>
        <div className='basic'>
          <input type='text' placeholder='$200 New TV'></input>
          <input type='datetime-local'></input>
        </div>
        <div className='description'>
          <input type='text' placeholder='description'/>
        </div>
        <button type='submit'> Add new transaction</button>
      </form>

      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>Upgrade on old TV</div>
          </div>
          <div className='right'>
            <div className='pricered'>-$200</div>
            <div className='datetime'> 2024-08-09 16:21</div>
          </div>
        </div>

        <div className='transaction'>
          <div className='left'>
            <div className='name'>Freelance income</div>
            <div className='description'>Build a new website</div>
          </div>
          <div className='right'>
            <div className='pricegreen'>$400</div>
            <div className='datetime'> 2024-08-09 16:21</div>
          </div>
        </div>

        <div className='transaction'>
          <div className='left'>
            <div className='name'>New iPhone</div>
            <div className='description'>Upgrade on old phone</div>
          </div>
          <div className='right'>
            <div className='pricered'>-$350</div>
            <div className='datetime'> 2024-08-09 16:21</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
