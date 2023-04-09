import { Product } from '../ProductItem/ProductItem';
import style from './ProductItemMore.module.scss';
import { decapitalize } from '../../utils/stringHelpers';

interface Props {
  product: Product | undefined;
  onClose: () => void;
}

function ProductItemMore({ product, onClose }: Props) {
  if (!product) {
    return (
      <>
        <button
          type="button"
          onClick={onClose}
          data-testid="close"
        >
          &times;
        </button>
        <article className={style.product}>
          <h3>No item</h3>
        </article>
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        className={style.button}
        onClick={onClose}
        data-testid="close"
      >
        &times;
      </button>
      <article className={style.product}>
        <picture className={style.picture}>
          <source srcSet={product.image} />
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
          />
        </picture>
        <div className={style.description}>
          <h3>{product.name}</h3>
          <span className={`${style.status} ${style[decapitalize(product.status)]}`}>
            {product.status}
          </span>
        </div>
        <span>
          Species: <span>{product.species}</span>
        </span>
        {product.type && (
          <span>
            Type: <span>{product.type}</span>
          </span>
        )}
        <span>
          Gender: <span>{product.gender}</span>
        </span>
        <span>
          Origin: <span>{product.origin.name}</span>
        </span>
        <span>
          Location: <span>{product.location.name}</span>
        </span>
        <span>
          Episodes:
          <div className={style.list__container}>
            <span />
            <ul className={style.episodes}>
              {product.episode.map((item) => (
                <li key={item}>Episone #{item.split('/').at(-1)}</li>
              ))}
            </ul>
            <span />
          </div>
        </span>
        <span>
          Created: <span>{new Date(product.created).toLocaleString()}</span>
        </span>
      </article>
    </>
  );
}

export { ProductItemMore };
