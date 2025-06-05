import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { Container, Section } from '../common/Container';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { menuItems } from '../../data/sampleData';

const PageHeader = styled(Section)`
  background: linear-gradient(
    rgba(44, 62, 80, 0.8),
    rgba(232, 184, 109, 0.8)
  ), url('/images/menu-hero.jpg');
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

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  flex-wrap: wrap;
`;

const FilterButton = styled(Button)<{ active: boolean }>`
  background-color: ${({ active, theme }) => 
    active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => 
    active ? theme.colors.white : theme.colors.neutral[600]};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const MenuItem = styled(motion.div)``;

const MenuItemCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MenuItemImage = styled.div`
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

const MenuItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MenuItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const MenuItemTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  flex: 1;
`;

const MenuItemPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const MenuItemDescription = styled.p`
  color: ${({ theme }) => theme.colors.neutral[600]};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex: 1;
`;

const MenuItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const MenuItemTags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
`;

const Tag = styled.span<{ variant: 'vegetarian' | 'vegan' }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ variant, theme }) => 
    variant === 'vegan' ? theme.colors.success : theme.colors.primary};
  font-weight: 500;
`;

const AllergenInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

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
  
  const categories = ['All', ...Array.from(new Set(menuItems.map(item => item.category)))];
  
  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle>Traditional South African Menu</PageTitle>
          <PageSubtitle>
            Discover the rich flavors of South Africa - from heritage braais to Cape Malay curries
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

          <MenuGrid>
            {filteredItems.map((item, index) => (
              <MenuItem
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MenuItemCard variant="elevated">
                  <MenuItemImage>
                    {item.name}
                  </MenuItemImage>
                  <MenuItemContent>
                    <MenuItemHeader>
                      <MenuItemTitle>{item.name}</MenuItemTitle>
                      <MenuItemPrice>{formatPrice(item.price)}</MenuItemPrice>
                    </MenuItemHeader>
                    
                    <MenuItemDescription>
                      {item.description}
                    </MenuItemDescription>
                    
                    <MenuItemFooter>
                      <MenuItemTags>
                        {item.isVegan && (
                          <Tag variant="vegan">
                            <Leaf size={16} />
                            Vegan
                          </Tag>
                        )}
                        {item.isVegetarian && !item.isVegan && (
                          <Tag variant="vegetarian">
                            <Leaf size={16} />
                            Vegetarian
                          </Tag>
                        )}
                      </MenuItemTags>
                      
                      <Button variant="outline" size="sm">
                        Add to Quote
                      </Button>
                    </MenuItemFooter>
                    
                    {item.allergens && item.allergens.length > 0 && (
                      <AllergenInfo>
                        Contains: {item.allergens.join(', ')}
                      </AllergenInfo>
                    )}
                  </MenuItemContent>
                </MenuItemCard>
              </MenuItem>
            ))}
          </MenuGrid>
        </Container>
      </Section>
    </>
  );
};
