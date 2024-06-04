"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowCreateManyUserInput_1 = require("../inputs/BorrowCreateManyUserInput");
let BorrowCreateManyUserInputEnvelope = class BorrowCreateManyUserInputEnvelope {
};
exports.BorrowCreateManyUserInputEnvelope = BorrowCreateManyUserInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowCreateManyUserInput_1.BorrowCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BorrowCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
exports.BorrowCreateManyUserInputEnvelope = BorrowCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowCreateManyUserInputEnvelope", {})
], BorrowCreateManyUserInputEnvelope);
