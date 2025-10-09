
export const validateProductForm = (fieldName, fieldValue) => {
    let errors = {};
    let priceregex = /^\d+(\.\d{1,2})?$/;

    errors.control = fieldName;
    if (fieldName == "productName") {
        if (!fieldValue.length)
            errors.title = "Product Name is mandatory";
        else
            delete errors.title;
    }
    if (fieldName == "price") {
        if (!fieldValue.length)
            errors.title = "Price is mandatory";
        else if (!priceregex.test(fieldValue))
            errors.title = "Price should be a number";
        else delete errors.title;
    }

    return errors;
}