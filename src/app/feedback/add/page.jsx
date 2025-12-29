import { postFeedback } from '@/action/server/feedback';
import { connect } from '@/app/lib/dbConnect';
import FeedbackForm from '@/components/from/FeedbackForm';
import React from 'react';

const AddFeedback = () => {



    return (
        <div>
            <h2 className='text-2xl py-3 text-center'>Add Feedback</h2>
          <FeedbackForm postFeedback={postFeedback}></FeedbackForm>
        </div>
    );
};

export default AddFeedback;