export default {
    name: 'resume',
    type: 'document',
	title: 'Resume ',
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
}