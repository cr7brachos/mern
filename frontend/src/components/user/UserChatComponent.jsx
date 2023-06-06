import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import "../../chat.css";
import Button from 'react-bootstrap/Button';
import { Fragment } from "react";


const UserChatComponent = () => {

    return (

        <>
        <input type="checkbox" name="" id="checkChat" />

        {/* το πιο κάτω label συνδέει τις δύο πιο κάτω εικόνες με το check box, κι έτσι όποια εικόνα πατήσουμε συμπεριφέρεται ώς checkbox */}
        <label className="chat-btn" htmlFor="checkChat">
            <FontAwesomeIcon icon={faCommentDots} className="comment icon"/> 
            {/* το πιο κάτω εμφανίζει τη κόκκινη τελεία πάνω από αντικείμενο */}
            <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
            <FontAwesomeIcon icon={faCircleXmark} className="close icon" /> 
            
        </label>

        <div className="chat-wrapper">
            <div className="chat-header">
                <h6>Let's Chat - Online</h6>
            </div>
            <div className="chat-form">
                <div className="cht-msg">
                    {/* δημιουργεί πίνακα κενό 20 θέσεων και άρα κάνει map 20 φορές */}
                    {
                        Array.from({length:20}).map((_,index)=>{
                            return (
                                // Fragnent χρησιμοποιείται για να βάζουμε key, σε ολα τα components που περικλείονται
                                <Fragment key={index}>
                                <p><b>You wrote: </b>This is a message for you and the world</p>
                                <p className="bg-primary p-3 ms-4 text-light rounded-pill"><b>Support wrote: </b> This is a message from supprt</p>
                                </Fragment>
                            )
                        })
                    }
                    
                    
                </div>
                <textarea name="" id="clientChatMsg" cols="10" rows="5" className="form-control" placeholder="Your text message"></textarea>
                <Button variant="success" className="btn-success">Success</Button>
            </div>
            
        </div>

        
        
        </>
       


    )

}

export default UserChatComponent;