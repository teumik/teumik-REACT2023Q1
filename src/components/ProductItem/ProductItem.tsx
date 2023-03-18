import { Component } from 'react';
import style from './productItem.module.scss';
import { StockLogo } from '../StockLogo';
import { RatingLogo } from '../RatingLogo/RatingLogo';

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

interface ProductItemProps {
  product: Product;
}

class ProductItem extends Component<ProductItemProps> {
  render() {
    const { product } = this.props;
    const {
      category,
      description,
      image,
      price,
      rating: { count, rate },
      title,
    } = product;
    return (
      <article className={style.product}>
        <picture className={style.picture}>
          <source srcSet={image} />
          <img src={image} alt={title} loading="lazy" />
        </picture>
        <h3>{title}</h3>
        <p className={style.description}>{description}</p>
        <h4 className={style.price}>${price}</h4>
        <div className={style.category}>{category}</div>
        <div className={style.stats}>
          <span>
            <StockLogo />
            {count}
          </span>
          <span>
            <RatingLogo />
            {rate}
          </span>
        </div>
      </article>
    );
  }
}

export { ProductItem };
