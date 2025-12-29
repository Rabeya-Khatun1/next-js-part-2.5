"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const FeedbackForm = ({postFeedback}) => {
const router = useRouter();

const handleFormSubmit = async(e)=>{
    e.preventDefault();
    const message = e.target.message.value;
const data =await postFeedback(message);


    // const res =await fetch(`/api/feedback`, {
    //     method: "POST",
    //     headers: {
    //          "Content-Type": "application/json"
    //     },
    //     body:JSON.stringify({message})
    // })

// const data = await res.json()
if(data.insertedId){
    alert('success')
    router.push('/feedback')
}

}

    return (
        <div>
            <form onSubmit={handleFormSubmit} className='space-y-5 text-center'>
                <textarea required className='w-xl border border-dashed p-3' name="message" id="" cols='30' rows='10'></textarea>
           <hr />
           <button className='btn bg-blue-600 p-2 rounded-2xl text-white text-center'>Add Feedback</button>
           
            </form>
        </div>
    );
};

export default FeedbackForm;