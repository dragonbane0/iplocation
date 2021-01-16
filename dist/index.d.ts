declare namespace ipLocation {
    interface LocationData {
        latitude: number;
        longitude: number;
        city: string;
        region: {
            name: string;
            code: string;
        };
        country: {
            name: string;
            code: string;
            iso3: string;
            capital: string;
            tld: string;
            population: number;
            area: number;
            callingCode: string;
            postalCode: string;
            timezone: {
                code: string;
                offset: string;
            };
            currency: {
                name: string;
                code: string;
            };
            languages: string[];
        };
        continent: {
            code: string;
            inEu: boolean;
        };
        provider: {
            isp: string;
            asn: string;
        };
    }
    interface ReservedData {
        reserved: boolean;
    }
    type ReturnType = (LocationData & ReservedData) | ReservedData;
}
/**
Get ip location information.
@param ip The ipv4 address to get the information for.
@example
```
const ipLocation = require("ip-location");

(async () => {
    await ipLocation("172.217.167.78");
    //=> { latitude: -33.8591, longitude: 151.2002, region: { name: "New South Wales" ... } ... }
})();
```
*/
declare function ipLocation(ip: string): Promise<ipLocation.ReturnType>;
export default ipLocation;
