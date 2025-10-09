import { useNavigate } from "react-router-dom";


export default function ProductDetail({product, cat}) {

    const navigate = useNavigate();
    const redirectToProductView = (id) => {
        navigate(`/product-view/${id}`);
    }

    return (<>
        <tr key={product.productId}>
            <td>{product.productId}</td>
            <td>{product.productCode}</td>
            <td>{product.productName}</td>
            <td>{product.price}</td>
            <td>
                <input type="button" className="btn btn-info" value="View"
                 onClick={(e)=>redirectToProductView(product.productId)}/>
            </td>
        </tr>
    </>);
}

