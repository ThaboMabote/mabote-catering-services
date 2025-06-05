import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Container, Section } from '../common/Container';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { ContactForm } from '../../types';

const PageHeader = styled(Section)`
  background: linear-gradient(
    135deg,
    rgba(27, 54, 93, 0.95) 0%,
    rgba(44, 95, 65, 0.9) 35%,
    rgba(201, 169, 97, 0.85) 70%,
    rgba(247, 147, 30, 0.8) 100%
  ), url('/images/contact-hero.jpg');
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['4xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const ContactItem = styled(Card)`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  flex-shrink: 0;
  box-shadow: ${({ theme }) => theme.shadows.glow};
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const ContactDetails = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-weight: 700;
  }
  
  p {
    color: ${({ theme }) => theme.colors.neutral[600]};
    margin: 0;
    line-height: 1.6;
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const FormContainer = styled(Card)`
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing['2xl']};
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Label = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Input = styled.input<{ hasError?: boolean }>`
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ hasError, theme }) => 
    hasError ? theme.colors.error : theme.colors.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.base};
  transition: all ${({ theme }) => theme.transitions.fast};
  background-color: ${({ theme }) => theme.colors.white};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Select = styled.select<{ hasError?: boolean }>`
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ hasError, theme }) => 
    hasError ? theme.colors.error : theme.colors.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.base};
  transition: all ${({ theme }) => theme.transitions.fast};
  background-color: ${({ theme }) => theme.colors.white};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const TextArea = styled.textarea<{ hasError?: boolean }>`
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ hasError, theme }) => 
    hasError ? theme.colors.error : theme.colors.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.base};
  transition: all ${({ theme }) => theme.transitions.fast};
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.white};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  eventType: yup.string().required('Event type is required'),
  eventDate: yup.string().required('Event date is required'),
  guestCount: yup.number()
    .typeError('Guest count must be a number')
    .positive('Guest count must be positive')
    .integer('Guest count must be a whole number')
    .required('Guest count is required'),
  message: yup.string().required('Message is required')
});

export const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactForm>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      alert('Thank you for your inquiry! We will get back to you soon.');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  const contactItems = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: '+27 11 123 4567\nCall us for immediate assistance'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'info@maboteequipment.co.za\nWe respond within 24 hours'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      details: '123 Equipment Street\nJohannesburg, GP 2000\nSouth Africa'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: 'Mon-Fri: 8:00 AM - 5:00 PM\nSat: 9:00 AM - 2:00 PM\nSun: Closed'
    }
  ];

  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle>Get in Touch</PageTitle>
          <PageSubtitle>
            Ready to plan your next event? Contact us today for a personalized equipment rental quote 
            and let us help make your celebration unforgettable.
          </PageSubtitle>
        </Container>
      </PageHeader>

      <Section>
        <Container>
          <ContactGrid>
            <ContactInfo>
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ContactItem variant="elevated">
                    <ContactIcon>{item.icon}</ContactIcon>
                    <ContactDetails>
                      <h3>{item.title}</h3>
                      <p style={{ whiteSpace: 'pre-line' }}>{item.details}</p>
                    </ContactDetails>
                  </ContactItem>
                </motion.div>
              ))}
            </ContactInfo>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FormContainer variant="elevated" padding="lg">
                <h2>Send us a Message</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <FormRow>
                    <FormGroup>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        hasError={!!errors.name}
                        {...register('name')}
                      />
                      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                    </FormGroup>
                    
                    <FormGroup>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        hasError={!!errors.email}
                        {...register('email')}
                      />
                      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    </FormGroup>
                  </FormRow>

                  <FormRow>
                    <FormGroup>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        hasError={!!errors.phone}
                        {...register('phone')}
                      />
                      {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
                    </FormGroup>
                    
                    <FormGroup>
                      <Label htmlFor="eventType">Event Type *</Label>
                      <Select
                        id="eventType"
                        hasError={!!errors.eventType}
                        {...register('eventType')}
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="private">Private Party</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="other">Other</option>
                      </Select>
                      {errors.eventType && <ErrorMessage>{errors.eventType.message}</ErrorMessage>}
                    </FormGroup>
                  </FormRow>

                  <FormRow>
                    <FormGroup>
                      <Label htmlFor="eventDate">Event Date *</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        hasError={!!errors.eventDate}
                        {...register('eventDate')}
                      />
                      {errors.eventDate && <ErrorMessage>{errors.eventDate.message}</ErrorMessage>}
                    </FormGroup>
                    
                    <FormGroup>
                      <Label htmlFor="guestCount">Guest Count *</Label>
                      <Input
                        id="guestCount"
                        type="number"
                        min="1"
                        hasError={!!errors.guestCount}
                        {...register('guestCount')}
                      />
                      {errors.guestCount && <ErrorMessage>{errors.guestCount.message}</ErrorMessage>}
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <Label htmlFor="message">Message *</Label>
                    <TextArea
                      id="message"
                      placeholder="Tell us about your event, equipment needs, guest count, and any special requirements..."
                      hasError={!!errors.message}
                      {...register('message')}
                    />
                    {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
                  </FormGroup>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </Form>
              </FormContainer>
            </motion.div>
          </ContactGrid>
        </Container>
      </Section>
    </>
  );
};
