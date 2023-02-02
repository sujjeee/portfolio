import { GraphQLClient, gql } from 'graphql-request';

const hygraph = new GraphQLClient(
    process.env.GRAHPQL_ENDPOINT
);

export const getProjects = async () => {
    const { projects } = await hygraph.request(gql
        `
        {
            projects {
                id
                name
                website
                image {
                    url
                }
                category
            }
        }
    `
    );

    return projects
};