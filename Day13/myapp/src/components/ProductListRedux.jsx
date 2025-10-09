
import { useEffect } from "react";
import ProductDetail from "./ProductDetail";
import { useSelector } from "react-redux";
import store from "../store/store";
import { ProductAction } from "../actions/product.actions";

function ProductListRedux({selectedCat,  onNotify}) {

    const filtedProducts = useSelector(state=> state.productReducer.filteredProducts);
       

    useEffect(()=> {
        onNotify(filtedProducts.length);
        store.dispatch(ProductAction.SetFilteredCount(filtedProducts.length));

    }, [filtedProducts]);



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
                   <ProductDetail product={prod} key={prod.productId} />
                ))}
            </tbody>
        </table>

    </>);

}

export default ProductListRedux;