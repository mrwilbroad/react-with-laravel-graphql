import { gql } from "@apollo/client";
import { User } from "../../../type/Model/User.model";

export interface UpdateUserProfileProps {
  updateUserProfile: User;
}

export const UPDATE_USER_PROFILE = gql`
     mutation UpdateUserProfile($id: ID!,
     $user: UserInput
     ){
        UpdateUserProfile(id:$id, user:$user){
          id,
          name,
          email,
          gender,
          age,
          created_at,
          updated_at
        }
 
     }
`;
