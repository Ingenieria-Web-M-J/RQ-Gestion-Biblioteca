import { NestedEnumRoleFilter } from "../inputs/NestedEnumRoleFilter";
export declare class EnumRoleFilter {
    equals?: "ADMIN" | "USER" | undefined;
    in?: Array<"ADMIN" | "USER"> | undefined;
    notIn?: Array<"ADMIN" | "USER"> | undefined;
    not?: NestedEnumRoleFilter | undefined;
}
