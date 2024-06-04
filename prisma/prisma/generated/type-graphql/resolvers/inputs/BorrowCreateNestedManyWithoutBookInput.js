"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowCreateNestedManyWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowCreateManyBookInputEnvelope_1 = require("../inputs/BorrowCreateManyBookInputEnvelope");
const BorrowCreateOrConnectWithoutBookInput_1 = require("../inputs/BorrowCreateOrConnectWithoutBookInput");
const BorrowCreateWithoutBookInput_1 = require("../inputs/BorrowCreateWithoutBookInput");
const BorrowWhereUniqueInput_1 = require("../inputs/BorrowWhereUniqueInput");
let BorrowCreateNestedManyWithoutBookInput = class BorrowCreateNestedManyWithoutBookInput {
};
exports.BorrowCreateNestedManyWithoutBookInput = BorrowCreateNestedManyWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowCreateWithoutBookInput_1.BorrowCreateWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowCreateNestedManyWithoutBookInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowCreateOrConnectWithoutBookInput_1.BorrowCreateOrConnectWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowCreateNestedManyWithoutBookInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowCreateManyBookInputEnvelope_1.BorrowCreateManyBookInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowCreateManyBookInputEnvelope_1.BorrowCreateManyBookInputEnvelope)
], BorrowCreateNestedManyWithoutBookInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowWhereUniqueInput_1.BorrowWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowCreateNestedManyWithoutBookInput.prototype, "connect", void 0);
exports.BorrowCreateNestedManyWithoutBookInput = BorrowCreateNestedManyWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowCreateNestedManyWithoutBookInput", {})
], BorrowCreateNestedManyWithoutBookInput);
