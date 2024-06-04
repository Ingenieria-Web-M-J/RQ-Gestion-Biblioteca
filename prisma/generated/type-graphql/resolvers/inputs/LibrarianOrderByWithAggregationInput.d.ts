import { LibrarianCountOrderByAggregateInput } from "../inputs/LibrarianCountOrderByAggregateInput";
import { LibrarianMaxOrderByAggregateInput } from "../inputs/LibrarianMaxOrderByAggregateInput";
import { LibrarianMinOrderByAggregateInput } from "../inputs/LibrarianMinOrderByAggregateInput";
export declare class LibrarianOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: LibrarianCountOrderByAggregateInput | undefined;
    _max?: LibrarianMaxOrderByAggregateInput | undefined;
    _min?: LibrarianMinOrderByAggregateInput | undefined;
}
