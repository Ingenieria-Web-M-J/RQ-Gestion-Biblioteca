"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowUpsertWithWhereUniqueWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowCreateWithoutBookInput_1 = require("../inputs/BorrowCreateWithoutBookInput");
const BorrowUpdateWithoutBookInput_1 = require("../inputs/BorrowUpdateWithoutBookInput");
const BorrowWhereUniqueInput_1 = require("../inputs/BorrowWhereUniqueInput");
let BorrowUpsertWithWhereUniqueWithoutBookInput = class BorrowUpsertWithWhereUniqueWithoutBookInput {
};
exports.BorrowUpsertWithWhereUniqueWithoutBookInput = BorrowUpsertWithWhereUniqueWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereUniqueInput_1.BorrowWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowWhereUniqueInput_1.BorrowWhereUniqueInput)
], BorrowUpsertWithWhereUniqueWithoutBookInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowUpdateWithoutBookInput_1.BorrowUpdateWithoutBookInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowUpdateWithoutBookInput_1.BorrowUpdateWithoutBookInput)
], BorrowUpsertWithWhereUniqueWithoutBookInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowCreateWithoutBookInput_1.BorrowCreateWithoutBookInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowCreateWithoutBookInput_1.BorrowCreateWithoutBookInput)
], BorrowUpsertWithWhereUniqueWithoutBookInput.prototype, "create", void 0);
exports.BorrowUpsertWithWhereUniqueWithoutBookInput = BorrowUpsertWithWhereUniqueWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowUpsertWithWhereUniqueWithoutBookInput", {})
], BorrowUpsertWithWhereUniqueWithoutBookInput);
