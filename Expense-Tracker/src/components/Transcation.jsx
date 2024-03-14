
import React,{useState} from "react";

const Transcation=()=>{
    const [text,setText] = useState('');

const handleChange =(event) =>{
    setText(event.target.value);
} ;

return(
    <div>
        {}
        <input
        type ="text"
        value ={text}
        onChange={handleChange}
        />
        {}
    </div>
);
};
export default Transcation;