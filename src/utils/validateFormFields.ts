import { RefObject } from 'react';
import { RefsLinks } from '../components/CustomForm/CustomForm';
import { capitalize } from './stringHelpers';
import { getCurrentDate, getParseDate } from './dateHelpers';

interface ReturnAction {
  ok: boolean;
  type: string;
  field?: keyof RefsLinks;
}

class FormValidation {
  private validatePolicy = (field: RefObject<HTMLInputElement>) => {
    const node = field.current;
    if (!node) return { ok: false, type: 'node' };
    if (!node.checked) return { ok: false, type: 'Field must be checked' };
    return { ok: true, type: '' };
  };

  private validateImage = (field: RefObject<HTMLInputElement>) => {
    const imageError = { ok: false, type: 'Upload image' };
    const node = field.current;
    if (!node) return { ok: false, type: 'node' };
    const { files } = node;
    if (files?.length === 0) return imageError;
    const image = files?.[0];
    const type = image?.type.split('/')?.[0];
    if (type !== 'image') return imageError;
    return { ok: true, type: '' };
  };

  private validateCountry = (field: RefObject<HTMLSelectElement>) => {
    const node = field.current;
    if (!node) return { ok: false, type: 'node' };
    const { value } = node;
    if (value === '') return { ok: false, type: 'Field cannot be empty' };
    return { ok: true, type: '' };
  };

  private validateGenders = (field: RefObject<HTMLDivElement>) => {
    const node = field.current;
    if (!node) return { ok: false, type: 'node' };
    const isChecked = [...node.children].some((el) => {
      const [option] = el.children;
      if (!(option instanceof HTMLInputElement)) return false;
      if (option.checked) return true;
      return false;
    });
    if (!isChecked) return { ok: false, type: 'Field cannot be empty' };
    return { ok: true, type: '' };
  };

  private validateBirthDate = (field: RefObject<HTMLInputElement>) => {
    const node = field.current;
    if (!node) return { ok: false, type: 'node' };
    const { value } = node;
    if (value === '') return { ok: false, type: 'Field cannot be empty' };
    const currentDate = getCurrentDate();
    const { year: currentyear } = getParseDate(currentDate);
    const { year } = getParseDate(value);
    if (new Date(currentDate) < new Date(value)) {
      return { ok: false, type: 'You are not birth in future' };
    }
    if (+year < +currentyear - 120) return { ok: false, type: 'You are not immortal' };
    return { ok: true, type: '' };
  };

  private validateFullName = (field: RefObject<HTMLInputElement>) => {
    const node = field.current;
    if (!node) return { ok: false, type: 'node' };
    const { value } = node;
    if (value === '') return { ok: false, type: 'Field cannot be empty' };
    const isCapitalized = value === capitalize(value);
    if (!isCapitalized) return { ok: false, type: 'First letter must be capital' };
    return { ok: true, type: '' };
  };

  validateFormFields = (fields: RefsLinks): ReturnAction => {
    const { firstName, lastName, birthDate, genders, country, image, policy } = fields;
    const firstNameValidation = this.validateFullName(firstName);
    if (!firstNameValidation.ok) return { ...firstNameValidation, field: 'firstName' };
    const lastNameValidation = this.validateFullName(lastName);
    if (!lastNameValidation.ok) return { ...lastNameValidation, field: 'lastName' };
    const birthDateValidation = this.validateBirthDate(birthDate);
    if (!birthDateValidation.ok) return { ...birthDateValidation, field: 'birthDate' };
    const countryValidation = this.validateCountry(country);
    if (!countryValidation.ok) return { ...countryValidation, field: 'country' };
    const gendersValidation = this.validateGenders(genders);
    if (!gendersValidation.ok) return { ...gendersValidation, field: 'genders' };
    const imageValidation = this.validateImage(image);
    if (!imageValidation.ok) return { ...imageValidation, field: 'image' };
    const policyValidation = this.validatePolicy(policy);
    if (!policyValidation.ok) return { ...policyValidation, field: 'policy' };
    return { ok: true, type: '' };
  };
}

const { validateFormFields } = new FormValidation();

export { validateFormFields };
