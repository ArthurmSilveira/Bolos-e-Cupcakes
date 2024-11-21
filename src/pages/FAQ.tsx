import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "Por quanto tempo os cupcakes permanecem frescos?",
      answer: "Nossos cupcakes são melhores quando consumidos em até 48 horas após a compra quando armazenados em temperatura ambiente. Podem durar até 5 dias quando refrigerados em recipiente hermético."
    },
    {
      question: "Vocês aceitam encomendas personalizadas?",
      answer: "Sim! Adoramos criar encomendas personalizadas para ocasiões especiais. Por favor, entre em contato com pelo menos 48 horas de antecedência."
    },
    {
      question: "Vocês fazem entrega?",
      answer: "Sim, oferecemos entrega em um raio de 15 km da nossa loja. As taxas de entrega variam conforme a distância."
    },
    {
      question: "Os cupcakes são livres de nozes?",
      answer: "Embora ofereçamos opções sem nozes, nossa cozinha processa produtos que contêm nozes. Por favor, informe-nos sobre alergias ao fazer o pedido."
    },
    {
      question: "Vocês têm opções veganas ou sem glúten?",
      answer: "Sim! Temos uma seleção de cupcakes veganos e sem glúten disponíveis diariamente. Consulte nosso cardápio ou ligue com antecedência para sabores específicos."
    },
    {
      question: "Qual é a política de devolução?",
      answer: "Devido à natureza dos nossos produtos, não podemos aceitar devoluções. No entanto, se você não estiver satisfeito com sua compra, entre em contato conosco em até 24 horas e resolveremos a situação."
    },
    {
      question: "Posso congelar os cupcakes?",
      answer: "Sim, nossos cupcakes podem ser congelados por até 3 meses. Descongele em temperatura ambiente por 2-3 horas antes de servir."
    },
    {
      question: "Vocês fazem envios para todo o país?",
      answer: "Atualmente, oferecemos apenas entrega local e retirada na loja para garantir o frescor e a qualidade dos nossos produtos."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h1>
          <p className="text-xl text-gray-600">Tudo o que você precisa saber sobre nossos cupcakes</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;