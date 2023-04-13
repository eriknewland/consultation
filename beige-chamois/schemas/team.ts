// schemas/portfolioPiece.js
export default {
  name: 'team',
  type: 'document',
  title: 'Our Team',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Summary',
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
  ],
};