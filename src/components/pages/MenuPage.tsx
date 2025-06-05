import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';
import { Container, Section } from '../common/Container';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { equipmentItems } from '../../data/sampleData';

const PageHeader = styled(Section)`
  background: linear-gradient(
    135deg,
    rgba(27, 54, 93, 0.95) 0%,
    rgba(44, 95, 65, 0.9) 35%,
    rgba(201, 169, 97, 0.85) 70%,
    rgba(247, 147, 30, 0.8) 100%
  ), url('/images/equipment-hero.jpg');
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

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  flex-wrap: wrap;
`;

const FilterButton = styled(Button)<{ active: boolean }>`
  background: ${({ active, theme }) => 
    active 
      ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.tertiary})` 
      : 'transparent'};
  color: ${({ active, theme }) => 
    active ? theme.colors.white : theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ active, theme }) => active ? theme.shadows.md : 'none'};

  &:hover {
    background: ${({ active, theme }) => 
      active 
        ? `linear-gradient(135deg, ${theme.colors.secondary}, ${theme.colors.highlight})` 
        : `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.tertiary})`};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    transform: translateY(-2px);
  }
`;

const EquipmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const EquipmentItem = styled(motion.div)``;

const EquipmentItemCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const EquipmentItemImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg} 0 0;
  margin: -${({ theme }) => theme.spacing.lg} -${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg} -${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
`;

const EquipmentItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const EquipmentItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const EquipmentItemTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  flex: 1;
`;

const EquipmentItemPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const EquipmentItemDescription = styled.p`
  color: ${({ theme }) => theme.colors.neutral[600]};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex: 1;
`;

const EquipmentItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const EquipmentDetails = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.neutral[600]};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailLabel = styled.span`
  font-weight: 600;
`;

const DetailValue = styled.span``;

// Price formatting function for South African Rand
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

export const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(equipmentItems.map(item => item.category)))];
  
  const filteredItems = selectedCategory === 'All' 
    ? equipmentItems 
    : equipmentItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle>Event Equipment Catalog</PageTitle>
          <PageSubtitle>
            Browse our comprehensive collection of quality event equipment for your special occasions
          </PageSubtitle>
        </Container>
      </PageHeader>

      <Section>
        <Container>
          <FilterSection>
            {categories.map((category) => (
              <FilterButton
                key={category}
                variant="outline"
                size="sm"
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </FilterButton>
            ))}
          </FilterSection>

          <EquipmentGrid>
            {filteredItems.map((item, index) => (
              <EquipmentItem
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <EquipmentItemCard variant="elevated">
                  <EquipmentItemImage>
                    <Package size={40} />
                  </EquipmentItemImage>
                  <EquipmentItemContent>
                    <EquipmentItemHeader>
                      <EquipmentItemTitle>{item.name}</EquipmentItemTitle>
                      <EquipmentItemPrice>{formatPrice(item.pricePerDay)}/day</EquipmentItemPrice>
                    </EquipmentItemHeader>
                    
                    <EquipmentItemDescription>
                      {item.description}
                    </EquipmentItemDescription>
                    
                    <EquipmentDetails>
                      {item.dimensions && (
                        <DetailRow>
                          <DetailLabel>Dimensions:</DetailLabel>
                          <DetailValue>{item.dimensions}</DetailValue>
                        </DetailRow>
                      )}
                      {item.material && (
                        <DetailRow>
                          <DetailLabel>Material:</DetailLabel>
                          <DetailValue>{item.material}</DetailValue>
                        </DetailRow>
                      )}
                      {item.color && (
                        <DetailRow>
                          <DetailLabel>Color:</DetailLabel>
                          <DetailValue>{item.color}</DetailValue>
                        </DetailRow>
                      )}
                      {item.quantity && (
                        <DetailRow>
                          <DetailLabel>Available:</DetailLabel>
                          <DetailValue>{item.quantity} units</DetailValue>
                        </DetailRow>
                      )}
                    </EquipmentDetails>
                    
                    <EquipmentItemFooter>
                      <Button variant="outline" size="sm">
                        Add to Quote
                      </Button>
                    </EquipmentItemFooter>
                  </EquipmentItemContent>
                </EquipmentItemCard>
              </EquipmentItem>
            ))}
          </EquipmentGrid>
        </Container>
      </Section>
    </>
  );
};
