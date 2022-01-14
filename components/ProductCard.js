import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Section = styled.div.attrs(() => ({
  className: `flex flex-col rounded-md shadow-md space-y-4 p-2 cursor-pointer`
}))``;

const ImageContainer = styled.div.attrs(() => ({
  className: `relative w-full h-48 sm:h-52 md:h-64`
}))``;

const ProductName = styled.div.attrs(() => ({
  className: `text-md`
}))``;

const ProductPrice = styled.div.attrs(() => ({
  className: `text-md font-semibold`
}))``;

export default function ProductCard(props) {
  const { product } = props;
  const PlaceholderImage =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNs/Q4AAgcBfrwSE/wAAAAASUVORK5CYII=';
  const productImage = product?.sis_small_image ? `https://${product?.sis_small_image}` : PlaceholderImage;
  const price = product?.price?.regularPrice?.amount?.value || 0;

  return (
    <Section>
      <ImageContainer>
        <Image
          src={productImage}
          alt={product?.name}
          layout="fill"
        />
      </ImageContainer>
      <ProductName>
        {product?.name}
      </ProductName>
      <ProductPrice>
        {price.toLocaleString('id-ID')}
      </ProductPrice>
    </Section>
  )
}
