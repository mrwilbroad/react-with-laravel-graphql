import React from "react";
import Guest from "../../Layout/Guest";
import { Card } from "react-bootstrap";
import { Form, Formik } from "formik";
import TextField from "../../component/Form/TextField";
import LabelField from "../../component/Form/LabelField";
import { Link } from "react-router-dom";

const Login = () => {
    
  const InitialData = {
    email: "",
    password: "",
  };

  return (
    <Guest>
      <Card className="col-10 col-lg-4 mx-auto">
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Formik
            initialValues={InitialData}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                  
            }}
          >
            {(formik) => {
              return (
                <Form className="vstack gap-2 mx-auto">
                  <section>
                    <LabelField>{"Email Address"}</LabelField>
                      <TextField autoComplete="username" name="email"/>
                  </section>

                  <section>
                    <LabelField>{"Password"}</LabelField>
                      <TextField autoComplete="current_password" type="password" name="password"/>
                  </section>

                  <section>
                      <button type="submit" className="btn btn-outline-success">Login Now</button>
                  </section>
                </Form>
              );
            }}
          </Formik>
        </Card.Body>

        <Card.Footer>
                 <Link to={'/auth/register'}>Not Yet Registered ? click here</Link>
        </Card.Footer>
      </Card>
    </Guest>
  );
};

export default Login;
