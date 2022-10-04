export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '633c7747ede8910099c1a4c0',
                  title: 'Sanity Studio',
                  name: 'tmtm-3-studio',
                  apiId: '4776128b-9495-4c2c-bd85-1534611cc127'
                },
                {
                  buildHookId: '633c7747ede8910099c1a4bf',
                  title: 'Blog Website',
                  name: 'tmtm-3',
                  apiId: '7fb40222-6632-4dbe-940b-79c506d0c922'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sportyfred/tmtm3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://tmtm-3.netlify.app', category: 'apps'}
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
