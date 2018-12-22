/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const GridBase = `
  background: rgba(0,0,0,0.5);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateX(-5px);
  }
`;

const Text = styled.div`
  ${tw('opacity-75 font-mono text-sm md:text-base')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  ${tw('text-white text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const GridOneThird = styled.div`
  ${tw('shadow-lg relative no-underline rounded-lg px-4 py-4 md:py-14 text-white w-full md:w-1/3')};
  ${GridBase}
`;

const GridHalf = styled.div`
  ${tw('shadow-lg relative no-underline rounded-lg px-4 py-4 md:py-14 text-white w-full md:w-1/2')};
  ${GridBase}
`;

const GridFull = styled.div`
  ${tw('shadow-lg relative no-underline rounded-lg px-4 py-4 md:py-14 text-white w-full')};
  ${GridBase}
`;

const GridTwoThird = styled.div`
  ${tw('shadow-lg relative no-underline rounded-lg px-4 py-4 md:py-14 text-white w-full md:w-2/3')};
  ${GridBase}
`;

export const AboutMeCardGridFull = ({ title, children }) => (
  <GridFull>
    <Text>{children}</Text>
    <Title>{title}</Title>
  </GridFull>
);

export const AboutMeCardGridOneThird = ({ title, children }) => (
  <GridOneThird>
    <Text>{children}</Text>
    <Title>{title}</Title>
  </GridOneThird>
);

export const AboutMeCardGridTwoThird = ({ title, children }) => (
  <GridTwoThird>
    <Text>{children}</Text>
    <Title>{title}</Title>
  </GridTwoThird>
);

export const AboutMeCardGridHalf = ({ title, children }) => (
  <GridHalf>
    <Text>{children}</Text>
    <Title>{title}</Title>
  </GridHalf>
);

export const AboutMeWrapper = styled.div`
  ${tw('flex flex-wrap md:flex-no-wrap mt-8 font-sans')};
  grid-gap: 2rem;
  @media (max-width: 1200px) {
    grid-gap: 1,5rem;
  }
  @media (max-width: 900px) {
    grid-gap: 1rem;
  }
`;

AboutMeCardGridOneThird.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};
AboutMeCardGridHalf.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};
AboutMeCardGridFull.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};
AboutMeCardGridTwoThird.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};
