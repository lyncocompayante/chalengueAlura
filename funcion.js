function encryptText() {
    let input = document.getElementById('inputText').value;
    let output = input.replace(/e/g, 'enter')
                      .replace(/i/g, 'imes')
                      .replace(/a/g, 'ai')
                      .replace(/o/g, 'ober')
                      .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = output;
}

function decryptText() {
    let input = document.getElementById('inputText').value;
    let output = input.replace(/enter/g, 'e')
                      .replace(/imes/g, 'i')
                      .replace(/ai/g, 'a')
                      .replace(/ober/g, 'o')
                      .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = output;
}

function copyText() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
