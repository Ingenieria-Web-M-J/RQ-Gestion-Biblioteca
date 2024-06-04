import { LibrarianCountAggregate } from "../outputs/LibrarianCountAggregate";
import { LibrarianMaxAggregate } from "../outputs/LibrarianMaxAggregate";
import { LibrarianMinAggregate } from "../outputs/LibrarianMinAggregate";
export declare class LibrarianGroupBy {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    _count: LibrarianCountAggregate | null;
    _min: LibrarianMinAggregate | null;
    _max: LibrarianMaxAggregate | null;
}
