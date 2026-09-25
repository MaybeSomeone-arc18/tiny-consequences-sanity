import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name:'tiny-consequences',title:'The Department of Tiny Consequences',
  projectId:'7i4i5k0j',dataset:'production',
  plugins:[structureTool()],schema:{types:schemaTypes}
})
