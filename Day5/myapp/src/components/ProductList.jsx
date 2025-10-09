import { useEffect, useState } from "react";
import { productList } from "../data/data";
import ProductDetail from "./ProductDetail";

function ProductList({selectedCat, myname}) {

    const products = productList;
    const [filtedProducts, setFilteredProducts] = useState([]);

    const selectedCategory = selectedCat;

    useEffect(()=>{
        console.log('useEffect triggered', myname);
        setFilteredProducts(
            selectedCategory ? products.filter(f=>f.category == selectedCategory) : products
        );

    },[selectedCategory]);

    return (<>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Code</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                </tr>
            </thead>
            <tbody>
                {filtedProducts.map((prod, index) => (
                   <ProductDetail product={prod} key={prod.productId} cat={selectedCategory} />
                ))}
            </tbody>
        </table>

    </>);

}

export default ProductList;