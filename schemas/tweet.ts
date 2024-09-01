import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tweet',
  title: 'tweet',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'text in tweet',
      type: 'string',
    }),
    defineField({
      name: 'Blocktweet',
      title: 'Block tweet ',
      description:'admin panel description',
      type: 'boolean',
      
    }),
    defineField({
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    }),
    defineField({
      name: 'username',
      title: 'username',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'tweet image',
      type: 'string',
    }),
  ],
})
