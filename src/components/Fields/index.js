import InputComponent from './Input';
import SelectComponent from './Select';

import FieldWrapper from './FieldWrapper';


export const Input = FieldWrapper(InputComponent);
export const Select = FieldWrapper(SelectComponent);

