let myPromise = new Promise(function(resolve, reject) {
  let success = true; // Change this to false to see the reject case
  setTimeout(function() {
    if (success) {
      resolve("Task completed successfully!");
    } else {
      reject("Something went wrong.");
    }
  }, 2000); // Simulates a 2-second delay
});
// Use the promise
myPromise
  .then(function(result) {
    console.log("Success: " + result);
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });

  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log("Data:", data);
  })
  .catch(function(error) {
    console.error("Error:", error);
  });


