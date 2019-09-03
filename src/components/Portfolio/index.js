import React from 'react';
import { SectionWrapper, DecoBar, SectionContent, PortfolioWrapper} from './style';
import PortfolioItem from '../PortfolioItem'

const Portfolio = () => {
  return (
    <SectionWrapper>
      <h1>
        Portfolio
        <DecoBar></DecoBar>
      </h1>
      <SectionContent>
        <PortfolioWrapper>
          <PortfolioItem></PortfolioItem>
          <PortfolioItem></PortfolioItem>
          <PortfolioItem></PortfolioItem>
          <PortfolioItem></PortfolioItem>
          <PortfolioItem></PortfolioItem>
          <PortfolioItem></PortfolioItem>
          <PortfolioItem></PortfolioItem>
        </PortfolioWrapper>
      </SectionContent>
    </SectionWrapper>
  );
};

export default Portfolio;