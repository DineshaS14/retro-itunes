
const ITUNES_API = "https://itunes.apple.com/search";

document.getElementById("searchButton").addEventListener("click", async () => {
    const query = document.getElementById("searchBar").value.trim();
    const mediaType = document.getElementById("mediaType").value;
    if (!query) {
        alert("Please enter a search term.");
        return;
    }

    const url = `${ITUNES_API}?term=${encodeURIComponent(query)}&media=${mediaType}&limit=10`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data from iTunes API.");
        const data = await response.json();
        displayResults(data.results);
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching results. Please try again.");
    }
});

function displayResults(results) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results
    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
        return;
    }

    results.forEach((item) => {
        const resultDiv = document.createElement("div");
        resultDiv.className = "result";

        // Add image if available
        if (item.artworkUrl100) {
            const img = document.createElement("img");
            img.src = item.artworkUrl100;
            img.alt = item.trackName || "Artwork";
            resultDiv.appendChild(img);
        }

        // Add title and artist
        const title = document.createElement("p");
        title.innerHTML = `<strong>Title:</strong> ${item.trackName || "N/A"}`;
        resultDiv.appendChild(title);

        if (item.artistName) {
            const artist = document.createElement("p");
            artist.innerHTML = `<strong>Artist:</strong> ${item.artistName}`;
            resultDiv.appendChild(artist);
        }

        resultsContainer.appendChild(resultDiv);
    });
}
