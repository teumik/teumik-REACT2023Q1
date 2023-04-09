import { useState } from 'react';
import { decapitalize } from '../../utils/stringHelpers';
import { useAnimation } from '../../hooks/useAnimation';
import style from './productItem.module.scss';
import { Modal } from '../Modal/Modal';
import { ProductItemMore } from '../ProductItemMore/ProductItemMore';
import { customFetch } from '../../utils/customFetch';
import { paths } from '../../routers/Paths';

interface CharacterLocation {
  name: string;
  url: string;
}

export interface Product {
  id: number;
  name: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
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

function ProductItem({ product }: ProductItemProps) {
  const { id, name, status, image } = product;
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
      <Modal
        isPending={isPending}
        showModal={showModal}
        onClose={() => setShowModal(false)}
      >
        <ProductItemMore
          product={item}
          onClose={() => setShowModal(false)}
        />
      </Modal>
    </>
  );
}

export { ProductItem };
