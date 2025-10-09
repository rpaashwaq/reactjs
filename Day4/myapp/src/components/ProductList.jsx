import { productList } from "../data/data";

function ProductList() {

    const products = productList;

    return (<>
        <table style={{border: "1px solid black"}}>
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Code</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((prod, index) => (
                    <tr key={prod.productId}>
                        <td>{prod.productId}</td>
                        <td>{prod.productCode}</td>
                        <td>{prod.productName}</td>
                        <td>{prod.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </>);

}

export default ProductList;