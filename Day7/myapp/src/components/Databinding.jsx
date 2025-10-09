import { useEffect, useRef, useState } from "react";

function Databinding() {
    const name = "pradeep";
    const [fullName, setFullName] = useState('pradeep shet1'); //hook
    const addressRef = useRef();

    const handleClick = (e,str) => {
        e.target.value = "Clicked Me";
        e.target.style.backgroundColor = 'yellow';
        alert('Message=' + str);

        setTimeout(() => {
            e.target.value = "Click Me";
        }, 1000);

        addressRef.current.value="Mumbai";
        addressRef.current.style.backgroundColor = "red";
    }

    const handleTextChange = (e) => {
        setFullName(e.target.value);
    }

  
    return (
        <>
            <h5>This is my component</h5>
            <p>Name = {name}</p>

            <input type="text" value={fullName} onChange={(e) => handleTextChange(e)} />
            <p>Full Name = {fullName}</p>
            <i>Full Name = {fullName}</i>
            
            <br/>

            <input type="button" value="Click Me" onClick={(e) => handleClick(e, 'Hello')} />

            <br/>
            Enter Address: <input type="text" ref={addressRef} />
        </>
    )
}

export default Databinding;