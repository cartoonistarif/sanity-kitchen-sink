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
                  buildHookId: '63134cc7b38a95117322c755',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1nq4px2x',
                  apiId: 'af7618c2-0bb8-4a60-9504-313c7f44cf9b'
                },
                {
                  buildHookId: '63134cc748c9b810b509c628',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-24gba3db',
                  apiId: '1e71c90c-ba30-4ac6-8285-64a471fb109b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cartoonistarif/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-24gba3db.netlify.app', category: 'apps'}
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
