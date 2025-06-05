import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ChefHat, Users, Calendar, Star } from 'lucide-react';
import { Container, Section } from '../common/Container';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { services, testimonials } from '../../data/sampleData';

const HeroSection = styled.section`
  background: linear-gradient(
    135deg,
    rgba(0, 35, 149, 0.8),
    rgba(0, 119, 73, 0.8),
    rgba(255, 184, 28, 0.8),
    rgba(255, 121, 0, 0.7)
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
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 184, 28, 0.1) 50%, transparent 70%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  opacity: 0.9;
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
`;

const StatsSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.neutral[100]};
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
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
`;

const StatNumber = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
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
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const HomePage: React.FC = () => {
  const stats = [
    { icon: <ChefHat size={32} />, number: '500+', label: 'Events Catered' },
    { icon: <Users size={32} />, number: '10,000+', label: 'Happy Guests' },
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
              Authentic South African Catering
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              From traditional braais to heritage celebrations, we bring the rich flavors 
              and warm hospitality of South Africa to your special events.
            </HeroSubtitle>
            <HeroButtons
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button variant="primary" size="lg">
                Traditional Menu
              </Button>
              <Button variant="outline" size="lg">
                Book Your Braai
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
            We specialize in creating memorable dining experiences for every occasion
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
                    <ChefHat size={40} />
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
