import { gql} from "@apollo/client";


interface LoginMutationProps
{
  AuthLogin : LoginVariableProps
}

interface LoginVariableProps
{
  email : string;
  password : string
}


export const LOGIN_MUTATION  = gql`
  mutation AuthLogin($email: String, $password: String){
    AuthLogin(email:$email, password:$password){
      token,
      errors {
        email,
        password,
        global
      },
      user {
        email,
        age,

      }
    }
  }
`;
