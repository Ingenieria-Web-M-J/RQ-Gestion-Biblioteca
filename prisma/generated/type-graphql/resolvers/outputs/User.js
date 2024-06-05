const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const { Role } = require("../../enums/Role");
const { Borrow } = require("./Borrow");
const { Account } = require("./Account");
const { Session } = require("./Session");

let User = class User {};
tslib_1.__decorate([
  TypeGraphQL.Field(_type => TypeGraphQL.ID, { nullable: false }),
  tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: true }),
  tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: false }),
  tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: false }),
  tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => Role, { nullable: false }),
  tslib_1.__metadata("design:type", String)
], User.prototype, "role", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => [Borrow], { nullable: true }),
  tslib_1.__metadata("design:type", Array)
], User.prototype, "books", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => Date, { nullable: false }),
  tslib_1.__metadata("design:type", Date)
], User.prototype, "createdAt", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => Date, { nullable: false }),
  tslib_1.__metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => Date, { nullable: true }),
  tslib_1.__metadata("design:type", Date)
], User.prototype, "emailVerified", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: true }),
  tslib_1.__metadata("design:type", String)
], User.prototype, "image", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => [Account], { nullable: true }),
  tslib_1.__metadata("design:type", Array)
], User.prototype, "accounts", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => [Session], { nullable: true }),
  tslib_1.__metadata("design:type", Array)
], User.prototype, "sessions", void 0);

User = tslib_1.__decorate([
  TypeGraphQL.ObjectType({
    isAbstract: true
  })
], User);
exports.User = User;
