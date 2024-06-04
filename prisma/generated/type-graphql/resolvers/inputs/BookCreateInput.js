"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowCreateNestedManyWithoutBookInput_1 = require("../inputs/BorrowCreateNestedManyWithoutBookInput");
let BookCreateInput = class BookCreateInput {
};
exports.BookCreateInput = BookCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateInput.prototype, "isbn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BookCreateInput.prototype, "available", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowCreateNestedManyWithoutBookInput_1.BorrowCreateNestedManyWithoutBookInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowCreateNestedManyWithoutBookInput_1.BorrowCreateNestedManyWithoutBookInput)
], BookCreateInput.prototype, "borrowRecords", void 0);
exports.BookCreateInput = BookCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateInput", {})
], BookCreateInput);
