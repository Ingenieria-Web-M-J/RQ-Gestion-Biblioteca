"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowUpdateManyWithWhereWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowScalarWhereInput_1 = require("../inputs/BorrowScalarWhereInput");
const BorrowUpdateManyMutationInput_1 = require("../inputs/BorrowUpdateManyMutationInput");
let BorrowUpdateManyWithWhereWithoutBookInput = class BorrowUpdateManyWithWhereWithoutBookInput {
};
exports.BorrowUpdateManyWithWhereWithoutBookInput = BorrowUpdateManyWithWhereWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowScalarWhereInput_1.BorrowScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowScalarWhereInput_1.BorrowScalarWhereInput)
], BorrowUpdateManyWithWhereWithoutBookInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowUpdateManyMutationInput_1.BorrowUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowUpdateManyMutationInput_1.BorrowUpdateManyMutationInput)
], BorrowUpdateManyWithWhereWithoutBookInput.prototype, "data", void 0);
exports.BorrowUpdateManyWithWhereWithoutBookInput = BorrowUpdateManyWithWhereWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowUpdateManyWithWhereWithoutBookInput", {})
], BorrowUpdateManyWithWhereWithoutBookInput);
