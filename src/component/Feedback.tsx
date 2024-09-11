import React from 'react';

export interface FeedbackProps {
  message: string;
  type: 'success' | 'error' | 'info'; // Define the possible types of feedback
}

const Feedback: React.FC<FeedbackProps> = ({ message, type }) => {
  // Define CSS class names based on the type
  const feedbackClass = `feedback feedback-${type}`;

  return (
    <div className={feedbackClass}>
      <p>{message}</p>
    </div>
  );
};

export default Feedback;
