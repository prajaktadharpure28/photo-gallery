import galleryModel from "../models/gallery.js";
import categoryModel from "../models/category.js";

class galleryController{
    static uploadImage = async (req, res) => {
        const { category } = req.body;
        try{
            if(category){
                const addImage = galleryModel({
                    name: req.file.filename,
                    category: category,
                });
                const saved_image = await addImage.save();
                if (saved_image) {
                    return res.status(200).json({ message: "Image uploaded successfully" });
                }
            }
            else{
                return res.status(400).json({ message: "Category is required" });
            }

        } catch(error){
            return res.status(400).json({ message: error.message });
        }
    };

    static addNewCategory = async (req, res) => {
        const {name} = req.body;
        try{
            if(name){
                const newCategory = categoryModel({
                    name: name,
                });
                const saved_category = await newCategory.save();
                if (saved_category) {
                    return res.status(200).json({ message: "Category added successfully" });
                }
                
            }    
            else{
                return res.status(400).json({ message: "Name is required" });
            }
} catch (error){
    return res.status(400).json({ message: error.message });
}
};
}

export default galleryController;