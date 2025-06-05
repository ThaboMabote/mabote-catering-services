import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Package, Users, Calendar, Star } from 'lucide-react';
import { Container, Section } from '../common/Container';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { services, testimonials } from '../../data/sampleData';

const HeroSection = styled.section`
  background: linear-gradient(
    135deg,
    rgba(27, 54, 93, 0.95) 0%,
    rgba(44, 95, 65, 0.9) 35%,
    rgba(201, 169, 97, 0.85) 70%,
    rgba(247, 147, 30, 0.8) 100%
  ), url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, transparent 20%, rgba(27, 54, 93, 0.2) 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent 30%, rgba(201, 169, 97, 0.1) 50%, transparent 70%);
    animation: shimmer 8s infinite linear;
    pointer-events: none;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(27, 54, 93, 0.3);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }

  span {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.highlight});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  opacity: 0.9;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(27, 54, 93, 0.2);
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
`;

const StatsSection = styled(Section)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent} 0%, ${({ theme }) => theme.colors.neutral[100]} 100%);
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  text-align: center;
`;

const StatCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const StatIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.tertiary});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: all ${({ theme }) => theme.transitions.base};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const StatNumber = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  font-weight: 700;
`;

const StatLabel = styled.p`
  color: ${({ theme }) => theme.colors.neutral[600]};
  margin: 0;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const ServiceCard = styled(motion.div)`
  text-align: center;
`;

const ServiceIcon = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
`;

const TestimonialsSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.neutral[100]};
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const TestimonialCard = styled(Card)`
  text-align: center;
`;

const StarRating = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.highlight});
    margin: ${({ theme }) => theme.spacing.md} auto 0;
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
  font-weight: 300;
`;

export const HomePage: React.FC = () => {
  const stats = [
    { icon: <Package size={32} />, number: '500+', label: 'Events Equipped' },
    { icon: <Users size={32} />, number: '10,000+', label: 'Happy Guests Seated' },
    { icon: <Calendar size={32} />, number: '5+', label: 'Years Experience' },
    { icon: <Star size={32} />, number: '4.9', label: 'Average Rating' }
  ];

  return (
    <>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Premium <span>Event Equipment</span> Rental
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              From elegant weddings to corporate conferences, we provide quality tables, chairs, 
              linens, and equipment to make your South African events unforgettable.
            </HeroSubtitle>
            <HeroButtons
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button variant="primary" size="lg">
                View Equipment
              </Button>
              <Button variant="outline" size="lg">
                Get Quote
              </Button>
            </HeroButtons>
          </HeroContent>
        </Container>
      </HeroSection>

      <StatsSection>
        <Container>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StatIcon>{stat.icon}</StatIcon>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </Container>
      </StatsSection>

      <Section>
        <Container>
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubtitle>
            We specialize in providing quality equipment for memorable events and celebrations
          </SectionSubtitle>
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated">
                  <ServiceIcon>
                    <Package size={40} />
                  </ServiceIcon>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Card>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </Section>

      <TestimonialsSection>
        <Container>
          <SectionTitle>What Our Clients Say</SectionTitle>
          <SectionSubtitle>
            Don't just take our word for it - hear from our satisfied clients
          </SectionSubtitle>
          <TestimonialsGrid>
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard variant="elevated">
                  <StarRating>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill={i < testimonial.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </StarRating>
                  <p>"{testimonial.comment}"</p>
                  <h4>{testimonial.name}</h4>
                  <p style={{ color: '#6C757D', fontSize: '14px' }}>
                    {testimonial.event}
                  </p>
                </TestimonialCard>
              </motion.div>
            ))}
          </TestimonialsGrid>
        </Container>
      </TestimonialsSection>
    </>
  );
};
