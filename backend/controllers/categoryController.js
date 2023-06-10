import Category from "../models/categoryModel.js";


const getCategories = async (req, res, next) => {
    
    try {
        /* 
        βρίσκει όλες τις κατηγορίες στο σχήμα Category
        τις ταξινομεί με βάση το όνομα
        σε περίπτωση σφάλματος, throws error το οποίο θα το διαχειριστεί το catch
        για να χρησιμοποιήσουμε το await, πρέπει να έχει κληθεί απο συνάρτηση που να είναι async
        */
        const categories = await Category.find({}).sort({name: "asc"}).orFail();

        res.json(categories);
        
    } catch (error) {

        next(error)
    }
}

const newCategory = async (req, res, next) => {
    try {

       

        const {category} = req.body; //destructuring of a json data

        if (!category) {
            res.status(400).send("category is required");
        } else {
            const categoryExists = await Category.findOne({name: category});
            if (categoryExists) {
                res.status(400).send("category exists");
            } else {
                const categoryCreated = Category.create({
                    name: category
                })
                res.status(201).send({categoryCreated})
            }
        }
        
    } catch (error) {

        next(error);

    }
}

const deleteCategory = async (req, res, next) => {
    try {

        // return res.send(req.params.category);

        if (req.params.category !== "Choose category") {
                       
            await Category.deleteOne({ name:  decodeURIComponent(req.params.category) }).orFail();
            res.json({categoryDeleted: true});
        }
        
    } catch (error) {
        next(error);
    }
}

const saveAttribute = async (req, res, next) => {
    const {key, val, categoryChoosen} = req.body;

    if (!key || !val || !categoryChoosen) {
        return res.status(400).send("all inputs are required");
    }

    try {

        const category = categoryChoosen.split("/")[0];
        const categoryExists = await Category.findOne({name: category}).orFail();
        

        if (categoryExists.attributes.length > 0) {
           
            var keyDoesNotExistsInDatabase = true;
            console.log(categoryExists.attributes.length);

            categoryExists.attributes.map((item,idx)=>{
                
                if (item.key === key) {
                    
                    keyDoesNotExistsInDatabase = false;
                    var copyAttributesValues = [...categoryExists.attributes[idx].value];
                    console.log(copyAttributesValues);
                    copyAttributesValues.push(val);
                    console.log(copyAttributesValues);
                    var newAttributeValues = [...new Set(copyAttributesValues)]; //set ensures unique values in a table
                    categoryExists.attributes[idx].value = newAttributeValues;
                }
            })

            if (keyDoesNotExistsInDatabase) {
                categoryExists.attributes.push({key: key, value: [val]});
            }

        } else {
            categoryExists.attributes.push({key: key, value: [val]});
            
        }

        
        await categoryExists.save();
        let cat = await Category.find({}).sort({name: "asc"});
        return res.status(201).json({categoriesUpdated: cat});

        
    } catch (error) {
        next(error);
    }

}

export default getCategories;

export  { newCategory, deleteCategory, saveAttribute};