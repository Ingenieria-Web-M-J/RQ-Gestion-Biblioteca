import { BookCreateOrConnectWithoutBorrowRecordsInput } from "../inputs/BookCreateOrConnectWithoutBorrowRecordsInput";
import { BookCreateWithoutBorrowRecordsInput } from "../inputs/BookCreateWithoutBorrowRecordsInput";
import { BookUpdateToOneWithWhereWithoutBorrowRecordsInput } from "../inputs/BookUpdateToOneWithWhereWithoutBorrowRecordsInput";
import { BookUpsertWithoutBorrowRecordsInput } from "../inputs/BookUpsertWithoutBorrowRecordsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";
export declare class BookUpdateOneRequiredWithoutBorrowRecordsNestedInput {
    create?: BookCreateWithoutBorrowRecordsInput | undefined;
    connectOrCreate?: BookCreateOrConnectWithoutBorrowRecordsInput | undefined;
    upsert?: BookUpsertWithoutBorrowRecordsInput | undefined;
    connect?: BookWhereUniqueInput | undefined;
    update?: BookUpdateToOneWithWhereWithoutBorrowRecordsInput | undefined;
}
