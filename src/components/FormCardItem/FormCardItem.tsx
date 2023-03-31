import style from './formCardItem.module.scss';
import { capitalize } from '../../utils/stringHelpers';

export interface CardItem {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  gender: string;
  imageFile: string;
  isPolicyAccept: boolean | null;
}

interface FormCardItemProps {
  cardData: CardItem;
}

function FormCardItem({ cardData }: FormCardItemProps) {
  const { firstName, lastName, birthDate, country, gender, imageFile, isPolicyAccept } = cardData;
  return (
    <article className={style.card}>
      <picture className={style.picture}>
        <source srcSet={imageFile} />
        <img
          src={imageFile}
          alt={`${firstName} ${lastName}`}
          loading="lazy"
        />
      </picture>
      <h3>
        {firstName} {lastName}
      </h3>
      <p>
        Birth Date: <span>{new Date(birthDate).toDateString()}</span>
      </p>
      <p>
        Gender: <span>{capitalize(gender)}</span>
      </p>
      <p>
        Country: <span>{capitalize(country)}</span>
      </p>
      <p>
        Accept private policy: <span>{isPolicyAccept ? 'Yes' : 'No'}</span>
      </p>
    </article>
  );
}

export { FormCardItem };
