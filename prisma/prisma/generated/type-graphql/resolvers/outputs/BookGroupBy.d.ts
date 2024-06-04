import { BookCountAggregate } from "../outputs/BookCountAggregate";
import { BookMaxAggregate } from "../outputs/BookMaxAggregate";
import { BookMinAggregate } from "../outputs/BookMinAggregate";
export declare class BookGroupBy {
    id: string;
    title: string;
    author: string;
    isbn: string;
    available: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: BookCountAggregate | null;
    _min: BookMinAggregate | null;
    _max: BookMaxAggregate | null;
}
