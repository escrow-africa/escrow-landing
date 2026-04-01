import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schema'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id_here'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,

  title: 'Blog CMS Studio',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
