import React from 'react'
import './_formCatalog.scss'

import formImage from '../../assets/images/form-image.avif';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const emailShema = Yup.object().shape({
    email: Yup.string().email('Не правильний Email. Потрібен @').required('Ввеідь ваш Email')
})

const initialValues = {
    email: "",
};

const FormCatalog = () => {
    return (
        <>
            <div className="formCatalog">
                <div className="formCatalog__wrapper">
                    <div className="formCatalog__container">
                        <div className="formCatalog__imageContainer">
                            <div className="fomrCatalog__image">
                                <img src={formImage} alt="form-image" />
                            </div>
                        </div>
                    </div>
                    <div className="formCatalog__container">
                        <div className="formCatalog__container__content">
                            <div className="formCatalog__title">
                                <h3>
                                    Залиште ваш e-mail, щоб отримати каталог наших проектів.
                                </h3>
                            </div>
                            <div className="formCatalog__text">
                                <span>Каталог допоможе вам обрати стиль та продумати планування квартири</span>
                            </div>
                        </div>

                        <div className="formCatalog__container__form">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={emailShema}
                                onSubmit={(values, { resetForm }) => {
                                    console.log(values);
                                    resetForm({ values: '' });
                                }}
                            >
                                {(formik) => {
                                    const { errors, touched, isValid, dirty } = formik;
                                    return (
                                        <div className="container">
                                            <Form>
                                                <div className="form-row">
                                                    <Field
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        placeholder="Введіть ваш Email"
                                                        className={
                                                            errors.email && touched.email ? "input-error" : null
                                                        }
                                                    />
                                                    <ErrorMessage name="email" component="span" className="error" />
                                                </div>
                                                <button
                                                    type="submit"
                                                    className={!(dirty && isValid) ? "disabled-btn" : ""}
                                                    disabled={!(dirty && isValid)}
                                                >
                                                    Отримайте наш каталог
                                                </button>
                                            </Form>
                                        </div>
                                    );
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormCatalog