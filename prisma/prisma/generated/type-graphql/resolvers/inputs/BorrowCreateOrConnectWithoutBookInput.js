"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowCreateOrConnectWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowCreateWithoutBookInput_1 = require("../inputs/BorrowCreateWithoutBookInput");
const BorrowWhereUniqueInput_1 = require("../inputs/BorrowWhereUniqueInput");
let BorrowCreateOrConnectWithoutBookInput = class BorrowCreateOrConnectWithoutBookInput {
};
exports.BorrowCreateOrConnectWithoutBookInput = BorrowCreateOrConnectWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereUniqueInput_1.BorrowWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowWhereUniqueInput_1.BorrowWhereUniqueInput)
], BorrowCreateOrConnectWithoutBookInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowCreateWithoutBookInput_1.BorrowCreateWithoutBookInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowCreateWithoutBookInput_1.BorrowCreateWithoutBookInput)
], BorrowCreateOrConnectWithoutBookInput.prototype, "create", void 0);
exports.BorrowCreateOrConnectWithoutBookInput = BorrowCreateOrConnectWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowCreateOrConnectWithoutBookInput", {})
], BorrowCreateOrConnectWithoutBookInput);
