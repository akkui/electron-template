document.getElementById("button").onclick = function() {
    document.getElementById("message").innerHTML = "Someone has clicked in the button."
    document.getElementById("button").disabled = true

    setTimeout(function () {
        document.getElementById("message").innerHTML = "The button hasn't been clicked."
        document.getElementById("button").disabled = false
    }, 1500);
}
