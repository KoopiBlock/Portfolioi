export default {
    name: 'mainPage',
    type: 'document',
	title: 'Main Page',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
        name: 'subTitle',
        type: 'string',
        title: 'Sub Title'
    },
    {
        name: 'heroPargraph',
        type: 'string',
        title: 'Hero Pargraph'
    },
    {
        name: 'aboutMePargraph',
        type: 'text',
        title: 'About Me Pargraph' 
    },
    {
        title: 'Bullet Points',
        name: 'bulletPoints',
        type: 'array',
        of: [{type: 'string'}]
    },
    {
        title: 'Tech Stack Cards',
        name: 'techStackCards',
        type: 'array',
        of: [{
            name: 'techCard',
            type: 'document',
            title: 'Tech Card',
            fields: [
                {
                    name: 'name',
                    type: 'string',
                    title: 'Name' 
                },
                {
                    title: 'Image',
                    name: 'image',
                    type: 'image',
                    options: {
                      hotspot: true 
                    },
                },
            ]
        }]
    },
  ]
}