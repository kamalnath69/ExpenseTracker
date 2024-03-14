import { useEffect,useState } from "react";

const Expenseform = (props) =>{
    const {addItem,itemToEdit,editItem}=props;
    const [title, setTitle] = useState("");
    const [amount,setAmount] = useState(0);

     useEffect(()=>{
        setTitle(itemToEdit?.title || "");
        setAmount(itemToEdit?.amount || 0);
     },[itemToEdit])



    const isEdit = itemToEdit !== undefined;

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      isEdit ? editItem(title,amount): addItem(title,amount);
    };

    console.log(title);
    return(
        <>
        <div className="add-expense-container">
            <h3>{isEdit ?  "Edit" : "Add New"} Transaction</h3>
            <form>
                <div>
                    <label htmlFor="title">Title</label>
                    <input 
                    type="text" 
                    id="title"
                    value={title}
                    onChange={handleTitleChange}/>
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input 
                    type="text" 
                    id="amount"
                    value={amount}
                    onChange={handleAmountChange}/>
                </div>
                <button 
                type="submit"
                onClick={handleSubmit}>

                  {isEdit ? "save" : "add"}  
                </button>
            </form>
        </div>
        </>
    )
}

export default Expenseform;