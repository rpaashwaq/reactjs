import { useRef } from "react";


function UnControlledForm(){

    const productIdRef = useRef(0);
    const productNameRef = useRef();
    const productCodeRef = useRef();
    const productPriceRef = useRef();

    const handleSaveProduct = (e) => {
         e.preventDefault();
         let newProduct = {
            id: productIdRef.current.value,
            productCode: productCodeRef.current.value,
            productName: productNameRef.current.value,
            price: productPriceRef.current.value,
         }
         alert('Product Saved successfully' + JSON.stringify(newProduct));
    }

    return (<>
    <h4>Add Product (UnControlled)</h4>
    <div className="row">
        <div className="col-lg-6">
            <form onSubmit={(e) => handleSaveProduct(e)}>
                <div className="form-group">
                    <label>Product Id</label>
                    <input type="text" name="id" className="form-control" ref={productIdRef}/>
                </div>
                <div className="form-group">
                    <label>Product Code</label>
                    <input type="text" name="productCode" className="form-control" ref={productCodeRef}/>
                </div>
                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" name="productName" className="form-control" ref={productNameRef}/>
                </div>
                <div className="form-group">
                    <label>Product Price</label>
                    <input type="text" name="price" className="form-control" ref={productPriceRef}/>
                </div>
                <input type="submit" value="Save Product" className="btn btn-primary"/>
            </form>
        </div>
    </div>

    </>)
}

export default UnControlledForm;