import React, { FC } from "react";

export interface LabelFieldProps
  extends React.InputHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}
const LabelField: FC<LabelFieldProps> = ({ children, ...props }) => {
  return (
    <label className="form-label" {...props}>
      {children}
    </label>
  );
};

export default LabelField;
