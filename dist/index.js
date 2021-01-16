"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ky_universal_1 = __importDefault(require("ky-universal"));
const is_ip_1 = __importDefault(require("is-ip"));
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
async function ipLocation(ip) {
    if (typeof ip !== "string" || !is_ip_1.default.v4(ip)) {
        throw new TypeError("A valid ipv4 address must be provided!");
    }
    const { org, asn, latitude, longitude, city, reserved, region, region_code, country_name, country_code, country_code_iso3, country_capital, country_tld, country_population, country_calling_code, continent_code, in_eu, postal, timezone, utc_offset, currency, currency_name, languages, country_area } = await ky_universal_1.default(`https://ipapi.co/${ip}/json/`, { headers: { "User-Agent": "ZSR" } }).json();
    return reserved ? {
        reserved
    } : {
        latitude,
        longitude,
        city,
        reserved: Boolean(reserved),
        region: {
            name: region,
            code: region_code
        },
        country: {
            name: country_name,
            code: country_code,
            iso3: country_code_iso3,
            capital: country_capital,
            tld: country_tld,
            population: country_population,
            area: country_area,
            callingCode: country_calling_code,
            postalCode: postal,
            timezone: {
                code: timezone,
                offset: utc_offset
            },
            currency: {
                name: currency_name,
                code: currency
            },
            languages: languages ? languages.split(",") : []
        },
        continent: {
            code: continent_code,
            inEu: in_eu
        },
        provider: {
            isp: org,
            asn
        }
    };
}
exports.default = ipLocation;
module.exports = ipLocation;
module.exports.default = ipLocation; // eslint-disable-line @typescript-eslint/no-unsafe-member-access
//# sourceMappingURL=index.js.map