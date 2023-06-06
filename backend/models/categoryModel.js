import mongoose, { Schema } from "mongoose";

const categorySchema = mongoose.Schema({
    name:{type: String, required: true, unique: true},
    description:{type: String, default: "default category description"}, //default σημαίνει ότι εάν δε βάλουμε τίποτα, τότε θα βάλει το default
    image:{type: String, default:" "},
    attributes: [
        {key: {type: String},
         value: [{type: String}]
        }
    ]
});

const Category = mongoose.model("Category", categorySchema);

categorySchema.index({description: 1});

export default Category;

