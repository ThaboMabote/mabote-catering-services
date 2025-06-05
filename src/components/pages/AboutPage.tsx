import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Award, Heart, Utensils, Users } from 'lucide-react';
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
      icon: <Utensils size={32} />,
      title: 'Local Ingredients',
      description: 'We source fresh ingredients from local South African farmers and suppliers, supporting our communities.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Ubuntu Spirit',
      description: 'Our Ubuntu philosophy drives us to create memorable experiences that bring people together.'
    },
    {
      icon: <Users size={32} />,
      title: 'Cultural Heritage',
      description: 'We celebrate South Africa\'s diverse culinary traditions from Cape Malay to traditional Zulu cuisine.'
    },
    {
      icon: <Award size={32} />,
      title: 'Authentic Excellence',
      description: 'We strive for authenticity in every traditional recipe and innovation in modern interpretations.'
    }
  ];

  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle>About Mabote Catering</PageTitle>
          <PageSubtitle>
            Celebrating South African flavors and bringing our rich culinary heritage to your special moments
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
                <h2>Our Heritage</h2>
                <p>
                  Founded in 2019 by Chef Nomsa Mabote in Johannesburg, Mabote Catering began with a vision to share 
                  authentic South African flavors with the world. Growing up in Limpopo, Chef Nomsa learned traditional 
                  cooking from her grandmother, blending time-honored recipes with modern culinary techniques.
                </p>
                <p>
                  What started as a small operation serving traditional braais has grown into one of South Africa's most 
                  celebrated catering companies, known for our authentic Cape Malay curries, perfectly seasoned potjiekos, 
                  and unforgettable braai experiences.
                </p>
                <p>
                  Today, we're proud to serve communities across Gauteng, Western Cape, and KwaZulu-Natal, bringing the 
                  warmth of South African hospitality to weddings, corporate events, and heritage celebrations.
                </p>
              </StoryContent>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <StoryImage>
                Chef Nomsa in Action
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
