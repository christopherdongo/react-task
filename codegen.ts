import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [{
       'https://api.8base.com/cliqwr8ey000e08mi2uho8n5r' :{
        headers: {
          Authorization: 'Bearer a3e24963-c7a3-47c8-bc95-f2058ab2ce2f'   
       },

      },
  }],
  documents: ['src/**/*.tsx'],
  generates: {
    './src/__generated__/': {
      preset: 'client-preset',
      plugins: ['typescript','typescript-resolvers'],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;