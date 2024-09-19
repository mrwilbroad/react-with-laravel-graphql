import React from "react";
import { Card } from "react-bootstrap";
import { Form, Formik } from "formik";
import LabelField from "../../component/Form/LabelField";
import TextField from "../../component/Form/TextField";
import { useMutation, useQuery } from "@apollo/client";
import {
  LOGGEDIN_USER_QUERY,
  LoggedInUserProps,
} from "../../graphql/Queries/authenticated/LoggedInUser";
import AppLoader from "../../component/loading/AppLoader";
import {
  UPDATE_USER_PROFILE,
  UpdateUserProfileProps,
} from "../../graphql/Mutations/Profile/UpdateUser";

const ProfilePage = () => {
  const { data, loading , refetch} = useQuery<LoggedInUserProps>(LOGGEDIN_USER_QUERY, {
    fetchPolicy: "cache-first",
  });

  const [
    updateUserProfile,
    { data: UserData, error: UpdateError, loading: UpdateLoading },
  ] = useMutation<UpdateUserProfileProps>(UPDATE_USER_PROFILE);

  const initialSData = {
    id: data?.loggeinUser?.id ?? "",
    name: data?.loggeinUser?.name ?? "",
    gender: data?.loggeinUser?.gender ?? "",
    age: data?.loggeinUser?.age ?? 0,
    email: data?.loggeinUser?.email ?? "",
  };

  return loading ? (
    <AppLoader />
  ) : (
    <div>
      <Card>
        <Card.Header className="text-uppercase fw-bold">
          Update Profile
        </Card.Header>
        <Card.Body>
          <Formik
            initialValues={initialSData}
            onSubmit={async (
              values,
              { setSubmitting, resetForm, setFieldError }
            ) => {
              try {
                console.log(UpdateError);
                console.log("user id ", values);
                const { age , name , email , gender} = values;
                updateUserProfile({
                  variables: {
                    id: data?.loggeinUser?.id,
                    user: {
                         
                         name: name,
                         gender: gender,
                         age: age,
                    },
                  },
                })
                  .then((res) => {
                    refetch()
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } catch (error) {}
            }}
          >
            {(formik) => {
              return (
                <Form className="vstack gap-2">
                  <section className="vstack gap-2">
                    <LabelField>Fullname</LabelField>
                    <TextField name="name" placeholder="fullname" />
                  </section>

                  <section className="vstack gap-2">
                    <LabelField>Gender</LabelField>
                    <TextField name="gender" placeholder="gender" />
                  </section>

                  <section className="vstack gap-2">
                    <LabelField>Email</LabelField>
                    <TextField name="email" placeholder="Email address" />
                  </section>

                  <section className="vstack gap-2">
                    <LabelField>Age</LabelField>
                    <TextField type="number" name="age" placeholder="age e.g 28" />
                  </section>

                  <section className="mx-auto">
                    <button
                      disabled={UpdateLoading}
                      type="submit"
                      className="btn btn-outline-success "
                    >
                      {UpdateLoading ? "please wait ..." : "update information"}
                    </button>
                  </section>
                </Form>
              );
            }}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfilePage;
