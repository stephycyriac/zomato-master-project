import React,{useState} from 'react'



//components
import ReviewModal from './ReviewModal';
const AddReviewCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const handleRating = (value) => console.log(value);
    return (
        
        <>
        <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen}/>
           <h3 className="text-xl font-medium">Rate your experience for</h3>
                  <div className="flex gap-3 items-center">
                  <div className="flex gap-1 items-center">
                  <input type="radio" name="review" />
                      <label htmlFor="dining">Dining</label>
                  </div>
                  <div className="flex gap-1 items-center">
                  <input type="radio" name="review" />
                  <label htmlFor="delivery">Delivery</label>
                  </div>
                  </div>
                  <button  onClick={openModal} className="text-zomato-400">Write a Review</button>    
        </>
    )
}

export default AddReviewCard
