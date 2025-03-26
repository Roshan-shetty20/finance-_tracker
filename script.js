document.addEventListener("DOMContentLoaded", function() {
    fetch("/transactions")
        .then(response => response.json())
        .then(data => {
            console.log("Transactions:", data);
        });
});
