"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowCreateManyBookInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowCreateManyBookInput_1 = require("../inputs/BorrowCreateManyBookInput");
let BorrowCreateManyBookInputEnvelope = class BorrowCreateManyBookInputEnvelope {
};
exports.BorrowCreateManyBookInputEnvelope = BorrowCreateManyBookInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowCreateManyBookInput_1.BorrowCreateManyBookInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowCreateManyBookInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BorrowCreateManyBookInputEnvelope.prototype, "skipDuplicates", void 0);
exports.BorrowCreateManyBookInputEnvelope = BorrowCreateManyBookInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowCreateManyBookInputEnvelope", {})
], BorrowCreateManyBookInputEnvelope);
