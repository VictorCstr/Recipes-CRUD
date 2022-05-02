import { Field, ObjectType } from "type-graphql";
import { Recipe } from "../entities/Recipe";

@ObjectType()
export class ErrorType{
    @Field()
    message: String;
}


@ObjectType()
export class ResponseType{
    @Field( returns => Recipe, {nullable: true})
    recipe?: Recipe

    @Field( returns => ErrorType, {nullable: true})
    error?: ErrorType
}