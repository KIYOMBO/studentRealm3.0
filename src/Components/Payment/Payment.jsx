import { useState } from 'react';

function Payment() {

  const [number, setNumber] = useState("");

  function handleInputChange(event) {
    setNumber(event.target.value);
  }
  
  var numberValue = Number(number);
  
  if(isNaN(numberValue)) {
    numberValue = 0; 
  }

  return (
    <div className='Search grid gp-10 bg-blue-100 rounded-[10px] p-[3rem] small-width'>
      <div>
        <h1><strong>Enter Payment Amount: </strong></h1>
        <br></br>

        <input className= 'border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-blue-300 group-hover/item:text-textColor group-hover:text-[#959595]'
          type="number"
          onChange={handleInputChange} 
        />

        <a href="https://pos.snapscan.io/qr/cput?id=Ord123&amount=1000">
          <img 
            src={`https://pos.snapscan.io/qr/cput.svg?id=Ord123&amount=${numberValue}&snap_code_size=125`}
          />
        </a>
      </div>
    </div>
  )
}

export default Payment;