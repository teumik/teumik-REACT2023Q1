import { Modal } from '../Modal/Modal';
import { Product } from '../ProductItem/ProductItem';
import { ProductItemMore } from '../ProductItemMore/ProductItemMore';

interface Props {
  isPending: boolean;
  showModal: boolean;
  onClose: () => void;
  product: Product | undefined;
}

function ProductModal({ isPending, showModal, onClose, product }: Props) {
  return (
    <Modal
      isPending={isPending}
      showModal={showModal}
      onClose={onClose}
    >
      <ProductItemMore
        product={product}
        onClose={onClose}
      />
    </Modal>
  );
}

export { ProductModal };
