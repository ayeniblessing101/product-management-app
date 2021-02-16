class ProductController {
  constructor(di) {
    this.di = di;
  }

  createProduct = async (req, res) => {
    try {
      const file = this.di.decodeABufferFile(req.file);
      const uploadResponse = await this.di.uploadFileToCloud(file);

      const productData = {
        name: req.body.name,
        location: req.body.location,
        userId: req.user._id,
        image: uploadResponse.url,
      };
      const product = await this.di.productRepository.create(productData);
      res
        .status(201)
        .send({ message: "Product created successfully", product });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };

  getProducts = async (req, res) => {
    try {
      const limit = parseInt(req.query.limit) || 100;
      const skip = parseInt(req.query.skip) || 0;

      const products = await this.di.productRepository.findAllProducts(
        limit,
        skip
      );
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
}
module.exports = ProductController;
