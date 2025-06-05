import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Users, Package, Check } from 'lucide-react';
import { Container, Section } from '../common/Container';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { services } from '../../data/sampleData';

const PageHeader = styled(Section)`
  background: linear-gradient(
    rgba(44, 62, 80, 0.8),
    rgba(232, 184, 109, 0.8)
  ), url('/images/services-hero.jpg');
  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: ${({ theme }) => theme.spacing['5xl']} 0;
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const PageSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${({ theme }) => theme.spacing['3xl']};
`;

const ServiceCard = styled(motion.div)``;

const ServiceCardContent = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
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

const ServiceTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.neutral[600]};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.6;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing['2xl']} 0;
  flex: 1;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.neutral[700]};
  text-align: left;
  
  svg {
    color: ${({ theme }) => theme.colors.success};
    flex-shrink: 0;
  }
`;

const PricingInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const PricingLabel = styled.p`
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const PricingAmount = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  margin: 0;
`;

const ProcessSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.neutral[100]};
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const ProcessStep = styled(motion.div)`
  text-align: center;
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
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

export const ServicesPage: React.FC = () => {
  const serviceIcons = {
    briefcase: <Briefcase size={40} />,
    heart: <Heart size={40} />,
    users: <Users size={40} />,
    flag: <Package size={40} />
  };

  const processSteps = [
    {
      number: '1',
      title: 'Initial Consultation',
      description: 'We discuss your event details, equipment needs, and venue requirements'
    },
    {
      number: '2',
      title: 'Equipment Selection',
      description: 'Our team helps you choose the perfect tables, chairs, and accessories'
    },
    {
      number: '3',
      title: 'Delivery Planning',
      description: 'We coordinate delivery, setup timing, and pickup arrangements'
    },
    {
      number: '4',
      title: 'Event Day Setup',
      description: 'Our team delivers, sets up, and ensures everything is perfect'
    }
  ];

  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle>Our Equipment Rental Services</PageTitle>
          <PageSubtitle>
            From intimate gatherings to grand celebrations, we provide quality 
            event equipment rental services tailored to your unique needs and vision.
          </PageSubtitle>
        </Container>
      </PageHeader>

      <Section>
        <Container>
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCardContent variant="elevated" padding="lg">
                  <ServiceIcon>
                    {serviceIcons[service.icon as keyof typeof serviceIcons]}
                  </ServiceIcon>
                  
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  
                  <FeaturesList>
                    {service.features.map((feature, featureIndex) => (
                      <FeatureItem key={featureIndex}>
                        <Check size={20} />
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeaturesList>
                  
                  {service.pricing && (
                    <PricingInfo>
                      <PricingLabel>Starting from</PricingLabel>
                      <PricingAmount>
                        {service.pricing.type === 'custom' 
                          ? 'Custom Pricing'
                          : `R${service.pricing.amount}/${service.pricing.type.replace('_', ' ')}`
                        }
                      </PricingAmount>
                    </PricingInfo>
                  )}
                  
                  <Button variant="primary" size="md" fullWidth>
                    Get Quote
                  </Button>
                </ServiceCardContent>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </Section>

      <ProcessSection>
        <Container>
          <SectionTitle>Our Process</SectionTitle>
          <SectionSubtitle>
            We make planning your event equipment simple and stress-free with our streamlined process
          </SectionSubtitle>
          
          <ProcessGrid>
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StepNumber>{step.number}</StepNumber>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </ProcessStep>
            ))}
          </ProcessGrid>
        </Container>
      </ProcessSection>
    </>
  );
};
