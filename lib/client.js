import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'aqd10rb6',
    dataset: 'production',
    useCdn: true,  
    apiVersion: '2023-05-15', 
    token: process.env.SANITY_SECRET_TOKEN
});

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)



