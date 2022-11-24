export default {
    name: 'picturesGallery',
    title: 'Pictures Gallery Photo',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'section',
        title: 'Section',
        type: 'string'
      },
    ],
    preview: {
      select: {
        title: 'title',
        section: 'section',
        media: 'image',
      },
      prepare(selection) {
        const {section} = selection
        return Object.assign({}, selection, {
          subtitle: section && `${section}'s section`,
        })
      },
    },
  }
  