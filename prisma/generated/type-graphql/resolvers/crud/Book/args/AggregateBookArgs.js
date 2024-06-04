"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBookArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookOrderByWithRelationInput_1 = require("../../../inputs/BookOrderByWithRelationInput");
const BookWhereInput_1 = require("../../../inputs/BookWhereInput");
const BookWhereUniqueInput_1 = require("../../../inputs/BookWhereUniqueInput");
let AggregateBookArgs = class AggregateBookArgs {
};
exports.AggregateBookArgs = AggregateBookArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereInput_1.BookWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereInput_1.BookWhereInput)
], AggregateBookArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookOrderByWithRelationInput_1.BookOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateBookArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], AggregateBookArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBookArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBookArgs.prototype, "skip", void 0);
exports.AggregateBookArgs = AggregateBookArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateBookArgs);
