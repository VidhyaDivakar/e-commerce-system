### Reflections from E-commerce Project



#### How you implemented TypeScript features and OOP principles.

I used TypeScript mainly to make sure my data and functions stay type-safe and predictable. Instead of working with plain JavaScript objects, I created a Product class where I defined all required properties like id, title, price, category, discountPercentage, rating, stock, brand, and thumbnail. This helped me enforce a fixed structure for every product coming from the API. 
I also used constructors to initialize objects properly when converting API data into class instances. This helped me follow real-world object modeling, where each product is an object with both data and behavior.

#### The challenges you encountered and how you overcame them.

One of the main challenges I faced was understanding how TypeScript classes work with API data. The API returns plain JSON objects, but my application required Product class instances. Initially, I was directly using the API response, but then I realized I could not use class methods like displayDetails() on plain objects.

To solve this, I used the map() function to convert each API object into a proper Product instance using the new Product() constructor. This made sure every product had both properties and methods.

#### How you handled asynchronous operations and error management?

I handled asynchronous operations using async/await so the code looks more synchronous and readable. In my apiService.ts, I created an async function fetchAllProducts() that calls the API using fetch(). Since API calls take time, I used await to wait for the response before moving to the next step.

To handle errors, I wrapped the entire API call inside a try/catch block. Inside the try, I checked response.ok to ensure the request was successful. If it was not successful, I manually threw an error using throw new Error() so it gets handled in the catch block.
