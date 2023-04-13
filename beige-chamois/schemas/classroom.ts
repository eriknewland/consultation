export default {
  name: 'classroom',
  type: 'document',
  title: 'Classroom',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'projectTime',
      type: 'number',
      title: 'Project Time',
    },
  ]
}