export default {
    name: 'project',
    type: 'document',
	title: 'Projects ',
  fields: [
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
            hotspot: true 
            },
        },
        {
        name: 'name',
        type: 'string',
        title: 'Name'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
                maxLength: 200, 
                slugify: input => input
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')
                                    .slice(0, 200)
            }
        },
        {
            title: 'Release date',
            name: 'releaseDate',
            type: 'date'
        },
        {
            name: 'techStack',
            title: 'Tech Stack',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                layout: 'tags'
              }
        },
        {
            title: 'Rich text example',
            name: 'myRichTextExample',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            title: 'Github URL',
            name: 'githubUrl',
            type: 'url'
        },
        {
            title: 'Web URL',
            name: 'webUrl',
            type: 'url'
        },
        {
            title: 'Image Banner',
            name: 'imageBanner',
            type: 'image',
            options: {
            hotspot: true 
            },
        },
    ]
}