const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const { Borrow } = require("./Borrow");

let Book = class Book {};
tslib_1.__decorate([
  TypeGraphQL.Field(_type => TypeGraphQL.ID, { nullable: false }),
  tslib_1.__metadata("design:type", String)
], Book.prototype, "id", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: false }),
  tslib_1.__metadata("design:type", String)
], Book.prototype, "title", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: false }),
  tslib_1.__metadata("design:type", String)
], Book.prototype, "author", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: false }),
  tslib_1.__metadata("design:type", String)
], Book.prototype, "isbn", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => Boolean, { nullable: false }),
  tslib_1.__metadata("design:type", Boolean)
], Book.prototype, "available", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => [Borrow], { nullable: true }),
  tslib_1.__metadata("design:type", Array)
], Book.prototype, "borrowRecords", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => Date, { nullable: false }),
  tslib_1.__metadata("design:type", Date)
], Book.prototype, "createdAt", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => Date, { nullable: false }),
  tslib_1.__metadata("design:type", Date)
], Book.prototype, "updatedAt", void 0);

Book = tslib_1.__decorate([
  TypeGraphQL.ObjectType({
    isAbstract: true
  })
], Book);
exports.Book = Book;
