/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    "watchSchema": {
        "url": "http://localhost:3000/graphql"
    },
    "plugins": {
        "houdini-svelte": {}
    },
    "scalars": {
        "BigFloat": {
          "type": "number"
        }
    },
    
}

export default config
