import React, { FC, useCallback, useMemo, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { Row } from 'antd';
import Product from './Product';
import { Gutter } from 'antd/es/grid/row';

interface GalleryItem {
  img: string;
  title?: string | React.ReactElement;
  desc?: string | React.ReactElement;
}

interface IProps {
  items: GalleryItem[];
  type?: 'card' | 'image';
  gutter?: Gutter | [Gutter, Gutter];
  bgProps?: any;
  [x: string]: any;
}

export const Gallery: FC<IProps> = React.memo(({ items, type, gutter, bgProps }) => {

  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const images = useMemo(() => items.map((i: GalleryItem) => i.img), [items]);

  const handleClose = useCallback((e?: any) => setIsOpen(false), [setIsOpen]);
  const handleOpen = useCallback((i: number) => (e?: any) => {
    setPhotoIndex(i);
    setIsOpen(true);
  }, [setIsOpen]);

  const handleNext = useCallback(() => setPhotoIndex((p: number) => (p + images.length - 1) % images.length), [setPhotoIndex, images]);
  const handleBack = useCallback(() => setPhotoIndex((p: number) => (p + 1) % images.length), [setPhotoIndex, images]);

  const mainSrc = useMemo(() => images[photoIndex], [images, photoIndex]);
  const nextSrc = useMemo(() => images[(photoIndex + 1) % images.length], [images, photoIndex]);
  const prevSrc = useMemo(() => images[(photoIndex + images.length - 1) % images.length], [images, photoIndex]);

  const Items = useMemo(() => items.map((item: GalleryItem, i: number) => (
    <Product key={i} onClick={handleOpen(i)} image={item.img} title={item.title} desc={item.desc} bgProps={bgProps} reveal />
  )), [items, handleOpen])

  return (
    <>

      <Row gutter={gutter}>
        {Items}
      </Row>
      {isOpen && (
        <Lightbox
          mainSrc={mainSrc}
          nextSrc={nextSrc}
          prevSrc={prevSrc}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleNext}
          onMoveNextRequest={handleBack}
        />
      )}
    </>
  );
});

Gallery.defaultProps = {
  gutter: [8, 8],
  type: 'card'
};

export default Gallery;
