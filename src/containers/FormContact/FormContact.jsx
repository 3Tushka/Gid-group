/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import './_formContact.scss'

import ContainerTitle from '../../components/ContainerTitle/ContainerTitle';

import { Formik, Form, useField } from 'formik'
import * as Yup from "yup";

const initialValues = {
    name: "",
    email: "",
    square: "",
    feedback: "",
    acceptedTerms: false,
}

const validationFormShema = Yup.object().shape({
    name: Yup.string().required("Обов'язково"),
    email: Yup.string().email('Не правильний Email. Потрібен @').required('Ввеідь ваш Email'),
    square: Yup.number().required("Обов'язково"),
    feedback: Yup.string().min(15, "Мінімум 15 символів").max(300, "Максимум 300 символів"),
    acceptedTerms: Yup.boolean().required("Обов'язково").oneOf([true], "You must accept the terms and conditions")
})


const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <div className="formContact__input">
                <label htmlFor={props.id || props.name} className='text-label'>{label}</label>
                <input className='text-input' {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </div>
        </>
    )
}

const MyTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div className="formContact__area">
                <label htmlFor={props.id || props.name} className='text-label'>{label}</label>
                <textarea className="text-area" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </div>
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
        <>
            <div className="formContact__checkbox">
                <label className="label-checkbox">
                    <input {...field} {...props} type="checkbox" className='input-checkbox' />
                    {children}
                </label>
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </div>
        </>
    );
};

const FormContact = () => {
    return (
        <>
            <ContainerTitle title="На зв'язку!" />
            <div className="form-wrapper">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationFormShema}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >

                    <Form className='formContact'>
                        <div className="formContact__column">
                            <MyTextInput label="Ім'я" name="name" type="text" placeholder="Вкажіть ваше ім'я" />
                            <MyTextInput label="E-mail" name="email" type="email" placeholder="Вкажіть ваш e-mail" />
                            <MyTextInput label="Площа" name="square" min="1" type="number" placeholder="Введіть вашу площу квартири"
                                // only positive number
                                onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                            />
                        </div>
                        <div className="formContact__column">
                            <MyTextArea label="Коментарі" name="feedback" rows="11" placeholder="Введіть ваш коментар" />
                            <MyCheckbox name="acceptedTerms">
                                I accept the terms and conditions
                            </MyCheckbox>
                            <div className="formContact__button-container">
                                <button type="submit" className='formContact__button-container__button'>Надіслати</button>
                            </div>
                        </div>
                    </Form>

                </Formik>
            </div>
        </>
    )
}

export default FormContact