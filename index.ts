import "reflect-metadata";
import { ApolloServer } from 'apollo-server'
import { buildSchema } from "type-graphql";
import { helloResolver } from "./src/resolvers/helloResolver";
import { recipeResolver } from "./src/resolvers/recipeResolver";



 async function bootstrap(){
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers : [helloResolver, recipeResolver]
        })
    })
    
    await server.listen().then( () =>{
        console.log('Server is running on port 4000!')
    })
 }

 bootstrap().catch( (error) => console.log(error))
