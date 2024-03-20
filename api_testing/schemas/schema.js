"use strict";

// Importaçao frameworks
const Joi = require("joi");
const validTitles = ["Mr", "Ms", "Miss", "Mrs", "Madame", "Monsieur"];
const validCountrys = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"];

const schemaName = Joi.object({
    title: Joi.string().valid(...validTitles).required(),
    first: Joi.string().required(),
    last: Joi.string().required(),
});

const schemaStreet = Joi.object({
    number: Joi.number().integer().positive().required(),
    name: Joi.string().required(),
});

// Joi.number().precision(10) é usado para definir a precisão do número de ponto flutuante.
// Ao validar os schemaCoordinates, Joi automaticamente converterá as strings em números de ponto flutuante
// e em seguida verificará se eles estão dentro dos intervalos especificados.
const schemaCoordinates = Joi.object({
    latitude: Joi.number().precision(10).min(-90).max(90).required(),
    longitude: Joi.number().precision(10).min(-180).max(180).required(),
});

const schemaTimezone = Joi.object({
    offset: Joi.string().required(),
    description: Joi.string().required(),
});

const schemaLocation = Joi.object({
    street: schemaStreet,
    city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
    postcode: Joi.number().integer().positive().required(),
    coordinates: schemaCoordinates,
    timezone: schemaTimezone,
});

const schemaLogin = Joi.object({
    uuid: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    salt: Joi.string().required(),
    md5: Joi.string().required(),
    sha1: Joi.string().required(),
    sha256: Joi.string().required(),
});

const schemaDobAndRegistered = Joi.object({
    date: Joi.date().iso().required(),
    age: Joi.number().integer().positive().required(),
});

const schemaId = Joi.object({
    name: Joi.string().required(),
    value: Joi.string().required(),
});

const schemaPicture = Joi.object({
    large: Joi.string().uri().required(),
    medium: Joi.string().uri().required(),
    thumbnail: Joi.string().uri().required(),
});

const schemaResults = Joi.object({
    gender: Joi.string().required(),
    name: schemaName,
    location: schemaLocation,
    email: Joi.string().email().required(),
    login: schemaLogin,
    dob: schemaDobAndRegistered,
    registered: schemaDobAndRegistered,
    phone: Joi.string().required(),
    cell: Joi.string().required(),
    id: schemaId,
    picture: schemaPicture,
    nat: Joi.string().valid(...validCountrys).required(),
});

const schemaInfo = Joi.object({
    seed: Joi.string().required(),
    results: Joi.number().integer().positive().required(),
    page: Joi.number().integer().positive().required(),
    version: Joi.string().required(),
});

const schemaAPI = Joi.object({
    results: Joi.array().items(schemaResults),
    info: schemaInfo,
});

module.exports = {
    schemaAPI,
};