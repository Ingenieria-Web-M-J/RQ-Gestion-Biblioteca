"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowUpdateManyWithoutBookNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowCreateManyBookInputEnvelope_1 = require("../inputs/BorrowCreateManyBookInputEnvelope");
const BorrowCreateOrConnectWithoutBookInput_1 = require("../inputs/BorrowCreateOrConnectWithoutBookInput");
const BorrowCreateWithoutBookInput_1 = require("../inputs/BorrowCreateWithoutBookInput");
const BorrowScalarWhereInput_1 = require("../inputs/BorrowScalarWhereInput");
const BorrowUpdateManyWithWhereWithoutBookInput_1 = require("../inputs/BorrowUpdateManyWithWhereWithoutBookInput");
const BorrowUpdateWithWhereUniqueWithoutBookInput_1 = require("../inputs/BorrowUpdateWithWhereUniqueWithoutBookInput");
const BorrowUpsertWithWhereUniqueWithoutBookInput_1 = require("../inputs/BorrowUpsertWithWhereUniqueWithoutBookInput");
const BorrowWhereUniqueInput_1 = require("../inputs/BorrowWhereUniqueInput");
let BorrowUpdateManyWithoutBookNestedInput = class BorrowUpdateManyWithoutBookNestedInput {
};
exports.BorrowUpdateManyWithoutBookNestedInput = BorrowUpdateManyWithoutBookNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowCreateWithoutBookInput_1.BorrowCreateWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutBookNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowCreateOrConnectWithoutBookInput_1.BorrowCreateOrConnectWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutBookNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowUpsertWithWhereUniqueWithoutBookInput_1.BorrowUpsertWithWhereUniqueWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutBookNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowCreateManyBookInputEnvelope_1.BorrowCreateManyBookInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowCreateManyBookInputEnvelope_1.BorrowCreateManyBookInputEnvelope)
], BorrowUpdateManyWithoutBookNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowWhereUniqueInput_1.BorrowWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutBookNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowWhereUniqueInput_1.BorrowWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutBookNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowWhereUniqueInput_1.BorrowWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutBookNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowWhereUniqueInput_1.BorrowWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutBookNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowUpdateWithWhereUniqueWithoutBookInput_1.BorrowUpdateWithWhereUniqueWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutBookNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowUpdateManyWithWhereWithoutBookInput_1.BorrowUpdateManyWithWhereWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutBookNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowScalarWhereInput_1.BorrowScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutBookNestedInput.prototype, "deleteMany", void 0);
exports.BorrowUpdateManyWithoutBookNestedInput = BorrowUpdateManyWithoutBookNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowUpdateManyWithoutBookNestedInput", {})
], BorrowUpdateManyWithoutBookNestedInput);
