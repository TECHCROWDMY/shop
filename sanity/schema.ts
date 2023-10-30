import { type SchemaTypeDefinition } from 'sanity'
import { product } from './schemas/product-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
