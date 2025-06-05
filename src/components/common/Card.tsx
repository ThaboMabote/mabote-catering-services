import React from 'react';
import styled, { css } from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

const CardVariants = {
  default: css`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.base};
    border: none;
  `,
  elevated: css`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border: none;
    
    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.xl};
      transform: translateY(-2px);
    }
  `,
  outlined: css`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: none;
    border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
  `
};

const CardPadding = {
  sm: css`
    padding: ${({ theme }) => theme.spacing.md};
  `,
  md: css`
    padding: ${({ theme }) => theme.spacing.lg};
  `,
  lg: css`
    padding: ${({ theme }) => theme.spacing.xl};
  `
};

const StyledCard = styled.div<CardProps>`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.base};
  
  ${({ variant = 'default' }) => CardVariants[variant]}
  ${({ padding = 'md' }) => CardPadding[padding]}
`;

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  children,
  className
}) => {
  return (
    <StyledCard variant={variant} padding={padding} className={className}>
      {children}
    </StyledCard>
  );
};
