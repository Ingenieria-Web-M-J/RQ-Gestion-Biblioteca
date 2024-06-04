import { BookCreateOrConnectWithoutBorrowRecordsInput } from "../inputs/BookCreateOrConnectWithoutBorrowRecordsInput";
import { BookCreateWithoutBorrowRecordsInput } from "../inputs/BookCreateWithoutBorrowRecordsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";
export declare class BookCreateNestedOneWithoutBorrowRecordsInput {
    create?: BookCreateWithoutBorrowRecordsInput | undefined;
    connectOrCreate?: BookCreateOrConnectWithoutBorrowRecordsInput | undefined;
    connect?: BookWhereUniqueInput | undefined;
}
