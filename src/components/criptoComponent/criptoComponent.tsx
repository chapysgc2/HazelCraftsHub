import React from 'react';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiSolana, SiRipple, SiCardano } from 'react-icons/si';
import { GiTwoCoins } from 'react-icons/gi'; // Para PEPE Coin

const CriptoComponent: React.FC = () => {
    return (
        <div className="max-w-xl mx-auto rounded-xl overflow-hidden bg-white shadow-lg p-6 mt-24">
            {/* Título */}
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Criptomonedas & Inversiones</h2>

            {/* Introducción */}
            <p className="text-gray-700 mb-4">
                Como inversor y entusiasta de la tecnología blockchain, estoy comprometido con el mundo de las criptomonedas.
                He trabajado en proyectos de pagos usando <span className="font-semibold">Bitcoin (BTC)</span> y <span className="font-semibold">XRP (Ripple)</span> como métodos de pago innovadores.
                Mi objetivo es impulsar la adopción de las criptomonedas en soluciones prácticas y seguras.
            </p>

            {/* Proyectos de pagos */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Proyectos de Pagos con Cripto</h3>
                <p className="text-gray-700">
                    He implementado soluciones de pago que permiten aceptar <span className="font-semibold">Bitcoin (BTC)</span> y <span className="font-semibold">XRP</span> como métodos de pago confiables y descentralizados.
                    Estos proyectos buscan modernizar los sistemas de transacción y ofrecer a los usuarios una experiencia más flexible y segura.
                </p>
            </div>

            {/* Criptos favoritas */}
            <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Mis Criptomonedas Favoritas</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center text-yellow-500">
                        <FaBitcoin size={32} />
                        <span className="mt-1 text-sm">Bitcoin (BTC)</span>
                    </div>
                    <div className="flex flex-col items-center text-indigo-500">
                        <FaEthereum size={32} />
                        <span className="mt-1 text-sm">Ethereum (ETH)</span>
                    </div>
                    <div className="flex flex-col items-center text-green-500">
                        <SiSolana size={32} />
                        <span className="mt-1 text-sm">Solana (SOL)</span>
                    </div>
                    <div className="flex flex-col items-center text-blue-500">
                        <SiRipple size={32} />
                        <span className="mt-1 text-sm">XRP (Ripple)</span>
                    </div>
                    <div className="flex flex-col items-center text-purple-500">
                        <SiCardano size={32} />
                        <span className="mt-1 text-sm">Cardano (ADA)</span>
                    </div>
                    <div className="flex flex-col items-center text-green-600">
                        <GiTwoCoins size={32} />
                        <span className="mt-1 text-sm">PEPE Coin</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CriptoComponent;
