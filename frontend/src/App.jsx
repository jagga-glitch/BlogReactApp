import React from 'react'

export const App = () => {
  return (
    <div>
     <h1>AI Blogs</h1> 
      <ul>
        <li>AI Ethics</li>
        <li>Machine Learning</li>
        <li>Neural Networks</li>
        <li>Natural Language Processing</li>
        <li>Computer Vision</li>
      </ul>
      <form>
        <h4>Contact Form</h4>
        <input type="text" placeholder="Name" />
        <br />
        <input type="email" placeholder="Email" />
        <br/>
        <textarea placeholder="Message"></textarea>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
