"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyLibrarianAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CreateManyLibrarianAndReturnOutputType = class CreateManyLibrarianAndReturnOutputType {
};
exports.CreateManyLibrarianAndReturnOutputType = CreateManyLibrarianAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyLibrarianAndReturnOutputType.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyLibrarianAndReturnOutputType.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyLibrarianAndReturnOutputType.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyLibrarianAndReturnOutputType.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyLibrarianAndReturnOutputType.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyLibrarianAndReturnOutputType.prototype, "updatedAt", void 0);
exports.CreateManyLibrarianAndReturnOutputType = CreateManyLibrarianAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyLibrarianAndReturnOutputType", {})
], CreateManyLibrarianAndReturnOutputType);
