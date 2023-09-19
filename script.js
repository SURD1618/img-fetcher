async function showImage() {
    const imageURL = document.getElementById("imageURL").value;
    const imageContainer = document.getElementById("imageContainer");
    const downloadLink = document.getElementById("downloadLink");
    if (!imageURL) 
    {
        alert("Please enter a valid image URL.");
        return;
    }

    // Create an image element
    const img = document.createElement("img");
    img.src = imageURL;
    img.width = 400; // Set a width for the image (adjust as needed)

    // Append the image to the container
    imageContainer.innerHTML = "";
    imageContainer.appendChild(img);

    // Set the download link attributes
    downloadLink.href = await fetchImageAsBlob(imageURL);
    downloadLink.style.display = "block";
}

async function fetchImageAsBlob(url) 
{
    const response = await fetch(url);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
}
