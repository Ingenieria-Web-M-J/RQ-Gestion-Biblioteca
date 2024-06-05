const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const { User } = require("./User");
const { Book } = require("./Book");

let Borrow = class Borrow {};
tslib_1.__decorate([
  TypeGraphQL.Field(_type => TypeGraphQL.ID, { nullable: false }),
  tslib_1.__metadata("design:type", String)
], Borrow.prototype, "id", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => User, { nullable: false }),
  tslib_1.__metadata("design:type", User)
], Borrow.prototype, "user", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: false }),
  tslib_1.__metadata("design:type", String)
], Borrow.prototype, "userId", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => Book, { nullable: false }),
  tslib_1.__metadata("design:type", Book)
], Borrow.prototype, "book", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: false }),
  tslib_1.__metadata("design:type", String)
], Borrow.prototype, "bookId", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => Date, { nullable: false }),
  tslib_1.__metadata("design:type", Date)
], Borrow.prototype, "borrowedAt", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => Date, { nullable: true }),
  tslib_1.__metadata("design:type", Date)
], Borrow.prototype, "returnedAt", void 0);

Borrow = tslib_1.__decorate([
  TypeGraphQL.ObjectType({
    isAbstract: true
  })
], Borrow);
exports.Borrow = Borrow;
