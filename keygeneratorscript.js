function generateKey() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let keyLength = 16;
    let key = "";
    
    for (let i = 0; i < keyLength; i++) {
        key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    document.getElementById("key").textContent = key;
}

function copyText() {
    var text = document.getElementById("key").innerText;
    navigator.clipboard.writeText(text).then(() => {
        //alert("Text copied: " + text);
    });
}
