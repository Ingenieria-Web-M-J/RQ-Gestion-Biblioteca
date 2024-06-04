"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLibrarian = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LibrarianCountAggregate_1 = require("../outputs/LibrarianCountAggregate");
const LibrarianMaxAggregate_1 = require("../outputs/LibrarianMaxAggregate");
const LibrarianMinAggregate_1 = require("../outputs/LibrarianMinAggregate");
let AggregateLibrarian = class AggregateLibrarian {
};
exports.AggregateLibrarian = AggregateLibrarian;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianCountAggregate_1.LibrarianCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LibrarianCountAggregate_1.LibrarianCountAggregate)
], AggregateLibrarian.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianMinAggregate_1.LibrarianMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LibrarianMinAggregate_1.LibrarianMinAggregate)
], AggregateLibrarian.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianMaxAggregate_1.LibrarianMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LibrarianMaxAggregate_1.LibrarianMaxAggregate)
], AggregateLibrarian.prototype, "_max", void 0);
exports.AggregateLibrarian = AggregateLibrarian = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateLibrarian", {})
], AggregateLibrarian);
