import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'The base query',
    fields: {
        user: {
            type: GraphQLString,
            description: "first gql try",
            resolve: () => { return 'hello world'; }
        }
    }
});
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'The base mutation',
    fields: {
        createUser: {
            type: GraphQLString,
            args: {
                input: {
                    type: GraphQLString,
                    description: "gg"
                }
            },
            resolve: (parent, args) => {
                const payload = args.input;
                return payload;
            }
        }
    }
});
export const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
});
//# sourceMappingURL=schema.js.map