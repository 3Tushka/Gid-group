import React from 'react';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import './_loginPop.scss';

const PhoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const initialValues = {
    name: "",
    phoneNumber: ""
};

const feedBackShema = Yup.object().shape({
    name: Yup.string().required('Введіть ім`я'),

    phoneNumber: Yup.string().matches(PhoneRegExp, 'Phone number is not valid').required("Введіть номер")
});


const LoginPop = () => {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={feedBackShema}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    resetForm({ values: '' });
                }}
            >
                {(formik) => {
                    const { errors, touched, isValid, dirty } = formik;
                    return (
                        <div className="form">
                            <h1 className='form__h1'>Зворотній зв`язок</h1>
                            <Form>
                                <div className="form__row">
                                    <Field
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Ім'я"
                                        className={
                                            errors.name && touched.name ? "input-error" : null
                                        }
                                    />
                                    <ErrorMessage name="name" component="span" className="error" />
                                </div>

                                <div className="form__row">
                                    <Field
                                        type="password"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        placeholder="Номер телефону"
                                        className={
                                            errors.phoneNumber && touched.phoneNumber ? "input-error" : null
                                        }
                                    />
                                    <ErrorMessage
                                        name="phoneNumber"
                                        component="span"
                                        className="error"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={!(dirty && isValid) ? "disabled-btn" : ""}
                                    disabled={!(dirty && isValid)}
                                >
                                    Зателефонуйте мені
                                </button>
                            </Form>
                        </div>
                    );
                }}
            </Formik>
        </>
    )
}

export default LoginPop