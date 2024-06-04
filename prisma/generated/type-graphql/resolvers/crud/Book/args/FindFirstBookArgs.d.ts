import { BookOrderByWithRelationInput } from "../../../inputs/BookOrderByWithRelationInput";
import { BookWhereInput } from "../../../inputs/BookWhereInput";
import { BookWhereUniqueInput } from "../../../inputs/BookWhereUniqueInput";
export declare class FindFirstBookArgs {
    where?: BookWhereInput | undefined;
    orderBy?: BookOrderByWithRelationInput[] | undefined;
    cursor?: BookWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "author" | "isbn" | "available" | "createdAt" | "updatedAt"> | undefined;
}
