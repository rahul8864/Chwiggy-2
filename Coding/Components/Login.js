import React, { useEffect } from "react";
import { Formik } from "formik";  
import * as Yup from "yup"; 
import { useNavigate } from "react-router-dom";

 
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token?.length === 100) {
      navigate(-1);
    }
  }, []);

  function handleNavigate(values) {
    
    setTimeout(() => {
      
      const genRandomStringNthChar = () => {
        return [...Array(100)]
          .map(() => Math.random().toString(36)[2])
          .join("");
      };
      // store token in local storage
      localStorage.setItem("token", genRandomStringNthChar());
      navigate(-1);
    }, 0);
  }

  if(token?.length === 100) return null;

  return (
    <>
      
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          
          handleNavigate(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login-container">
            <div className="login-form">
              
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
                
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter your email"
                  className="form-control inp_text"
                  id="email"
                />
                
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter your password"
                  className="form-control"
                />
                
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
