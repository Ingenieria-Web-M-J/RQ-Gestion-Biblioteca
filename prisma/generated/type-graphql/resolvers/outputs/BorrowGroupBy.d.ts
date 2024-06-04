import { BorrowCountAggregate } from "../outputs/BorrowCountAggregate";
import { BorrowMaxAggregate } from "../outputs/BorrowMaxAggregate";
import { BorrowMinAggregate } from "../outputs/BorrowMinAggregate";
export declare class BorrowGroupBy {
    id: string;
    userId: string;
    bookId: string;
    borrowedAt: Date;
    returnedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: BorrowCountAggregate | null;
    _min: BorrowMinAggregate | null;
    _max: BorrowMaxAggregate | null;
}
