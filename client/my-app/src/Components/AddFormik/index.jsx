import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.scss'
import axios from "axios";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ name: '', imageUrl: '', description: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(800, 'Must be 15 characters or less')
          .required('Required'),
        imageUrl: Yup.string()
          .max(80000, 'Must be 20 characters or less')
          .required('Required'),
      
      })}
      onSubmit={(values) => {
       axios.post("http://localhost:2710/users", values)
      }}
    >
        <section className='formiks'>
             <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />

        <label htmlFor="imageUrl">Image Url</label>
        <Field name="imageUrl" type="text" />
        <ErrorMessage name="imageUrl" />

        <label htmlFor="description">Description </label>
        <Field name="description" type="text" />
        <ErrorMessage name="description" />

        <button type="submit">Submit</button>
      </Form>
        </section>
     
    </Formik>
  );
};

export default SignupForm