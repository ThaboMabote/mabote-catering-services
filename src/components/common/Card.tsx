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
    border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  `,
  elevated: css`
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.white} 0%, ${({ theme }) => theme.colors.accent} 100%);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
    
    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.xl};
      transform: translateY(-4px);
      border-color: ${({ theme }) => theme.colors.secondary};
    }
  `,
  outlined: css`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    border: 2px solid ${({ theme }) => theme.colors.neutral[300]};
    
    &:hover {
      border-color: ${({ theme }) => theme.colors.secondary};
      box-shadow: ${({ theme }) => theme.shadows.md};
    }
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
