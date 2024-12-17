// Define the base URL for the iTunes API
const ITUNES_API = "https://itunes.apple.com/search";

// Add an event listener to the Search button for a "click" event
document.getElementById("searchButton").addEventListener("click", async () => {
    // Get the search query entered by the user and remove leading/trailing whitespace
    const query = document.getElementById("searchBar").value.trim();

    // Get the selected media type from the dropdown menu
    const mediaType = document.getElementById("mediaType").value;

    // If the query is empty, alert the user and stop further execution
    if (!query) {
        alert("Please enter a search term.");
        return; // Exit the function
    }

    // Construct the URL for the iTunes API request
    const url = `${ITUNES_API}?term=${encodeURIComponent(query)}&media=${mediaType}&limit=10`;

    try {
        // Fetch data from the iTunes API asynchronously
        const response = await fetch(url);

        // Check if the response is not okay (HTTP error), throw an error
        if (!response.ok) throw new Error("Failed to fetch data from iTunes API.");

        // Parse the response as JSON
        const data = await response.json();

        // Pass the results array to the displayResults function
        displayResults(data.results);
    } catch (error) {
        // Handle any errors during the fetch operation
        console.error("Error fetching data:", error); // Log the error to the console
        alert("An error occurred while fetching results. Please try again."); // Alert the user
    }
});

/**
 * Function to display search results dynamically on the page
 * @param {Array} results - An array of media items returned from the iTunes API
 */
function displayResults(results) {
    // Get the container where results will be displayed
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear any previous search results

    // If there are no results, display a "No results found" message
    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
        return; // Exit the function
    }

    // Loop through each item in the results array
    results.forEach((item) => {
        // Create a div element to hold each result
        const resultDiv = document.createElement("div");
        resultDiv.className = "result"; // Add a class for styling

        // Add the artwork image if it exists
        if (item.artworkUrl100) {
            const img = document.createElement("img");
            img.src = item.artworkUrl100; // Set the image source
            img.alt = item.trackName || "Artwork"; // Add an alt attribute for accessibility
            resultDiv.appendChild(img); // Append the image to the result div
        }

        // Add the track title (or show "N/A" if unavailable)
        const title = document.createElement("p");
        title.innerHTML = `<strong>Title:</strong> ${item.trackName || "N/A"}`;
        resultDiv.appendChild(title); // Append the title to the result div

        // Add the artist name if available
        if (item.artistName) {
            const artist = document.createElement("p");
            artist.innerHTML = `<strong>Artist:</strong> ${item.artistName}`;
            resultDiv.appendChild(artist); // Append the artist name to the result div
        }

        // Append the fully constructed result div to the results container
        resultsContainer.appendChild(resultDiv);
    });
}
