import React, { useState, useEffect } from 'react';
import { PlanetData } from '../types';
import { generatePlanetFact } from '../services/geminiService';
import { Loader2, Sparkles, X, Info } from 'lucide-react';

interface InfoPanelProps {
  planet: PlanetData | null;
  onClose: () => void;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ planet, onClose }) => {
  const [aiFact, setAiFact] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Reset state when planet changes
  useEffect(() => {
    setAiFact(null);
    setLoading(false);
  }, [planet]);

  if (!planet) {
    return (
        <div className="absolute top-6 left-6 z-10 pointer-events-none">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 tracking-tight">
                宇宙探索者
            </h1>
            <p className="text-gray-400 mt-2 text-sm font-light max-w-md">
                拖拽旋转 · 滚动缩放 · 点击行星查看详情
            </p>
        </div>
    );
  }

  const handleAskAI = async () => {
    setLoading(true);
    const fact = await generatePlanetFact(planet.name);
    setAiFact(fact);
    setLoading(false);
  };

  return (
    <div className="absolute top-6 right-6 z-20 w-80 md:w-96">
      <div className="backdrop-blur-xl bg-black/60 border border-white/10 rounded-2xl p-6 shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-right-10">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
            <div>
                <h2 className="text-3xl font-bold text-white mb-1" style={{ color: planet.color }}>
                    {planet.name}
                </h2>
                <div className="flex items-center space-x-2 text-xs text-gray-400 uppercase tracking-widest">
                    <span>距离太阳 {planet.distance} AU</span>
                </div>
            </div>
            <button 
                onClick={onClose}
                className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
                <X size={20} />
            </button>
        </div>

        {/* Basic Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6 border-l-2 border-white/20 pl-4">
            {planet.description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white/5 rounded-lg p-3">
                <span className="block text-xs text-gray-500 uppercase">公转速度</span>
                <span className="text-lg font-mono text-white">{planet.speed}x</span>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
                <span className="block text-xs text-gray-500 uppercase">相对大小</span>
                <span className="text-lg font-mono text-white">{planet.size}</span>
            </div>
        </div>

        {/* Gemini AI Interaction */}
        <div className="mt-4 pt-4 border-t border-white/10">
            {!aiFact ? (
                <button
                    onClick={handleAskAI}
                    disabled={loading}
                    className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 p-px focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black"
                >
                    <span className="absolute inset-px rounded-[11px] bg-black/40 transition-colors group-hover:bg-transparent" />
                    <div className="relative flex items-center justify-center space-x-2 px-4 py-3">
                        {loading ? (
                            <Loader2 className="animate-spin text-white" size={18} />
                        ) : (
                            <Sparkles className="text-yellow-300" size={18} />
                        )}
                        <span className="text-sm font-medium text-white">
                            {loading ? '正在询问 Gemini...' : '揭示神秘档案'}
                        </span>
                    </div>
                </button>
            ) : (
                <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl p-4 border border-indigo-500/30">
                    <div className="flex items-center gap-2 mb-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                        <Sparkles size={12} />
                        <span>Gemini 洞察</span>
                    </div>
                    <p className="text-sm text-indigo-100 italic animate-in fade-in zoom-in-95">
                        "{aiFact}"
                    </p>
                </div>
            )}
        </div>

      </div>
    </div>
  );
};