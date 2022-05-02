import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Recipe{
    @Field()
    public readonly id: String;

    @Field()
    public name: string;

    @Field({nullable: true})
    public description: String;

    @Field( returns => [String])
    public ingredients: [String];

}
