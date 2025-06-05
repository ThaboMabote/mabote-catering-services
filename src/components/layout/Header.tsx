import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, X } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

const HeaderWrapper = styled.header`
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.white} 0%, ${({ theme }) => theme.colors.accent} 100%);
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.shadows.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} 0;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 800;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.base};
  
  &:hover {
    transform: scale(1.05);
    filter: brightness(1.2);
    text-shadow: 0 0 20px rgba(201, 169, 97, 0.3);
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.white};
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.lg};
    box-shadow: ${({ theme }) => theme.shadows.md};
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-weight: 500;
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.neutral[700]};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const CTAButton = styled(Button)`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <Container>
        <Nav>
          <Logo to="/" onClick={closeMobileMenu}>
            Mabote Equipment
          </Logo>
          
          <NavLinks isOpen={isMobileMenuOpen}>
            <NavLink to="/" onClick={closeMobileMenu}>
              Home
            </NavLink>
            <NavLink to="/menu" onClick={closeMobileMenu}>
              Equipment
            </NavLink>
            <NavLink to="/services" onClick={closeMobileMenu}>
              Services
            </NavLink>
            <NavLink to="/about" onClick={closeMobileMenu}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu}>
              Contact
            </NavLink>
            <CTAButton 
              variant="primary" 
              size="sm" 
              onClick={closeMobileMenu}
            >
              Get Quote
            </CTAButton>
          </NavLinks>
          
          <MobileMenuButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
};
