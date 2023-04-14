import { useState } from 'react';
import { decapitalize } from '../../utils/stringHelpers';
import { useAnimation } from '../../hooks/useAnimation';
import style from './productItem.module.scss';
import { customFetch } from '../../utils/customFetch';
import { paths } from '../../routers/Paths';
import { ProductModal } from '../ProductModal/ProductModal';

interface CharacterLocation {
  name: string;
  url: string;
}

enum Genders {
  'Female',
  'Male',
  'Genderless',
  'unknown',
}

enum Status {
  'Dead',
  'Alive',
  'unknown',
}

export interface Product {
  id: number;
  name: string;
  status: keyof typeof Status;
  species: string;
  type: string;
  gender: keyof typeof Genders;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface ProductItemProps {
  product: Product;
}

function ProductItem({ product: { id, name, status, image } }: ProductItemProps) {
  const { isAnimated, onAnimate } = useAnimation();
  const [showModal, setShowModal] = useState(false);
  const [isPending, setPending] = useState<boolean>(false);
  const [item, setItem] = useState<Product>();

  const onCLick = async () => {
    onAnimate();
    setShowModal(true);
    setPending(true);
    customFetch<Product>({ url: `${paths.serverUrl}/${id}` }).then((data) => {
      setItem(data);
      setPending(false);
    });
  };

  return (
    <>
      <button
        className={`${style.container} ${isAnimated && style.animated}`}
        type="button"
        onClick={onCLick}
        data-testid={isAnimated && 'animate'}
      >
        <article className={style.product}>
          <picture className={style.picture}>
            <source srcSet={image} />
            <img
              src={image}
              alt={name}
              loading="lazy"
            />
          </picture>
          <div className={style.description}>
            <h3>{name}</h3>
            <span className={`${style.status} ${style[decapitalize(status)]}`}>{status}</span>
          </div>
        </article>
      </button>
      <ProductModal
        isPending={isPending}
        showModal={showModal}
        onClose={() => setShowModal(false)}
        product={item}
      />
    </>
  );
}

export { ProductItem };
