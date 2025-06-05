import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Award, Heart, Package, Users } from 'lucide-react';
import { Container, Section } from '../common/Container';
import { Card } from '../common/Card';
import { teamMembers } from '../../data/sampleData';

const PageHeader = styled(Section)`
  background: linear-gradient(
    rgba(44, 62, 80, 0.8),
    rgba(232, 184, 109, 0.8)
  ), url('/images/about-hero.jpg');
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

const StorySection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.neutral[100]};
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
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
  
  p {
    color: ${({ theme }) => theme.colors.neutral[600]};
    line-height: 1.8;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const StoryImage = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
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
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
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
  background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const TeamMemberName = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TeamMemberPosition = styled.p`
  color: ${({ theme }) => theme.colors.primary};
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
