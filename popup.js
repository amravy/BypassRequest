// Create a function to copy the text from a textarea to the clipboard

function copyToClipboard() {
    var copyText = document.getElementById("codeRequest");
    copyText.select();
    document.execCommand("copy");
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}