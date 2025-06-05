import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Container } from '../common/Container';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing['3xl']} 0 ${({ theme }) => theme.spacing.lg} 0;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.neutral[300]};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral[300]};
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[600]};
  padding-top: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[400]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const CompanyDescription = styled.p`
  color: ${({ theme }) => theme.colors.neutral[300]};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterSection>
            <h3>Mabote Equipment Rental</h3>
            <CompanyDescription>
              Providing quality event equipment across South Africa. From elegant weddings to 
              corporate conferences, we help create memorable experiences with our comprehensive 
              range of tables, chairs, linens, and event accessories.
            </CompanyDescription>
            <SocialLinks>
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </SocialLink>
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <h3>Quick Links</h3>
            <FooterLinks>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/menu">Equipment</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <h3>Services</h3>
            <FooterLinks>
              <FooterLink to="/services#wedding">Wedding Equipment</FooterLink>
              <FooterLink to="/services#corporate">Corporate Events</FooterLink>
              <FooterLink to="/services#party">Party Equipment</FooterLink>
              <FooterLink to="/services#traditional">Traditional Events</FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <h3>Contact Info</h3>
            <ContactInfo>
              <ContactItem>
                <Phone size={18} />
                <span>+27 11 123 4567</span>
              </ContactItem>
              <ContactItem>
                <Mail size={18} />
                <span>info@maboteequipment.co.za</span>
              </ContactItem>
              <ContactItem>
                <MapPin size={18} />
                <span>123 Equipment Street<br />Johannesburg, GP 2000<br />South Africa</span>
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
          <p>&copy; 2024 Mabote Equipment Rental Services. All rights reserved.</p>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};
