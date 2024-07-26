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
    // console.log("queryobj", queryObj);

    const excludeField = ["search", "sort", "fields", "brand", "limit", "page"];
    excludeField.forEach((el) => delete queryObj[el]);

    if (queryObj.brand) {
      const brand = (queryObj.brnad as string).split(",");
      this.modelQuery = this.modelQuery.find({
        brand: { $in: brand },
      });
      return this;
    } else {
      this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
      return this;
    }
  }

  //   pagination
  paginate() {
    const page = Number(this?.query?.page) || 1;

    const limit = Number(this?.query?.limit) || 12;

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
