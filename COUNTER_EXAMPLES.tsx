'use client';

import { useState, useEffect } from 'react';
import Counter from '@/components/ui/Counter';
import SpotlightCard from '@/components/SpotlightCard';

/**
 * Counter Component Examples for Altius Website
 * 
 * Usage Examples:
 */

export default function CounterExamples() {
  const [participants, setParticipants] = useState(0);
  const [events, setEvents] = useState(0);
  const [prizes, setPrizes] = useState(0);

  // Animate counters on mount
  useEffect(() => {
    setTimeout(() => setParticipants(500), 100);
    setTimeout(() => setEvents(25), 200);
    setTimeout(() => setPrizes(100000), 300);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0C10] p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white goldman-bold mb-4">
            Counter Component <span className="text-[#E63946]">Examples</span>
          </h1>
          <p className="text-gray-400 inter-regular text-lg">
            Animated number counters for your Altius website
          </p>
        </div>

        {/* Example 1: Basic Counter */}
        <SpotlightCard 
          className="p-8"
          spotlightColor="rgba(230, 57, 70, 0.2)"
        >
          <h2 className="text-2xl font-bold text-white goldman-bold mb-4">
            Basic Counter
          </h2>
          <div className="flex justify-center">
            <Counter
              value={participants}
              fontSize={80}
              textColor="#F1FAEE"
              fontWeight="bold"
              gradientFrom="#0B0C10"
              gradientTo="transparent"
            />
          </div>
        </SpotlightCard>

        {/* Example 2: Counter with Custom Styling */}
        <SpotlightCard 
          className="p-8"
          spotlightColor="rgba(69, 123, 157, 0.2)"
        >
          <h2 className="text-2xl font-bold text-white goldman-bold mb-4">
            Styled Counter (Red Theme)
          </h2>
          <div className="flex justify-center">
            <Counter
              value={events}
              fontSize={100}
              textColor="#E63946"
              fontWeight="900"
              borderRadius={12}
              horizontalPadding={20}
              counterStyle={{
                backgroundColor: 'rgba(230, 57, 70, 0.1)',
                border: '2px solid rgba(230, 57, 70, 0.3)'
              }}
              gradientFrom="#0B0C10"
              gradientTo="transparent"
            />
          </div>
        </SpotlightCard>

        {/* Example 3: Large Number Counter */}
        <SpotlightCard 
          className="p-8"
          spotlightColor="rgba(29, 53, 87, 0.2)"
        >
          <h2 className="text-2xl font-bold text-white goldman-bold mb-4">
            Large Number Counter (Prize Pool)
          </h2>
          <div className="flex justify-center">
            <Counter
              value={prizes}
              fontSize={70}
              places={[100000, 10000, 1000, 100, 10, 1]}
              textColor="#457B9D"
              fontWeight="bold"
              borderRadius={16}
              horizontalPadding={24}
              gap={4}
              counterStyle={{
                backgroundColor: 'rgba(69, 123, 157, 0.1)',
                border: '2px solid rgba(69, 123, 157, 0.3)'
              }}
              gradientFrom="#0B0C10"
              gradientTo="transparent"
              gradientHeight={20}
            />
          </div>
          <p className="text-center text-gray-400 inter-regular mt-4">
            Prize Pool: ₹{prizes.toLocaleString()}
          </p>
        </SpotlightCard>

        {/* Example 4: Stats Grid with Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SpotlightCard 
            className="p-6 text-center"
            spotlightColor="rgba(230, 57, 70, 0.2)"
          >
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4 inter-semibold">
              Participants
            </h3>
            <Counter
              value={participants}
              fontSize={60}
              textColor="#E63946"
              fontWeight="bold"
              gradientFrom="#0B0C10"
              gradientTo="transparent"
            />
            <p className="text-gray-500 text-sm mt-4">Students Registered</p>
          </SpotlightCard>

          <SpotlightCard 
            className="p-6 text-center"
            spotlightColor="rgba(69, 123, 157, 0.2)"
          >
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4 inter-semibold">
              Events
            </h3>
            <Counter
              value={events}
              fontSize={60}
              textColor="#457B9D"
              fontWeight="bold"
              gradientFrom="#0B0C10"
              gradientTo="transparent"
            />
            <p className="text-gray-500 text-sm mt-4">Total Competitions</p>
          </SpotlightCard>

          <SpotlightCard 
            className="p-6 text-center"
            spotlightColor="rgba(29, 53, 87, 0.2)"
          >
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4 inter-semibold">
              Prize Pool
            </h3>
            <Counter
              value={100}
              fontSize={60}
              textColor="#1D3557"
              fontWeight="bold"
              gradientFrom="#0B0C10"
              gradientTo="transparent"
            />
            <p className="text-gray-500 text-sm mt-4">Thousands in Prizes</p>
          </SpotlightCard>
        </div>

        {/* Code Example */}
        <div className="bg-[#1F2937] rounded-2xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white goldman-bold mb-4">
            Usage Example
          </h2>
          <pre className="text-sm text-gray-300 overflow-x-auto">
{`import Counter from '@/components/ui/Counter';

// Basic usage
<Counter
  value={500}
  fontSize={80}
  textColor="#F1FAEE"
  fontWeight="bold"
/>

// With custom styling (Altius red theme)
<Counter
  value={25}
  fontSize={100}
  textColor="#E63946"
  fontWeight="900"
  borderRadius={12}
  horizontalPadding={20}
  counterStyle={{
    backgroundColor: 'rgba(230, 57, 70, 0.1)',
    border: '2px solid rgba(230, 57, 70, 0.3)'
  }}
  gradientFrom="#0B0C10"
  gradientTo="transparent"
/>

// Large numbers (6 digits)
<Counter
  value={100000}
  fontSize={70}
  places={[100000, 10000, 1000, 100, 10, 1]}
  textColor="#457B9D"
  fontWeight="bold"
/>`}
          </pre>
        </div>

        {/* Props Documentation */}
        <div className="bg-[#1F2937] rounded-2xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white goldman-bold mb-6">
            Props
          </h2>
          <div className="space-y-4 text-gray-300 inter-regular">
            <div>
              <code className="text-[#E63946]">value</code>: <span className="text-gray-400">number</span> - The number to display
            </div>
            <div>
              <code className="text-[#E63946]">fontSize</code>: <span className="text-gray-400">number (default: 100)</span> - Font size in pixels
            </div>
            <div>
              <code className="text-[#E63946]">places</code>: <span className="text-gray-400">number[] (default: [100, 10, 1])</span> - Place values for digits
            </div>
            <div>
              <code className="text-[#E63946]">textColor</code>: <span className="text-gray-400">string (default: 'white')</span> - Text color
            </div>
            <div>
              <code className="text-[#E63946]">fontWeight</code>: <span className="text-gray-400">string | number (default: 'bold')</span> - Font weight
            </div>
            <div>
              <code className="text-[#E63946]">gap</code>: <span className="text-gray-400">number (default: 8)</span> - Gap between digits
            </div>
            <div>
              <code className="text-[#E63946]">borderRadius</code>: <span className="text-gray-400">number (default: 4)</span> - Border radius
            </div>
            <div>
              <code className="text-[#E63946]">horizontalPadding</code>: <span className="text-gray-400">number (default: 8)</span> - Horizontal padding
            </div>
            <div>
              <code className="text-[#E63946]">counterStyle</code>: <span className="text-gray-400">CSSProperties</span> - Custom styles for counter container
            </div>
            <div>
              <code className="text-[#E63946]">gradientFrom/To</code>: <span className="text-gray-400">string</span> - Gradient colors for overflow fade
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
