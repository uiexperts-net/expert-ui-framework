import React, { useState } from 'react';
import CheckboxComponent from './component/CheckboxComponent'; // Adjust the path based on your folder structure

const App: React.FC = () => {
  // State management for multiple checkboxes
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState<boolean>(false);

  // Handle changes for the checkboxes
  const handleAcceptTermsChange = (checked: boolean) => {
    setAcceptTerms(checked);
  };

  const handleSubscribeNewsletterChange = (checked: boolean) => {
    setSubscribeNewsletter(checked);
  };

  return (
    <div>
      <h1>Generic Checkbox Example</h1>

      {/* Checkbox for accepting terms */}
      <CheckboxComponent
        label="Accept Terms and Conditions"
        checked={acceptTerms}
        onChange={handleAcceptTermsChange}
      />
      <p>{acceptTerms ? "You have accepted the terms." : "You have not accepted the terms."}</p>

      {/* Checkbox for subscribing to a newsletter */}
      <CheckboxComponent
        label="Subscribe to Newsletter"
        checked={subscribeNewsletter}
        onChange={handleSubscribeNewsletterChange}
      />
      <p>{subscribeNewsletter ? "Subscribed to the newsletter." : "Not subscribed to the newsletter."}</p>
    </div>
  );
};

export default App;
