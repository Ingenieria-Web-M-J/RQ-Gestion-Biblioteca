"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstLibrarianOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LibrarianOrderByWithRelationInput_1 = require("../../../inputs/LibrarianOrderByWithRelationInput");
const LibrarianWhereInput_1 = require("../../../inputs/LibrarianWhereInput");
const LibrarianWhereUniqueInput_1 = require("../../../inputs/LibrarianWhereUniqueInput");
const LibrarianScalarFieldEnum_1 = require("../../../../enums/LibrarianScalarFieldEnum");
let FindFirstLibrarianOrThrowArgs = class FindFirstLibrarianOrThrowArgs {
};
exports.FindFirstLibrarianOrThrowArgs = FindFirstLibrarianOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianWhereInput_1.LibrarianWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LibrarianWhereInput_1.LibrarianWhereInput)
], FindFirstLibrarianOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LibrarianOrderByWithRelationInput_1.LibrarianOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLibrarianOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianWhereUniqueInput_1.LibrarianWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LibrarianWhereUniqueInput_1.LibrarianWhereUniqueInput)
], FindFirstLibrarianOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLibrarianOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLibrarianOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LibrarianScalarFieldEnum_1.LibrarianScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLibrarianOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstLibrarianOrThrowArgs = FindFirstLibrarianOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstLibrarianOrThrowArgs);
