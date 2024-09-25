function updateModal(imgName) {
    console.log("Button was pressed. imgName = " + imgName);
    document.getElementById("modalImage").innerHTML = "<img src='" + imgName + "'>";
    console.log("<img src='" + imgName + "' class='w-100'>");
}