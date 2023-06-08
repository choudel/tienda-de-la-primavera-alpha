import { setSession } from '$houdini'
import { graphql } from '$houdini'
 let email="chou@gmail.com" ;
 let password= "secret"; 
const authQuery = graphql`
  mutation MyMutation($email: String!, $password: String!) {
  authenticate(input: {email: $email, password: $password}) {
    jwt
  }
}
`
console.log(authQuery.data)
/* @type { import('@sveltejs/kit').Handle } */
export const handle = async ({ event, resolve }) => {
    // get the user information however you want
    const user = await authQuery.data

    // set the session information for this event
    setSession(event, { user })

    // pass the event onto the default handle
    return await resolve(event)
}