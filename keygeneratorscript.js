function generateKey() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let keyLength = 16;
    let key = "";
    
    for (let i = 0; i < keyLength; i++) {
        key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    document.getElementById("key").textContent = key;

    var intent = document.createElement("a");
    intent.href = "intent://savekey/" + key + "#Intent;scheme=keygenerator;package=com.fhm.modmenu;end;";

    document.body.appendChild(intent);
    intent.click();
}

function copyText() {
    var text = document.getElementById("key").innerText;
    navigator.clipboard.writeText(text).then(() => {
        //alert("Text copied: " + text);
    });
}
