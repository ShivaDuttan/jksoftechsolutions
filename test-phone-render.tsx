import React from 'react';
import { renderToString } from 'react-dom/server';
import PhoneInput from 'react-phone-number-input';

const CustomSelect = () => <div className="MY_CUSTOM_SELECT" />;

console.log(renderToString(<PhoneInput value="" onChange={() => {}} countrySelectComponent={CustomSelect} />));
