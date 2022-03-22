import categoryProducts from '../models/category'
import Product from '../models/products'

export const ListCate = async(request, response) => {
    try {
        const cate = await categoryProducts.find({}).exec()
        response.json(cate)
    } catch (error) {
        response.status(400).json({ message: "Không thể hiển thị" })
    }
};

export const ListCateDetail = async(request, response) => {
    try {
        const cate = await categoryProducts.findOne({ _id: request.params.id }).exec()
        const product = await Product.find({ cate }).populate('categoryProducts').exec()
        response.json({ cate, product })
    } catch (error) {
        response.status(400).json({ message: "Không thể hiển thị" })
    }
};

export const AddCate = async(request, response) => {
    try {
        const cate = await categoryProducts(request.body).save()
        response.json(cate)
    } catch (error) {
        response.status(400).json({ message: "Không thể thêm danh mục" })
    }
};
export const DeleteCate = async(request, response) => {
    try {
        const cate = await categoryProducts.findOneAndDelete({ _id: request.params.id }).exec()
        response.json(cate)
    } catch (error) {
        response.status(400).json({ message: "Không thể xóa danh mục" })
    }
};
export const UpdateCate = async(request, response) => {
    try {
        const cate = await categoryProducts.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }).exec()
        response.json(cate)
    } catch (error) {
        response.status(400).json({ message: "Không thể cập nhật danh mục" })
    }
};