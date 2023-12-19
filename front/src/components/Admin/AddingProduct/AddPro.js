/* import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postProduct } from '../../../api/Cathegories/Cath';
import './AddPro.css';
const AddPro = () => {
    const navigate=useNavigate()
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [postUrl, setPostUrl] = useState(""); 
    const [rating, setRating] = useState(""); 

    const handleSubmit=async (value)=>{
        await postProduct(value)
        await alert('a7sant')
        navigate('/admin')
    }
  return (
    <div>
     
  <div className="container">
    <div className="cta-form">
      <h2>add whatever u want</h2>
      <p>
        Check out the comments for line by line explanations. Form-related code
        starts on line 145.
      </p>
    </div>
    <form action="" className="form">
      <input type="text"  placeholder="Name" className="form__input" id="name" />
      <label htmlFor="name" className="form__label">
        Name
      </label>
      <input
       className="input"
       type="text"
       onChange={(e) => setName(e.target.value)}
       value={name}
      />
      <label htmlFor="email" className="form__label">
        price
      </label>
      <input
        className="input"
        type="text"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <label htmlFor="email" className="form__label">
        postUrl
      </label>
      <input
        className="input"
        type="text"
        onChange={(e) => setPostUrl(e.target.value)}
        value={postUrl}
      />
      <label htmlFor="subject" className="form__label">
        rating
      </label>
      <input
                className="input"
                type="text"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              />
    </form>
  </div>
  <div className="explanation"></div>
  <section className="ButtonsContainer">
  <button onClick={()=>handleSubmit({name,price,postUrl,rating})} className="SigninButton">
                ziiiid hbibi
              </button>
</section>
    </div>
  )
}

export default AddPro
 */