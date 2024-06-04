import { BorrowCountAggregate } from "../outputs/BorrowCountAggregate";
import { BorrowMaxAggregate } from "../outputs/BorrowMaxAggregate";
import { BorrowMinAggregate } from "../outputs/BorrowMinAggregate";
export declare class AggregateBorrow {
    _count: BorrowCountAggregate | null;
    _min: BorrowMinAggregate | null;
    _max: BorrowMaxAggregate | null;
}
