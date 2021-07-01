export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ddbf511eedc00253b29311',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4jbpei75',
                  apiId: 'bf5f2a87-3b8f-41b0-8619-87b33cac0834'
                },
                {
                  buildHookId: '60ddbf517a66dbff270c40e7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-oqwqtxn5',
                  apiId: '5f567d19-dbe5-438b-bdff-0d90b3572d7b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/smyler86/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-oqwqtxn5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
