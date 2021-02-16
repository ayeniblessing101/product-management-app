class ProductRepository {
  constructor(model, firebaseDb) {
    this.model = model;
    this.firebaseDb = firebaseDb;
  }

  async create(requestBody) {
    const Product = this.model;
    try {
      const product = new Product(requestBody);

      let firebaseData = requestBody;
      firebaseData.userId = firebaseData.userId.toString();

      this.firebaseDb.collection("products").doc().set(firebaseData);
      return await product.save();
    } catch (error) {
      throw error;
    }
  }

  async findById(id) {
    const Product = this.model;
    try {
      return await Product.findById(id).populate("userId");
    } catch (error) {
      throw error;
    }
  }

  async findAllProducts(limit, skip) {
    const Product = this.model;
    try {
      return await Product.find()
        .populate({ path: "comments" })
        .populate({
          path: "userId",
          select: "name location phone email address -_id",
        })
        .limit(limit)
        .skip(skip)
        .exec();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductRepository;
