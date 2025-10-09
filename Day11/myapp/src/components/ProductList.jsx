import { useContext, useEffect, useState } from "react";
import { productList } from "../data/data";
import ProductDetail from "./ProductDetail";
import { UserContext } from "../context/UserProvider";

function ProductList({selectedCat, myname, onNotify}) {

    const products = productList;
    const [filtedProducts, setFilteredProducts] = useState([]);

    const selectedCategory = selectedCat;

    useEffect(()=>{
        console.log('useEffect triggered', myname);
        const filtered = selectedCategory ? products.filter(f=>f.category == selectedCategory) : products;
        setFilteredProducts(filtered);
        onNotify(filtered.length);

        

    },[selectedCategory]);

    return (<>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Code</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>View</th>
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