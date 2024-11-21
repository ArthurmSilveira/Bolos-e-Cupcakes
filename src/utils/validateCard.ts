import { CardType } from '../types';

export const validateCard = (number: string): boolean => {
  // Remove espaços e traços
  const cleanNumber = number.replace(/[\s-]/g, '');
  
  // Verifica se contém apenas números
  if (!/^\d+$/.test(cleanNumber)) return false;
  
  // Algoritmo de Luhn
  let sum = 0;
  let isEven = false;
  
  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
};

export const getCardType = (number: string): CardType | null => {
  const patterns = {
    visa: /^4/,
    mastercard: /^5[1-5]/,
    amex: /^3[47]/,
    elo: /^(401178|401179|431274|438935|451416|457393|457631|457632|504175|627780|636297|636368|636369)/,
    hipercard: /^(606282|637095|637599|637609|637612)/,
  };

  const cleanNumber = number.replace(/[\s-]/g, '');
  
  if (patterns.visa.test(cleanNumber)) return 'visa';
  if (patterns.mastercard.test(cleanNumber)) return 'mastercard';
  if (patterns.amex.test(cleanNumber)) return 'amex';
  if (patterns.elo.test(cleanNumber)) return 'elo';
  if (patterns.hipercard.test(cleanNumber)) return 'hipercard';
  
  return null;
};