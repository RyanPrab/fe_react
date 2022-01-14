import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
const ProductCard = dynamic(() => import ('./ProductCard'), { ssr: false });

const Section = styled.div.attrs(() => ({
  className: `container`
}))``;

const Content = styled.div.attrs(() => ({
  className: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6`
}))``;

export default function ProductList(props) {
  const { products } = props;
  return (
    <Section>
      <Content>
        {
          products?.map((product, index) => {
            return (
              <ProductCard
                key={index}
                product={product}
              />
            )
          })
        }
      </Content>
    </Section>
  )
}
