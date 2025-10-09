

export default function ProductDetail({product, cat}) {

    return (<>
        <tr key={product.productId}>
            <td>{product.productId}</td>
            <td>{product.productCode}</td>
            <td>{product.productName}</td>
            <td>{product.price}</td>
        </tr>
    </>);
}

