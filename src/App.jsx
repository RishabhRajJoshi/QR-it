import axios from 'axios';
import React, { useState } from 'react'
import Footer from './Footer';
import Header from './Header';
import linkedinQR from './image/linkedinQR.jpg'
function App() {

  const [text, setText] = useState('');
  const [qr , setQr] = useState(linkedinQR)

  async function getQr(){
  
    const res = await axios({
      method: 'get',
      url: 'https://api.api-ninjas.com/v1/qrcode?data=' + text + '&format=jpg',
      headers: { 'X-Api-Key': process.env.REACT_APP_API }
    })
    // console.log(res.data)
    setQr("data:image/jpg;base64," + res.data)
    
  }

  


  function handleClick(ev) {
    ev.preventDefault();
    // console.log(text);
    getQr();
   
    
    setText('');
  }

 








  return (
     <div>
     <Header/>
    <div className='flex justify-center '>

    <form className='flex flex-col  '>
   <textarea  className=' m-10 p-2 rounded-lg shadow-xl text-center' placeholder='enter text you want to convert' cols="30" rows="7" value={text} onChange={ev =>{setText(ev.target.value)}}></textarea>
   <button className= 'p-2 bg-gray-700 w-1/2 mx-auto rounded-lg shadow-xl  text-white ' onClick={handleClick}>Generate</button>
 <div className=' bg-white m-10 w-48 h-48 mx-auto shadow-xl  rounded-2xl'>

    <img className='mt-2 mx-auto h-44 w-44  ' src={qr} alt="qr-code" />
 </div>
    
    </form>


   </div>
    <Footer/> 
    </div>
  )
}

export default App
