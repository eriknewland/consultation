// schemas/portfolioPiece.js
export default {
  name: 'portfolioPiece',
  type: 'document',
  title: 'Portfolio Piece',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Body',
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