import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
    path: {type: String, required: true},
    
    
}, {
    timestamps: true,
})

imageSchema.index();

const Image = mongoose.model("Image", imageSchema);

export default Image;