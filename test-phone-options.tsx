import React from 'react';
import { renderToString } from 'react-dom/server';
import PhoneInput from 'react-phone-number-input';

const CustomSelect = (props: any) => {
  console.log('Props keys:', Object.keys(props));
  console.log('First option:', props.options[0]);
  return <select />;
}

renderToString(<PhoneInput value="" onChange={() => {}} countrySelectComponent={CustomSelect} />);
