document.getElementById("searchButton").addEventListener("click", function () {
  const searchString = document.getElementById("Search").value.trim();
  console.log(searchString);
  fetch("superheroes.php?search=" + encodeURIComponent(searchString))
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(".result").innerHTML = data;
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementsByClassName("result").innerText =
        "An error occurred while fetching data.";
    });
});
