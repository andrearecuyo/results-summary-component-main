// Fetch navigation items from navigation.json File
function fetchData() {
  // Initiates a network request using the Fetch API to retrieve the JSON data from the specified URL
  fetch('../data.json')
  //Parse the response body as JSON
    .then((res) => res.json())
    //Receives the parsed JSON data as the data parameter and executes a callback function to process the data
    .then((data) => {
      //To accumulate the HTML markup
      let output = "";
      data.forEach((item) => {
        output += 
        `<li>
          <div class="category">
            <img src="${item.icon}" alt="${item.category}"/>
            <h4>${item.category}</h4>
          </div>
          <p>${item.score} <span>/ 100</span></p>
        </li>`
      })
      //Updates the content of the element 
      document.getElementById('data').innerHTML = output;
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('data').innerHTML = 'Error Loading Data'
    })
  }
  
fetchData();