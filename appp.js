const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();

// API endpoint for addition
app.get('/add/:n1/:n2', (req, res) => {
  try {
    const n1 = parseFloat(req.params.n1); // convert first input to float
    const n2 = parseFloat(req.params.n2); // convert second input to float

    
    if (isNaN(n1) || isNaN(n2)) {  // Check if the input parameters are valid numbers
        // Throw an error if the input parameters are invalid

      throw new Error('Invalid input. Please enter valid numbers.');   // Throw an error if the input parameters are invalid
    }

    const result = n1 + n2; // perform addition
    
    res.status(200).json({ statusCode: 200, data: result });    // Send response with status code and result
  } catch (error) {
    
    console.log(error);  // If an error occurs during the processing of the request, handle it
    res.status(400).json({ statusCode: 400, message: error.message }); 
  }
});

// API endpoint for subtraction
app.get('/subtract/:n1/:n2', (req, res) => {
  try {
    const n1 = parseFloat(req.params.n1); // convert first input to float
    const n2 = parseFloat(req.params.n2); // convert second input to float

   
    if (isNaN(n1) || isNaN(n2)) {  // Check if the input parameters are valid numbers
        
      throw new Error('Invalid input. Please enter valid numbers.'); // Throw an error if the input parameters are invalid
    }

    const result = n1 - n2; // perform subtraction
    
    res.status(200).json({ statusCode: 200, data: result }); // Send response with status code and result
  } catch (error) {
    console.log(error); // If an error occurs during the processing of the request, handle it
    res.status(400).json({ statusCode: 400, message: error.message }); 
  }
});

// API endpoint for multiplication
app.get('/multiply/:n1/:n2', (req, res) => {
  try {
    const n1 = parseFloat(req.params.n1); // convert first input to float
    const n2 = parseFloat(req.params.n2); // convert second input to float

    
    if (isNaN(n1) || isNaN(n2)) { // Check if the input parameters are valid numbers
      throw new Error('Invalid input. Please enter valid numbers.'); // Throw an error if the input parameters are invalid
    }

    const result = n1 * n2; // perform multiplication
    res.status(200).json({ statusCode: 200, data: result }); // Send response with status code and result
  } catch (error) {
    console.log(error);  // If an error occurs during the processing of the request, handle it
    res.status(400).json({ statusCode: 400, message: error.message }); 
  }
});

// API endpoint for division
app.get('/divide/:n1/:n2', (req, res) => {
    try {
      const n1 = parseFloat(req.params.n1);
      const n2 = parseFloat(req.params.n2);
  
     
      if (isNaN(n1) || isNaN(n2)) { // Check if the input parameters are valid numbers
        throw new Error('Invalid input. Please enter valid numbers.'); // Throw an error if the input parameters are invalid
      }
  
      // Check if divisor is zero
      if (n2 === 0) {
        throw new Error('Cannot divide by zero.'); // Throw an error if the divisor is zero
      }
  
      const result = n1 / n2;   // Perform division.
      res.status(200).json({ statusCode: 200, data: result });  // Send response with status code and result
    } catch (error) {    
      console.log(error);   // If an error occurs during the processing of the request, handle it
      res.status(400).json({ statusCode: 400, message: error.message });
    }
  });
  
  // Start the server on port 9886
  app.listen(9886, () => {
    console.log('Server listening on port 9886');
  });
