import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Check } from 'lucide-react';

interface PaymentSuccessProps {
  paymentMethod: 'credit' | 'pix' | 'boleto';
  pixCode?: string;
  boletoUrl?: string;
  orderNumber: string;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({
  paymentMethod,
  pixCode,
  boletoUrl,
  orderNumber,
}) => {
  return (
    <div className="text-center">
      <div className="mb-6">
        <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <Check className="h-6 w-6 text-green-600" />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Pedido Realizado com Sucesso!
      </h2>
      <p className="text-gray-600 mb-6">
        Número do pedido: {orderNumber}
      </p>

      {paymentMethod === 'pix' && pixCode && (
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-4">
            Escaneie o QR Code abaixo para realizar o pagamento via PIX
          </p>
          <div className="flex justify-center mb-4">
            <QRCodeSVG value={pixCode} size={200} />
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-sm text-gray-600 mb-2">Código PIX:</p>
            <p className="font-mono text-sm break-all select-all">{pixCode}</p>
          </div>
        </div>
      )}

      {paymentMethod === 'boleto' && boletoUrl && (
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-4">
            Clique no botão abaixo para visualizar seu boleto
          </p>
          <a
            href={boletoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors"
          >
            Visualizar Boleto
          </a>
        </div>
      )}

      {paymentMethod === 'credit' && (
        <p className="text-gray-600">
          O pagamento foi aprovado e seu pedido está sendo processado.
        </p>
      )}
    </div>
  );
};

export default PaymentSuccess;