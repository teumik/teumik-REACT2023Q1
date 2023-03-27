import { Component, FormEvent, ReactPropTypes, RefObject, createRef } from 'react';
import style from './customForm.module.scss';
import { FullNameInput } from './FullNameInput/FullNameInput';
import { BirthDateInput } from './BirthDateInput/BirthDateInput';
import { CountrySelect } from './CountrySelect/CountrySelect';
import { GenderRadio } from './GenderRadio/GenderRadio';
import { ImageInput } from './ImageInput/ImageInput';
import { PolicyCheckbox } from './PolicyCheckbox/PolicyCheckbox';
import { CardItem } from '../FormCardItem/FormCardItem';
import { StatusMessage } from './StatusMessage/StatusMessage';
import { validateFormFields } from '../../utils/validateFormFields';

interface CustomFormProps extends Partial<ReactPropTypes> {
  addCard: (card: CardItem) => void;
}

export interface RefsLinks {
  firstName: RefObject<HTMLInputElement>;
  lastName: RefObject<HTMLInputElement>;
  birthDate: RefObject<HTMLInputElement>;
  country: RefObject<HTMLSelectElement>;
  image: RefObject<HTMLInputElement>;
  policy: RefObject<HTMLInputElement>;
  genders: RefObject<HTMLDivElement>;
}

interface MessageAction {
  type: string;
  field: keyof RefsLinks;
}

interface CustomFormState {
  sendStatus: boolean;
  timeoutId: NodeJS.Timeout | null;
  errors: {
    firstName: [boolean, string];
    lastName: [boolean, string];
    birthDate: [boolean, string];
    country: [boolean, string];
    genders: [boolean, string];
    image: [boolean, string];
    policy: [boolean, string];
  };
}

class CustomForm extends Component<CustomFormProps, CustomFormState> {
  private formRef: RefObject<HTMLFormElement>;
  private refsProps: RefsLinks;
  private cardProps: CardItem;

  constructor(props: CustomFormProps) {
    super(props);
    this.state = {
      sendStatus: false,
      timeoutId: null,
      errors: {
        firstName: [false, ''],
        lastName: [false, ''],
        birthDate: [false, ''],
        country: [false, ''],
        genders: [false, ''],
        image: [false, ''],
        policy: [false, ''],
      },
    };
    this.formRef = createRef();
    this.refsProps = {
      firstName: createRef(),
      lastName: createRef(),
      birthDate: createRef(),
      country: createRef(),
      image: createRef(),
      policy: createRef(),
      genders: createRef(),
    };
    this.cardProps = {
      firstName: '',
      lastName: '',
      birthDate: '',
      country: '',
      gender: '',
      imageFile: '',
      isPolicyAccept: null,
    };
  }

  componentWillUnmount() {
    this.clearTimeoutId();
  }

  setSendStatus = (sendStatus: boolean) => {
    this.setState((state) => ({ ...state, sendStatus }));
  };

  private setTimeoutId = (cb: () => void) => {
    this.setState((state) => ({
      ...state,
      timeoutId: setTimeout(() => {
        cb();
      }, 2000),
    }));
  };

  private clearTimeoutId = () => {
    const { timeoutId } = this.state;
    if (timeoutId) clearTimeout(timeoutId);
    this.setState((state) => ({
      ...state,
      timeoutId: null,
    }));
  };

  private resetForm = () => {
    this.formRef.current?.reset();
  };

  private sendFormData = () => {
    const { addCard } = this.props;
    addCard(this.cardProps);
    this.setSendStatus(true);
    this.clearTimeoutId();
    this.setTimeoutId(() => {
      this.setSendStatus(false);
      this.resetForm();
    });
  };

  private setImageFile = (): Promise<boolean> => {
    const { image } = this.refsProps;
    return new Promise((res) => {
      const imageFile = image.current?.files?.[0];
      if (imageFile) {
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = () => {
          Object.assign(this.cardProps, { ...this.cardProps, imageFile: reader.result });
          res(true);
        };
        return;
      }
      res(true);
    });
  };

  private setGender = () => {
    const { genders } = this.refsProps;
    const gendersContainer = genders.current;
    if (!gendersContainer) return;
    [...gendersContainer.children].forEach((el) => {
      const node = el.children[0];
      if (!(node instanceof HTMLInputElement)) return;
      if (!node.checked) return;
      Object.assign(this.cardProps, { ...this.cardProps, gender: node.value });
    });
  };

  private setValidationMessage = ({ type, field }: MessageAction) => {
    this.refsProps[field].current?.focus();
    this.setState((state) => ({
      ...state,
      errors: {
        ...state.errors,
        [field]: [true, type],
      },
    }));
  };

  private removeErrors = () => {
    const { errors } = this.state;
    const resetedErrors = Object.fromEntries(
      Object.entries(errors).map(([field]) => [field, [false, '']])
    );
    this.setState((state) => ({
      ...state,
      errors: {
        ...errors,
        ...resetedErrors,
      },
    }));
  };

  private validateForm = () => {
    const result = validateFormFields(this.refsProps);
    if (result.ok) return true;
    const { type, field } = result;
    if (!field) return false;
    this.setValidationMessage({ type, field });
    return false;
  };

  private submit = async (event: FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault();
    this.removeErrors();
    const isValide = this.validateForm();
    if (!isValide) return;
    const { firstName, lastName, birthDate, country, policy } = this.refsProps;
    Object.assign(this.cardProps, {
      firstName: firstName.current?.value,
      lastName: lastName.current?.value,
      birthDate: birthDate.current?.value,
      country: country.current?.value,
      isPolicyAccept: policy.current?.checked,
    });
    this.setGender();
    await this.setImageFile();
    this.sendFormData();
  };

  render() {
    const {
      sendStatus,
      errors: {
        firstName: firstNameError,
        lastName: lastNameError,
        birthDate: birthDateError,
        country: countryError,
        genders: gendersError,
        image: imageError,
        policy: policyError,
      },
    } = this.state;
    const { firstName, lastName, birthDate, genders, country, image, policy } = this.refsProps;
    return (
      <form
        className={style.form}
        onSubmit={this.submit}
        ref={this.formRef}
      >
        <FullNameInput
          firstNameRef={firstName}
          lastNameRef={lastName}
          firstError={firstNameError}
          lastError={lastNameError}
        />
        <BirthDateInput
          birthDateRef={birthDate}
          error={birthDateError}
        />
        <CountrySelect
          countryRef={country}
          error={countryError}
        />
        <GenderRadio
          styleName={style['radio-container']}
          genderRef={genders}
          error={gendersError}
        />
        <ImageInput
          styleName={style['file-container']}
          imageRef={image}
          error={imageError}
        />
        <PolicyCheckbox
          styleName={style['policy-container']}
          policyRef={policy}
          error={policyError}
        />
        <div className={style['button-container']}>
          {!sendStatus ? <button type="submit">Submit</button> : <StatusMessage />}
        </div>
      </form>
    );
  }
}

export { CustomForm };
