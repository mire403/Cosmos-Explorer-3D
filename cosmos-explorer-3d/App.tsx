import React, { useState } from 'react';
import { SolarSystem } from './components/SolarSystem';
import { InfoPanel } from './components/InfoPanel';
import { PlanetData } from './types';

const App: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-sans selection:bg-purple-500/30">
      
      {/* 3D Scene Layer */}
      <div className="absolute inset-0 z-0">
        <SolarSystem 
            selectedPlanet={selectedPlanet} 
            onPlanetSelect={setSelectedPlanet} 
        />
      </div>

      {/* UI Overlay Layer */}
      <InfoPanel 
        planet={selectedPlanet} 
        onClose={() => setSelectedPlanet(null)} 
      />

      {/* Footer / Branding */}
      <div className="absolute bottom-4 left-0 right-0 z-10 text-center pointer-events-none">
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">
            技术支持：React Three Fiber & Google Gemini
        </p>
      </div>
    </div>
  );
};

export default App;