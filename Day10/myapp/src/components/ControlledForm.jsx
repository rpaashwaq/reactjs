import { useState } from "react";
import { categoryList } from "../data/data";
import { validateProductForm } from "../utilities/product-validation";

function ControlledForm() {

    const product = {
        productId: 0,
        productCode: "",
        productName: "",
        price: "",
        category: ""
    }

    const [productFormData, setProductFormData] = useState(product);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setProductFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

        setErrors(validateProductForm(e.target.name, e.target.value));
    }

    const handleSaveProduct = (e) => {
        e.preventDefault();

        //check if not errors are captured
        if (Object.keys(errors).length <= 0) {
            alert('Product saved successfully' + JSON.stringify(productFormData));
            console.log(productFormData);
        }
    }

    return (<>
        <h4>Add Product (Controlled)</h4>
        {errors
            && errors.hasOwnProperty('title')
            && (<div className="alert alert-danger">{errors.title}</div>)}
        <div className="row">
            <div className="col-lg-6">
                <form onSubmit={(e) => handleSaveProduct(e)}>
                    <div className="form-group">
                        <label>Product Id</label>
                        <input type="text" name="productId" className="form-control" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <label>Product Code</label>
                        <input type="text" name="productCode" className="form-control" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" name="productName" className="form-control" onChange={(e) => handleChange(e)} />

                    </div>
                    <div className="form-group">
                        <label>Product Price</label>
                        <input type="text" name="price" className="form-control" onChange={(e) => handleChange(e)} />
                        {/* {errors
                            && errors.control == "price"
                            && errors.hasOwnProperty('title')
                            && (<span className="text-danger">{errors.title}</span>)} */}
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select className="form-select" name="category" onChange={(e) => handleChange(e)} >
                            <option value="">--Select--</option>
                            {categoryList.map((cat, indx) => (
                                <option value={cat.id} key={cat.id}>{cat.categoryName}</option>
                            ))}
                        </select>
                    </div>
                    <input type="submit" value="Save Product" className="btn btn-primary" />
                </form>
            </div>
        </div>

    </>)
}

export default ControlledForm;