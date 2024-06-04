"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstLibrarianArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LibrarianOrderByWithRelationInput_1 = require("../../../inputs/LibrarianOrderByWithRelationInput");
const LibrarianWhereInput_1 = require("../../../inputs/LibrarianWhereInput");
const LibrarianWhereUniqueInput_1 = require("../../../inputs/LibrarianWhereUniqueInput");
const LibrarianScalarFieldEnum_1 = require("../../../../enums/LibrarianScalarFieldEnum");
let FindFirstLibrarianArgs = class FindFirstLibrarianArgs {
};
exports.FindFirstLibrarianArgs = FindFirstLibrarianArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianWhereInput_1.LibrarianWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LibrarianWhereInput_1.LibrarianWhereInput)
], FindFirstLibrarianArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LibrarianOrderByWithRelationInput_1.LibrarianOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLibrarianArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianWhereUniqueInput_1.LibrarianWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LibrarianWhereUniqueInput_1.LibrarianWhereUniqueInput)
], FindFirstLibrarianArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLibrarianArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLibrarianArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LibrarianScalarFieldEnum_1.LibrarianScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLibrarianArgs.prototype, "distinct", void 0);
exports.FindFirstLibrarianArgs = FindFirstLibrarianArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstLibrarianArgs);
