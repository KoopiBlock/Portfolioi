import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'wp8twqhs',
    dataset: 'production',
    token: process.env.SANITY_TOKEN,
    useCdn: false,
    apiVersion: "2022-02-03"
})

const builder = imageUrlBuilder(client)

export  function urlFor(source) {
    return builder.image(source)
  }