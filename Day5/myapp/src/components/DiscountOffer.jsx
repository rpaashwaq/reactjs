import { useEffect, useState } from "react";

function getRandomOffer() {
    return (1000 + Math.random() * 500).toFixed(2);
}

function DiscountOffer() {
    const [offerPrice, setOfferPrice] = useState(getRandomOffer());
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        setIsChecked(e.target.checked);
    }


    useEffect(() => {
        console.log('Called useEffect');
        if (isChecked) {
            setInterval(() => {
                setOfferPrice(getRandomOffer());
                //document.getElementById('price').innerHTML = 1000;
            }, 1000);
        }
        
    }, [isChecked]);

    return (<>

        <div className="offer" style={{ backgroundColor:"yellow", fontSize: "30px"}}>
            <input type="checkbox" checked={isChecked} onChange={(e) => handleChange(e)} /> Please Select
            <h5>Offer Price</h5>
            <p>Price: INR <b id="price">{offerPrice}</b></p>
        </div>

    </>)
}

export default DiscountOffer;