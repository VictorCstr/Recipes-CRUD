import {Query, Resolver} from 'type-graphql'

@Resolver()
export class helloResolver{
    @Query(returns => String)
    hello(){
        return 'Hello!'
    }
}