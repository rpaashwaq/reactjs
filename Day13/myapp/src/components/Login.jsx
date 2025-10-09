import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import * as Yup from 'yup';
import { UserContext } from "../context/UserProvider";

function Login() {

    const [message, setMessage] = useState("");
    const {loginClick} = useContext(UserContext);
    const initialLoginForm = {
        userName: "",
        password: ""
    }

    const loginValidationSchema = Yup.object({
        userName: Yup.string().required('User Name is required'),
        password: Yup.string().required('Password is required'),
    })

    const onLogin = (frm) => {
        if (frm.userName === "admin" && frm.password === "admin") {
            setMessage('Login successful');
            loginClick(frm.userName);
        }
        else {
            setMessage("User Name & Password in incorrect");
        }
    }

    return (<>

        <Formik initialValues={initialLoginForm}
            validationSchema={loginValidationSchema}
            onSubmit={(values) => onLogin(values)}>
            <Form>
                <div className="form-group">
                    <label>Enter User Name:</label>
                    <Field name="userName" type="text" className="form-control"></Field>
                    <ErrorMessage component="label" name="userName" className="text-danger"></ErrorMessage>
                </div>
                <div className="form-group">
                    <label>Enter Password:</label>
                    <Field name="password" type="password" className="form-control"></Field>
                    <ErrorMessage component="label" name="password" className="text-danger"></ErrorMessage>
                </div>
                <input type="submit" value="Login" className="btn btn-warning" />
            </Form>
        </Formik>
        {message && <div className="alert alert-success">{message}</div>}
    </>)
}

export default Login;