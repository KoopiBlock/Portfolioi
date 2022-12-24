import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'wp8twqhs',
    dataset: 'production',
    token: 'sk8Rxx1GLCPlu1X8yp78Wi4xcqeyvlVBz4gjeYth2RGwbjkfAPE9Ye8ZP1x92DsiCOt7GvHFdRhEA27W0L7vijCpaytuwbdXKEz9LTR9QLodUEZDqN3CBsMWG9xnWgph9kT6TUGSJfPWmUPxvARNNtN9w9DIP9bpyJyaslfIGlWXPXX55KoS',
    useCdn: false,
    apiVersion: "2022-02-03"
})

const builder = imageUrlBuilder(client)

export  function urlFor(source) {
    return builder.image(source)
  }