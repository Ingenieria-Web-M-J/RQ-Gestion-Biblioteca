import { LibrarianCountAggregate } from "../outputs/LibrarianCountAggregate";
import { LibrarianMaxAggregate } from "../outputs/LibrarianMaxAggregate";
import { LibrarianMinAggregate } from "../outputs/LibrarianMinAggregate";
export declare class AggregateLibrarian {
    _count: LibrarianCountAggregate | null;
    _min: LibrarianMinAggregate | null;
    _max: LibrarianMaxAggregate | null;
}
