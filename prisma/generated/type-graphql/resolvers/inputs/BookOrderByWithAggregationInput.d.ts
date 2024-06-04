import { BookCountOrderByAggregateInput } from "../inputs/BookCountOrderByAggregateInput";
import { BookMaxOrderByAggregateInput } from "../inputs/BookMaxOrderByAggregateInput";
import { BookMinOrderByAggregateInput } from "../inputs/BookMinOrderByAggregateInput";
export declare class BookOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    author?: "asc" | "desc" | undefined;
    isbn?: "asc" | "desc" | undefined;
    available?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: BookCountOrderByAggregateInput | undefined;
    _max?: BookMaxOrderByAggregateInput | undefined;
    _min?: BookMinOrderByAggregateInput | undefined;
}
