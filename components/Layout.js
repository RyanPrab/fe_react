import React from "react";
import styled from "styled-components";

const Section = styled.div.attrs(() => ({
  className: `flex justify-center`
}))``;

const PageContainer = styled.div.attrs(() => ({
  className: `container`
}))``;

export default function Layout(props) {
  return (
    <Section>
      <PageContainer>
        {props.children}
      </PageContainer>
    </Section>
  )
}
