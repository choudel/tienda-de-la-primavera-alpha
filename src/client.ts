import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
    url: 'http://localhost:3000/graphql',
     fetchParams({ session }) { 
        console.log(session.jwt)
        return { 
             headers: {
                Authorization: `Bearer ${session?.jwt}`,
             }
         }
     }
})
