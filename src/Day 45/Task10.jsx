import { useState } from "react";

function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      feedback,
      rating,
      subscribe,
    };

    console.log("Feedback Form Data:", formData);

    setFeedback("");
    setRating("");
    setSubscribe(false);
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Feedback:
            <input
              type="text"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter your feedback"
              required
            />
          </label>
        </div>

        <div>
          <label>
            Rating:
            <select value={rating} onChange={(e) => setRating(e.target.value)} required>
              <option value="">Select rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={subscribe}
              onChange={(e) => setSubscribe(e.target.checked)}
            />
            Subscribe to newsletter
          </label>
        </div>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
