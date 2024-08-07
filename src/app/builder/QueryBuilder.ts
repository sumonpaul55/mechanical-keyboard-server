import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchAbleField: string[]) {
    const searchTerm = this?.query?.search as string;
    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchAbleField.map((field) => ({ [field]: { $regex: searchTerm, $options: "i" } } as FilterQuery<T>)),
      });
    }
    return this;
  }

  filter() {
    const queryObj = { ...this.query };
    const excludeFields = ["search", "sort", "fields", "limit", "page", "range", "brand"];
    excludeFields.forEach((el) => delete queryObj[el]);
    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }

  // range
  range() {
    const range = this.query.range;
    if (range) {
      const newRange = (range as string).split("-");
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
      let newBrand = (this.query.brand as string).split(",");
      let caseInsensitiveBrands = newBrand.map((brand) => new RegExp(`^${brand}$`, "i"));
      this.modelQuery = this.modelQuery.find({
        brand: { $in: caseInsensitiveBrands },
      });
    }
    return this;
  }

  //   pagination
  paginate() {
    const page = Number(this?.query?.page) || 1;
    const limit = Number(this?.query?.limit);
    const skip = (page - 1) * limit;
    this.modelQuery = this.modelQuery.skip(skip).limit(limit);
    return this;
  }
  // sort
  sort() {
    const sort = this?.query?.sort || "-createdAt";
    this.modelQuery = this.modelQuery.sort(sort as string);
    return this;
  }
  fields() {
    const fields = (this?.query?.fields as string)?.split(",")?.join(" ") || "-__v";
    this.modelQuery = this.modelQuery.select(fields);
    return this;
  }
}
export default QueryBuilder;
