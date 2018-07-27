export default class RealtyProvider {
    url = "http://www.mocky.io/v2/5b2c9e292f00002a00ebd2d7";

    async getRealtyData() {
        var response = await fetch(this.url);
        return await response.json();
    }

}