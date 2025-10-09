import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { productList } from "../data/data";



function ProductView() {

    //used to read the route parameter
    const {id} = useParams();

    const loc = useLocation();
    const queryParam = new URLSearchParams(loc.search);
    const city = queryParam.get('city');
    const country = queryParam.get('country');

    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    useEffect(()=> {
        //get the data from webapi
        const productObj = productList.filter(d=>d.productId == id);
        console.log(productObj);
        setProduct(...productObj);
    }, [id]);

    return (<>
    <h4>Product Details:</h4>
    <p>Product Id: {product.productId}</p>
    <p>Product Code: {product.productCode}</p>
    <p>Product Name: {product.productName}</p>
    <p>Product Price: {product.price}</p>

    <button className="btn btn-dark" onClick={()=>navigate(-1)}>Back</button>
    
    <hr/>
    <p>Route Parameter : {id}</p>

    <p>Query String Parameter : 
        {city && (<strong>{city}</strong>)}
        <br/>
        {country && (<strong>{country}</strong>)}
    </p>
    </>);
}

export default ProductView;