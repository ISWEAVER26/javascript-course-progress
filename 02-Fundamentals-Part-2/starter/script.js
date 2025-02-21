// STRICT MODE
//---------------------------------------------------------------------//
'use strict';
// Strict mode prevents us from doing certain things, and gives 
// error messages in places where they would otherwise fail silently
// MUST BE FIRST LINE OF FILE

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // purposefully misspelt
if (hasDriversLicense) console.log('I can drive');

// Without strict mode, no error and nothing is logged
// With strict mode, we are given the error 'hasDriverLicense is not
// defined'

const interface = 'Audio';