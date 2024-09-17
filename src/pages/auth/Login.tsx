import React from "react";
import Guest from "../../Layout/Guest";
import { Card } from "react-bootstrap";
import { Form, Formik } from "formik";
import TextField from "../../component/Form/TextField";
import LabelField from "../../component/Form/LabelField";
import { Link } from "react-router-dom";
import { LOGIN_MUTATION } from "./../../graphql/Mutations/Auth/Login";
import { useQuery, gql, NetworkStatus, useMutation } from "@apollo/client";
import AppLoader from "./../../component/loading/AppLoader";
import { useAuth } from "./../../context/Auth";
import { User } from "../../type/Model/User.model";

export interface LoginResponse {
  AuthLogin: {
    token: string;
    errors: {
      email: string[];
      password: string[];
      global: string[];
    };
    user: User;
  };
}

const Login = () => {
  const [AuthLogin, { data, error, loading }] =
    useMutation<LoginResponse>(LOGIN_MUTATION);

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
            onSubmit={async (
              values,
              { setSubmitting, resetForm, setFieldError }
            ) => {
              try {
                AuthLogin({
                  variables: {
                    email: values.email ?? "",
                    password: values.password ?? "",
                  },
                }).then((res) => {
                     const errors = res.data?.AuthLogin.errors;
                      if(errors?.email) 
                        setFieldError("email", errors.email[0])

                      if(errors?.password) 
                        setFieldError("password", errors.password[0])

                      if(errors?.global) 
                        setFieldError("global", errors.global[0])

                      
                });
              } catch (error) {
                console.log(error)
                setFieldError("email", "something went wrong , try again");
              }
            }}
          >
            {(formik) => {
              return (
                <Form className="vstack gap-2 mx-auto">
                  <section>
                    <LabelField>{"Email Address"}</LabelField>
                    <TextField autoComplete="username" name="email" />
                  </section>

                  <section>
                    <LabelField>{"Password"}</LabelField>
                    <TextField
                      autoComplete="current_password"
                      type="password"
                      name="password"
                    />
                  </section>

                  <section>
                    <button
                      disabled={loading}
                      type="submit"
                      className="btn btn-outline-success"
                    >
                      {loading ? "please wait ..." : "Login Now"}
                    </button>
                  </section>
                </Form>
              );
            }}
          </Formik>
        </Card.Body>

        <Card.Footer>
          <Link to={"/auth/register"}>Not Yet Registered ? click here</Link>
        </Card.Footer>
      </Card>
    </Guest>
  );
};

export default Login;
