import { useRef, useState } from "react";


type MyProps = {
    name: string
    city: string
}

const Databinding: React.FC<MyProps> = ({ name, city }) => {


    const [fullName, setFullName] = useState<string>('');
    const addressRef = useRef<HTMLInputElement>(null);

    const handleClick = (e: any, str: string) => {
        e.target.value = "Clicked Me";
        e.target.style.backgroundColor = 'yellow';
        alert('Message=' + str);

        setTimeout(() => {
            e.target.value = "Click Me";
        }, 1000);

        if (addressRef.current) {
            addressRef.current.value = "Mumbai";
            addressRef.current.style.backgroundColor = "red";
        }
    }

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);
    }

    return (
        <>
            <p>Name = {name}</p>

            <input type="text" value={fullName} onChange={(e) => handleTextChange(e)} />
            <p>Full Name = {fullName}</p>
            <i>Full Name = {fullName}</i>

            <br />

            <input type="button" value="Click Me" onClick={(e) => handleClick(e, 'Hello')} />

            <br />
            Enter Address: <input type="text" ref={addressRef} />

            <hr />

        </>
    )

}

export default Databinding;