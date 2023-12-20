import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { postCategorie } from '../../../api/Cathegories/Cath';
const AddCath = () => {
    const navigate=useNavigate()
    const [name, setName] = useState("");
    
    
    const handleSubmit=async (value)=>{
        await postCategorie(value)
        await alert('a7sant')
        navigate('/admin')
    }
  return (
    <div>
      <form action="" className="form-add">
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
        </form>
        <section className="ButtonsContainer">
  <button onClick={()=>handleSubmit({name})} >
                ziiiid hbibi
              </button>
              </section>
    </div>
  )
}

export default AddCath
