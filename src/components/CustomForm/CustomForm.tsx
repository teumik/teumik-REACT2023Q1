import { FieldErrors, SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';
import style from './customForm.module.scss';
import { FullNameInput } from './FullNameInput/FullNameInput';
import { BirthDateInput } from './BirthDateInput/BirthDateInput';
import { CountrySelect } from './CountrySelect/CountrySelect';
import { GenderRadio } from './GenderRadio/GenderRadio';
import { ImageInput } from './ImageInput/ImageInput';
import { PolicyCheckbox } from './PolicyCheckbox/PolicyCheckbox';
import { CardItem } from '../FormCardItem/FormCardItem';
import { StatusMessage } from './StatusMessage/StatusMessage';
import { formValidation } from '../../utils/formValidation';
import { useSendingStatus } from '../../hooks/useSendingStatus';

interface CustomFormProps {
  addCard: (card: CardItem) => void;
}

export interface FormData {
  agreement: boolean;
  country: string;
  date: string;
  firstName: string;
  lastName: string;
  gender: string | null;
  image: FileList;
}

export interface Register {
  register: UseFormRegister<FormData>;
}

export interface ErrorsProp {
  errors: FieldErrors<FormData>;
}

function CustomForm({ addCard }: CustomFormProps) {
  const { isSending, toggleSendingStatus } = useSendingStatus();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    resolver: formValidation,
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const url = URL.createObjectURL(data.image[0]);
    addCard({ ...data, image: url, gender: data.gender });
    toggleSendingStatus();
    setTimeout(() => {
      reset();
      toggleSendingStatus();
    }, 2000);
  };

  return (
    <form
      className={style.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FullNameInput
        register={register}
        errors={errors}
      />
      <BirthDateInput
        register={register}
        errors={errors}
      />
      <CountrySelect
        register={register}
        errors={errors}
      />
      <GenderRadio
        styleName={style['radio-container']}
        register={register}
        errors={errors}
      />
      <ImageInput
        styleName={style['file-container']}
        register={register}
        errors={errors}
      />
      <PolicyCheckbox
        styleName={style['policy-container']}
        register={register}
        errors={errors}
      />
      <div className={style['button-container']}>
        {!isSending ? (
          <button type="submit">Submit</button>
        ) : (
          <StatusMessage message="Form data was saved" />
        )}
      </div>
    </form>
  );
}

export { CustomForm };
