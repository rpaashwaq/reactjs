import { useEffect, useState } from "react";
import ProductService from "../services/Product.service";
import ProductDetail from "./ProductDetail";

function Products() {

    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        ProductService.getAllProducts()
            .then(resp => {
                setProducts(resp);
            })

        return () => {
            console.log('Unmount Products Component');
        };
    }, []);

    const deleteProduct = (id) => {
        let confirmDelete = confirm('Do you wish to delete?');

        if (confirmDelete) {
            ProductService.deleteProduct(id)
                .then(resp => {
                    if (resp) {
                        setMessage('Product is deleted');
                        setProducts(
                            products.filter(d => d.productId !== id)
                        );

                        setTimeout(() => {
                            setMessage(null);
                        }, 1000);
                    }
                })
        }
    }

    return (<>
        <h4>Product List</h4>
        {message && (<div className="alert alert-info text-center">{message}</div>)}
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Code</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>View</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {products.map((prod, index) => (
                    <ProductDetail product={prod} key={prod.productId} onDelete={deleteProduct} />
                ))}
            </tbody>
        </table>

    </>);
}

export default Products;