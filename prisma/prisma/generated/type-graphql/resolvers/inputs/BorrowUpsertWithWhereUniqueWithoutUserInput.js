"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowCreateWithoutUserInput_1 = require("../inputs/BorrowCreateWithoutUserInput");
const BorrowUpdateWithoutUserInput_1 = require("../inputs/BorrowUpdateWithoutUserInput");
const BorrowWhereUniqueInput_1 = require("../inputs/BorrowWhereUniqueInput");
let BorrowUpsertWithWhereUniqueWithoutUserInput = class BorrowUpsertWithWhereUniqueWithoutUserInput {
};
exports.BorrowUpsertWithWhereUniqueWithoutUserInput = BorrowUpsertWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereUniqueInput_1.BorrowWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowWhereUniqueInput_1.BorrowWhereUniqueInput)
], BorrowUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowUpdateWithoutUserInput_1.BorrowUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowUpdateWithoutUserInput_1.BorrowUpdateWithoutUserInput)
], BorrowUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowCreateWithoutUserInput_1.BorrowCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowCreateWithoutUserInput_1.BorrowCreateWithoutUserInput)
], BorrowUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
exports.BorrowUpsertWithWhereUniqueWithoutUserInput = BorrowUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowUpsertWithWhereUniqueWithoutUserInput", {})
], BorrowUpsertWithWhereUniqueWithoutUserInput);
