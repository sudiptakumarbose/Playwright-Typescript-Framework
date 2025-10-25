import cryptoJs from 'crypto-js'

export default class CommonUtils {
    private secretKey: string;
    /**
     * Initializing secret key
     */
    constructor() {

        if (process.env.SECRET_KEY) {
            this.secretKey = process.env.SECRET_KEY;
        } else {
            throw new Error("Please provide your unique credentials")
        }

    }
    /**
     * provides encrypted data from string
     * @param data 
     * @returns encryptedData
     */
    public encryptData(data: String) {
        const encryptedData = cryptoJs.AES.encrypt(data, this.secretKey).toString();
        console.log(encryptedData);
        return encryptedData;

    }
    /**
     * Provides decrypted data in a string format
     * @param data 
     * @returns decryptedData
     */

    public decryptData(encData: String) {
       const decryptedData=  cryptoJs.AES.decrypt(encData,this.secretKey).toString(cryptoJs.enc.Utf8);
       return decryptedData;

    }

}