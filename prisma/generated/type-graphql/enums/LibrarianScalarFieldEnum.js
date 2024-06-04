"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibrarianScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var LibrarianScalarFieldEnum;
(function (LibrarianScalarFieldEnum) {
    LibrarianScalarFieldEnum["id"] = "id";
    LibrarianScalarFieldEnum["name"] = "name";
    LibrarianScalarFieldEnum["email"] = "email";
    LibrarianScalarFieldEnum["password"] = "password";
    LibrarianScalarFieldEnum["createdAt"] = "createdAt";
    LibrarianScalarFieldEnum["updatedAt"] = "updatedAt";
})(LibrarianScalarFieldEnum || (exports.LibrarianScalarFieldEnum = LibrarianScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(LibrarianScalarFieldEnum, {
    name: "LibrarianScalarFieldEnum",
    description: undefined,
});
