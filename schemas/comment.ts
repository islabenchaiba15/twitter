import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'comment',
  type: 'document',
  fields: [
    defineField({
      name: 'comment',
      title: 'comment',
      type: 'string',
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
      name: 'tweet',
      title: 'tweet',
      description:'refernece comment to tweet associated with',
      type: 'reference',
      to: { type: 'tweet' },
    }),
      
  ],
})
