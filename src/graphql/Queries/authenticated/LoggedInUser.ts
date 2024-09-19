import { gql } from "@apollo/client";
import { User } from "../../../type/Model/User.model";

export interface LoggedInUserProps {
  loggeinUser: User | null;
}

export const LOGGEDIN_USER_QUERY = gql`
  query loggeinUser {
    loggeinUser {
      id
      email
      name
      age
      created_at
      updated_at
      gender
    }
  }
`;
