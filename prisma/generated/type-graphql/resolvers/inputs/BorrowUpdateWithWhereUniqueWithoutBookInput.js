"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowUpdateWithWhereUniqueWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowUpdateWithoutBookInput_1 = require("../inputs/BorrowUpdateWithoutBookInput");
const BorrowWhereUniqueInput_1 = require("../inputs/BorrowWhereUniqueInput");
let BorrowUpdateWithWhereUniqueWithoutBookInput = class BorrowUpdateWithWhereUniqueWithoutBookInput {
};
exports.BorrowUpdateWithWhereUniqueWithoutBookInput = BorrowUpdateWithWhereUniqueWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereUniqueInput_1.BorrowWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowWhereUniqueInput_1.BorrowWhereUniqueInput)
], BorrowUpdateWithWhereUniqueWithoutBookInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowUpdateWithoutBookInput_1.BorrowUpdateWithoutBookInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowUpdateWithoutBookInput_1.BorrowUpdateWithoutBookInput)
], BorrowUpdateWithWhereUniqueWithoutBookInput.prototype, "data", void 0);
exports.BorrowUpdateWithWhereUniqueWithoutBookInput = BorrowUpdateWithWhereUniqueWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowUpdateWithWhereUniqueWithoutBookInput", {})
], BorrowUpdateWithWhereUniqueWithoutBookInput);
