import styled, { css } from 'styled-components';

interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
}

const MaxWidths = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%'
};

export const Container = styled.div<ContainerProps>`
  max-width: ${({ maxWidth = 'xl' }) => MaxWidths[maxWidth]};
  margin: 0 auto;
  width: 100%;
  
  ${({ padding = true }) =>
    padding &&
    css`
      padding-left: ${({ theme }) => theme.spacing.md};
      padding-right: ${({ theme }) => theme.spacing.md};
      
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding-left: ${({ theme }) => theme.spacing.lg};
        padding-right: ${({ theme }) => theme.spacing.lg};
      }
    `}
`;

export const Section = styled.section<{ padding?: 'sm' | 'md' | 'lg' }>`
  padding-top: ${({ padding = 'lg', theme }) => {
    switch (padding) {
      case 'sm': return theme.spacing['2xl'];
      case 'md': return theme.spacing['3xl'];
      case 'lg': return theme.spacing['4xl'];
      default: return theme.spacing['4xl'];
    }
  }};
  
  padding-bottom: ${({ padding = 'lg', theme }) => {
    switch (padding) {
      case 'sm': return theme.spacing['2xl'];
      case 'md': return theme.spacing['3xl'];
      case 'lg': return theme.spacing['4xl'];
      default: return theme.spacing['4xl'];
    }
  }};
`;
