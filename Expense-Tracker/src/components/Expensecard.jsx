import React from 'react'

const Expensecard = (props) => {
    //destructuring
    
    const{title,amount,deleteItem,id,setEditId}=props;//when you use the first method of looping in App.jsx,use props.details
    const cardclass=amount>0?"positive":"negative";
    const handleDelete=()=>{
      deleteItem(id);
    };
    const handleEdit=()=>{
      setEditId(id);
       
    };
  return (
    <>
    <div className='container'>
      <div className={`expense-card ${cardclass}`}>
      <div><h4>{title}</h4></div>
         <div><p>{amount}</p></div>
         <button onClick={handleDelete}>Delete</button>
         <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
    </>
  )
}

export default Expensecard;
 