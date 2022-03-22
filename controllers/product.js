import Product from '../models/products'

export const ListProduct = async(request, response) => {
    try {
        const product = await Product.find({}).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({ message: "Không thể hiển thị" })
    }
};

export const ListProductDetail = async(request, response) => {
    try {
        const product = await Product.findOne({ _id: request.params.id }).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({ message: "Không thể hiển thị" })
    }
};

export const AddProduct = async(request, response) => {
    try {
        const product = await Product(request.body).save()
        response.json(product)
    } catch (error) {
        response.status(400).json({ message: "Không thể thêm sản phẩm" })
    }
};
export const DeleteProduct = async(request, response) => {
    try {
        const product = await Product.findOneAndDelete({ _id: request.params.id }).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({ message: "Không thể xóa sản phẩm" })
    }
};
export const UpdateProduct = async(request, response) => {
    try {
        const product = await Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({ message: "Không thể cập nhật sản phẩm" })
    }
};