import React from 'react';
import fakeData from '../../fakeData/Data';
import { useState } from 'react';
import './Course.css'
import Subject from './Subject/Subject';
import Cart from './Cart/Cart';
const Course = () => {
    console.log(fakeData)
    //const first15 = fakeData.slice(0, 15);
    const [courses,setCourses] = useState(fakeData);
    const [cart,setCart]=useState([]);

    const handleAddCourse = (course) =>{
       
        const newCart = [...cart,course];
        setCart(newCart);

    }

    return (
         <div className="course-container">
                
             <div className="subject-container">          
                
                {
                    courses.map(course => <Subject
                        handleAddCourse = {handleAddCourse}
                         course = {course}></Subject> )
                }
                
              </div>

              <div className="cart-container">
                  <Cart cart={cart}></Cart>
            
              </div>

         </div>
    );
};

export default Course;