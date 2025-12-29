import FeedbackCard from '@/components/cards/FeedbackCard';
import Link from 'next/link';
import React from 'react';
import { connect } from '../lib/dbConnect';
import { getFeedback } from '@/action/server/feedback';

export const metadata = {
    title: "feedback",
}

export const dynamic = 'force-dynamic'

// const getFeedback = async()=>{
//     const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`,{
//         // cache:"force-cache",
//         next:{revalidate:60}
//     })
// return await res.json();

// }

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