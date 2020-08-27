import React from 'react';
import './Subject.css'

const Subject = (props) => {
    //console.log(props);
    const {name,price,img} = props.course;
   

    return (
     <div className="subject-img">
            <div >
            <img src={img} alt=""/>
            </div>


            <div className="subject-name">
                    <h2>{name}</h2>
                 <strong className="price">Price:${price}</strong>
                 <br/>
                 <br/>
                 <button 
                 className="main-btn" 
                
                 onClick ={() =>props.handleAddCourse(props.course)}
                 
                 >Enroll Now</button>  
                      
            </div>

            
             
     </div>
    );
};

export default Subject;