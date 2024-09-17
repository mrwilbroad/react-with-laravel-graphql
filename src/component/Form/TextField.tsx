"use client";
import React, { forwardRef } from "react";
import { ErrorMessage, useField } from "formik";
import ErrorC from "../Error/ErrorC";
import classNames from "classnames";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const TextField = React.memo(
  forwardRef<HTMLInputElement, TextFieldProps>(({ name, ...rest }, ref) => {
    const [field] = useField(name);

    return (
      <section className="vstack gap-1">
        <input
          {...field}
          className={classNames("form-control", rest.className)}
          name={name}
          {...rest}
        />
        <section>
          <ErrorMessage name={name} component={ErrorC} />
        </section>
      </section>
    );
  })
);

export default TextField;
