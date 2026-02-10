//Thanks ChatGPT 😁

// Helper function to convert ArrayBuffer to Base64 string
function arrayBufferToBase64(buffer) {
    const binary = String.fromCharCode.apply(null, new Uint8Array(buffer));
    return btoa(binary);
}

// Helper function to convert Base64 string to ArrayBuffer
function base64ToArrayBuffer(base64) {
    const binary = atob(base64);
    const len = binary.length;
    const buffer = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        buffer[i] = binary.charCodeAt(i);
    }
    return buffer.buffer;
}

// Derive a key from a passphrase
async function deriveKey(passphrase, salt) {
    const enc = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey(
        "raw",
        enc.encode(passphrase),
        "PBKDF2",
        false,
        ["deriveKey"]
    );

    return window.crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: salt,
            iterations: 100000,
            hash: "SHA-256"
        },
        keyMaterial,
        {
            name: "AES-GCM",
            length: 256
        },
        false,
        ["encrypt", "decrypt"]
    );
}

// Encrypt data using AES-GCM
async function encryptData(data, passphrase) {
    const enc = new TextEncoder();
    const salt = window.crypto.getRandomValues(new Uint8Array(16));  // Generate random salt
    const iv = window.crypto.getRandomValues(new Uint8Array(12));    // Generate random initialization vector (IV)

    const key = await deriveKey(passphrase, salt);

    const encrypted = await window.crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv
        },
        key,
        enc.encode(data)
    );

    // Return encrypted data with salt and IV
    return {
        cipherText: arrayBufferToBase64(encrypted),
        iv: arrayBufferToBase64(iv),
        salt: arrayBufferToBase64(salt)
    };
}

// Decrypt data using AES-GCM
async function decryptData(encryptedData, passphrase) {
    const { cipherText, iv, salt } = encryptedData;
    const key = await deriveKey(passphrase, base64ToArrayBuffer(salt));

    const decrypted = await window.crypto.subtle.decrypt(
        {
            name: "AES-GCM",
            iv: base64ToArrayBuffer(iv)
        },
        key,
        base64ToArrayBuffer(cipherText)
    );

    const dec = new TextDecoder();
    return dec.decode(decrypted);
}

const encryptedData = {
    "cipherText": "nDrgxbOWc59XVD5HCb9qloGm3aPoUXCWq7nHvu6kysR6xnNcozjKdFiyXMq3AxDd6LFxsMZC8w==",
    "iv": "YnFmdYgo8jfdDO8f",
    "salt": "j51qx+x5VTiSYiXlv2H2LA=="
}

const encryptKey = async () => {
    let secretData = prompt("Enter Data to be encrypted: ")
    let passkey = prompt("Enter a passphrase (secret) to encrypt the API key: ")
    console.log(await encryptData(secretData, passkey))
}

const saveKey = (key) => {
    window.localStorage.setItem('APIKey', key)
}

const decryptAndSaveKey = async (passphrase) => {
    const decryptedData = await decryptData(encryptedData, passphrase)
    saveKey(decryptedData)
    return true
}

//uses the input as decyption secret, must be the same string used to encrypt the data
//   if unsuccessful, uses as api key
const submitApiKey = async (apiKeyInput) => {
    try {
        await decryptAndSaveKey(apiKeyInput)
        return { 'success': true, 'message': 'Your key has been decrypted and saved' }
    } catch {
        saveKey(apiKeyInput)
        return { 'success': true, 'message': 'Your key has been saved' }
    }
}

export { decryptAndSaveKey, encryptKey, encryptedData, submitApiKey }