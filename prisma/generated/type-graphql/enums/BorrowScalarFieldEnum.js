"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var BorrowScalarFieldEnum;
(function (BorrowScalarFieldEnum) {
    BorrowScalarFieldEnum["id"] = "id";
    BorrowScalarFieldEnum["userId"] = "userId";
    BorrowScalarFieldEnum["bookId"] = "bookId";
    BorrowScalarFieldEnum["borrowedAt"] = "borrowedAt";
    BorrowScalarFieldEnum["returnedAt"] = "returnedAt";
    BorrowScalarFieldEnum["createdAt"] = "createdAt";
    BorrowScalarFieldEnum["updatedAt"] = "updatedAt";
})(BorrowScalarFieldEnum || (exports.BorrowScalarFieldEnum = BorrowScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(BorrowScalarFieldEnum, {
    name: "BorrowScalarFieldEnum",
    description: undefined,
});
