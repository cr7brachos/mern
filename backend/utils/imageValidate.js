
//παίρνει ως argument το images
const imageValidate = (images) => {
    let imagesTable = [];

    //δημιουργεί τον πίνακα imagesTable
    if (Array.isArray(images)) {
        imagesTable = images;
    } else {
        imagesTable.push(images);
    }

    //τσεκάρει εάν ο χρήστης έχει ανεβάσει περισσότερες από 3 εικόνες
    if (imagesTable.length > 3) {
        return {
            error: "Send only 3 images at once"
        }
    }

    //για κάθε στοιχείο στο imagesTable
    imagesTable.forEach(image => {

        //τσεκάρει εάν το μέγεθος είναι μεγαλύτερο από 1ΜΒ
        if (image.size > 1048576) {
            return {
                error: "Size too large (above 1MB)"
            }
        }

        //regEx που λέει jpg or jpeg or png
        const fileTypes = /jpg|jpeg|png/;

        //τσεκάρει εάν στο image.mimetype υπάρχει κάποιο από τα πιο πάνω regEx, κι επιστρέφει τιμή true/false
        const mimeTypes = fileTypes.test(image.mimetype);

        if (!mimeTypes) {
            return {
                error: "incorrect mime type (should be jpg, jpeg, or png)"
            }
        }
        
    });

    return {error: false} //εάν δεν έχει προκύψει κανένα λάθος τότε επιστρέφει την τιμή false

};

export default imageValidate;