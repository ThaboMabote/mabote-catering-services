import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Award, Heart, Package, Users } from 'lucide-react';
import { Container, Section } from '../common/Container';
import { Card } from '../common/Card';
import { teamMembers } from '../../data/sampleData';

const PageHeader = styled(Section)`
  background: linear-gradient(
    135deg,
    rgba(27, 54, 93, 0.95) 0%,
    rgba(44, 95, 65, 0.9) 35%,
    rgba(201, 169, 97, 0.85) 70%,
    rgba(247, 147, 30, 0.8) 100%
  ), url('/images/about-hero.jpg');
  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: ${({ theme }) => theme.spacing['5xl']} 0;
  position: relative;
  
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
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(27, 54, 93, 0.3);
  position: relative;
  z-index: 2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const PageSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(27, 54, 93, 0.2);
  position: relative;
  z-index: 2;
`;

const StorySection = styled(Section)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}30, ${({ theme }) => theme.colors.neutral[50]});
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const StoryContent = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.highlight});
      border-radius: 2px;
    }
  }
  
  p {
    color: ${({ theme }) => theme.colors.neutral[600]};
    line-height: 1.8;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const StoryImage = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const ValueCard = styled(motion.div)`
  text-align: center;
`;

const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.glow};
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const TeamCard = styled(motion.div)``;

const TeamCardContent = styled(Card)`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TeamMemberImage = styled.div`
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  box-shadow: ${({ theme }) => theme.shadows.glow};
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const TeamMemberName = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: 700;
`;

const TeamMemberPosition = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TeamMemberBio = styled.p`
  color: ${({ theme }) => theme.colors.neutral[600]};
  line-height: 1.6;
  flex: 1;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.highlight});
    border-radius: 2px;
  }
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

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Package size={32} />,
      title: 'Quality Equipment',
      description: 'We provide high-quality, well-maintained equipment that meets professional event standards.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Ubuntu Spirit',
      description: 'Our Ubuntu philosophy drives us to create memorable experiences that bring people together.'
    },
    {
      icon: <Users size={32} />,
      title: 'Customer Service',
      description: 'We prioritize exceptional customer service and work closely with clients to exceed expectations.'
    },
    {
      icon: <Award size={32} />,
      title: 'Professional Excellence',
      description: 'We strive for excellence in every aspect of our service, from equipment quality to timely delivery.'
    }
  ];

  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle>About Mabote Equipment Rental</PageTitle>
          <PageSubtitle>
            Providing quality event equipment to make your South African celebrations unforgettable
          </PageSubtitle>
        </Container>
      </PageHeader>

      <StorySection>
        <Container>
          <StoryGrid>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <StoryContent>
                <h2>Our Journey</h2>
                <p>
                  Founded in 2019 by Nomsa Mabote in Johannesburg, Mabote Equipment Rental began with a vision to provide 
                  quality event equipment to communities across South Africa. Growing up in Limpopo, Nomsa saw how important 
                  celebrations were to bringing families and communities together.
                </p>
                <p>
                  What started as a small operation with a few tables and chairs has grown into one of South Africa's most 
                  trusted equipment rental companies, known for our reliable service, quality equipment, and attention to detail 
                  for every event.
                </p>
                <p>
                  Today, we're proud to serve communities across Gauteng, Western Cape, and KwaZulu-Natal, providing everything 
                  from elegant wedding setups to professional corporate equipment, always with the warmth of South African hospitality.
                </p>
              </StoryContent>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <StoryImage>
                Nomsa with Equipment
              </StoryImage>
            </motion.div>
          </StoryGrid>
        </Container>
      </StorySection>

      <Section>
        <Container>
          <SectionTitle>Our Values</SectionTitle>
          <SectionSubtitle>
            The principles that guide everything we do
          </SectionSubtitle>
          
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ValueIcon>{value.icon}</ValueIcon>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </ValueCard>
            ))}
          </ValuesGrid>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <SectionTitle>Meet Our Team</SectionTitle>
          <SectionSubtitle>
            The talented professionals who make every event exceptional
          </SectionSubtitle>
          
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamCard
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamCardContent variant="elevated" padding="lg">
                  <TeamMemberImage>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </TeamMemberImage>
                  <TeamMemberName>{member.name}</TeamMemberName>
                  <TeamMemberPosition>{member.position}</TeamMemberPosition>
                  <TeamMemberBio>{member.bio}</TeamMemberBio>
                </TeamCardContent>
              </TeamCard>
            ))}
          </TeamGrid>
        </Container>
      </Section>
    </>
  );
};
