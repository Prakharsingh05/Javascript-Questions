//explain memoization?

//Memoization is a technique for storing the results of expensive function calls in a cache so that subsequent calls to the same function with the same arguments can be served from cache without having to recompute the result.
// This can significantly improve the performance of a program, especially if the function is called many times with the same arguments.

//In JavaScript, memoization can be implemented using a simple object. For example, the following code defines a memoized version of the factorial function:

function factorial(n) {
    // Create a cache object.
    var cache = {};
  
    // Check if the result is already in the cache.
    if (cache[n]) {
      return cache[n];
    }
  
    // Compute the result and store it in the cache.
    var result = n * factorial(n - 1);
    cache[n] = result;
  
    // Return the result.
    return result;
  }

  //When this function is called with the same argument multiple times, the result will be served from cache without having to recompute it. This can significantly improve the performance of the function, especially if it is called many times.