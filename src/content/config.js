//zod and astro collection
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const WorkCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    jobdescription: z.string(),
    date: z.number().positive() ,
    company: z.string(),
  }),
});

const ProjectsCollection = defineCollection({
    type: 'content',schema: z.object({
        title: z.string(),
        projectdescription: z.string(),
        link: z.string(),
        image: z.string().optional(),
    }),
        
});


// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'Work': WorkCollection,'Projects': ProjectsCollection,
};