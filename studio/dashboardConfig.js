export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d9f3a3a5c3d7c4c6c8ee87e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5xsru74o',
                  apiId: 'bc3eda4d-236f-495e-b1f9-ac07b5b245ba'
                },
                {
                  buildHookId: '5d9f3a3a3fd596fbe544fc99',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-17fhej3r',
                  apiId: 'f12837ae-00d9-4b81-80dd-ad65435c0084'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/martinseanhunt/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-17fhej3r.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
