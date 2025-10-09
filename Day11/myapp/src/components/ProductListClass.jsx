import React from "react";
import { productList } from "../data/data";
import ProductDetail from "./ProductDetail";

export const PI = 3.14;

class ProductListClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredProducts: []
        };
    }

    //useEffect(()=> {} ,[selectedCategory])
    componentDidUpdate(prevProps) {
        console.log('componentDidUpdate triggered');
        const { selectedCat, myname, onNotify } = this.props;
        if (prevProps.selectedCat !== selectedCat) {
            const filtered = selectedCat ? productList.filter(f => f.category == selectedCat) : products;
            this.setState({
                filteredProducts: filtered
            });

            onNotify(filtered.length);
        }

       
    }

    //useEffect(()=> {} ,[])
    componentDidMount() {
        console.log('componentDidMount triggered');
    }

    //
    componentWillUnmount() {
        console.log('componentWillUnmount triggered');
    }

    render(){

        const { filteredProducts } = this.state;
        const { selectedCat } = this.props;
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
                        {filteredProducts.map((prod, index) => (
                           <ProductDetail product={prod} key={prod.productId} cat={selectedCat} />
                        ))}
                    </tbody>
                </table>
        
            </>);
    }

}

export default ProductListClass;