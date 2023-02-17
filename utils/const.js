export const DB_URL = 'mongodb+srv://sanich123:17011987@backend-base.0mm68j9.mongodb.net/?retryWrites=true&w=majority';
export const PORT = process.env.PORT || 3000;
export const ERR_MSG = "We haven't find object with this id";

export const VALID_REQUEST = 'Your request should containt all four properties: name, date, mistakes, speed. All the properties should contain valid value. ';
export const DATA_BASE = 'We couldn\'t be able to request database. Check your network';

export const NAME_ERR = 'Name should be more than 2 symbols';
export const SPEED_ERR = 'Speed can\'t be empty string or zero';
export const MISTAKES_ERR = 'Mistakes can be only number. Zero is allowed';
export const DATE_ERR = 'Date should be valid date';
