import FeedbackCard from '@/components/cards/FeedbackCard';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "feedback",
}

const getFeedback = async()=>{
    const res = await fetch("http://localhost:3000/api/feedback",{
        cache:"force-cache",
        next:{revalidate:60}
    })
return await res.json();

}

const FeedBack = async () => {

const feedback = await getFeedback();

    return (
       <div>
         <div className=''>
            <h1 className='text-primary text-center text-5xl font-bold my-10'>{feedback.length} Feedbacks</h1>

<Link className=' bg-blue-600 p-2 rounded-2xl my-3' href={'/feedback/add'}><button>Add Feedback</button></Link>

            <div className='flex flex-col gap-3'>
                {
                    feedback.map((fd, index)=>(
                        <FeedbackCard key={fd._id} fd={fd}></FeedbackCard>
                    ))
                }
            </div>
        </div>
       </div>
    );
};

export default FeedBack;