"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryBuilder {
    constructor(modelQuery, query) {
        this.modelQuery = modelQuery;
        this.query = query;
    }
    search(searchAbleField) {
        var _a;
        const searchTerm = (_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.search;
        if (searchTerm) {
            this.modelQuery = this.modelQuery.find({
                $or: searchAbleField.map((field) => ({ [field]: { $regex: searchTerm, $options: "i" } })),
            });
        }
        return this;
    }
    filter() {
        const queryObj = Object.assign({}, this.query);
        const excludeFields = ["search", "sort", "fields", "limit", "page", "range", "brand"];
        excludeFields.forEach((el) => delete queryObj[el]);
        this.modelQuery = this.modelQuery.find(queryObj);
        return this;
    }
    // range
    range() {
        const range = this.query.range;
        if (range) {
            const newRange = range.split("-");
            const lowestPrice = Number(newRange[0]);
            const hiestprice = Number(newRange[1]);
            // let rangevalue = newRange.map((range) => new RegExp(`^${range}$`, "i"));
            this.modelQuery = this.modelQuery.find({
                price: { $gte: lowestPrice, $lte: hiestprice },
            });
        }
        return this;
    }
    brand() {
        if (this.query.brand) {
            let newBrand = this.query.brand.split(",");
            let caseInsensitiveBrands = newBrand.map((brand) => new RegExp(`^${brand}$`, "i"));
            this.modelQuery = this.modelQuery.find({
                brand: { $in: caseInsensitiveBrands },
            });
        }
        return this;
    }
    //   pagination
    paginate() {
        var _a, _b;
        const page = Number((_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.page) || 1;
        const limit = Number((_b = this === null || this === void 0 ? void 0 : this.query) === null || _b === void 0 ? void 0 : _b.limit);
        const skip = (page - 1) * limit;
        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        return this;
    }
    // sort
    sort() {
        var _a;
        const sort = ((_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.sort) || "-createdAt";
        this.modelQuery = this.modelQuery.sort(sort);
        return this;
    }
    fields() {
        var _a, _b, _c;
        const fields = ((_c = (_b = (_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b.split(",")) === null || _c === void 0 ? void 0 : _c.join(" ")) || "-__v";
        this.modelQuery = this.modelQuery.select(fields);
        return this;
    }
}
exports.default = QueryBuilder;
