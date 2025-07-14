
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Palette, 
  Paintbrush, 
  Type, 
  Maximize, 
  Square, 
  Sparkles 
} from 'lucide-react';

// Color options with explicit color values
const colorPalette = [
  {
    name: 'slate',
    colors: [
      { shade: '50', bg: '#f8fafc', text: 'text-slate-50' },
      { shade: '100', bg: '#f1f5f9', text: 'text-slate-100' },
      { shade: '200', bg: '#e2e8f0', text: 'text-slate-200' },
      { shade: '300', bg: '#cbd5e1', text: 'text-slate-300' },
      { shade: '400', bg: '#94a3b8', text: 'text-slate-400' },
      { shade: '500', bg: '#64748b', text: 'text-slate-500' },
      { shade: '600', bg: '#475569', text: 'text-slate-600' },
      { shade: '700', bg: '#334155', text: 'text-slate-700' },
      { shade: '800', bg: '#1e293b', text: 'text-slate-800' },
      { shade: '900', bg: '#0f172a', text: 'text-slate-900' },
      { shade: '950', bg: '#020617', text: 'text-slate-950' },
    ]
  },
  {
    name: 'gray',
    colors: [
      { shade: '50', bg: '#f9fafb', text: 'text-gray-50' },
      { shade: '100', bg: '#f3f4f6', text: 'text-gray-100' },
      { shade: '200', bg: '#e5e7eb', text: 'text-gray-200' },
      { shade: '300', bg: '#d1d5db', text: 'text-gray-300' },
      { shade: '400', bg: '#9ca3af', text: 'text-gray-400' },
      { shade: '500', bg: '#6b7280', text: 'text-gray-500' },
      { shade: '600', bg: '#4b5563', text: 'text-gray-600' },
      { shade: '700', bg: '#374151', text: 'text-gray-700' },
      { shade: '800', bg: '#1f2937', text: 'text-gray-800' },
      { shade: '900', bg: '#111827', text: 'text-gray-900' },
      { shade: '950', bg: '#030712', text: 'text-gray-950' },
    ]
  },
  {
    name: 'red',
    colors: [
      { shade: '50', bg: '#fef2f2', text: 'text-red-50' },
      { shade: '100', bg: '#fee2e2', text: 'text-red-100' },
      { shade: '200', bg: '#fecaca', text: 'text-red-200' },
      { shade: '300', bg: '#fca5a5', text: 'text-red-300' },
      { shade: '400', bg: '#f87171', text: 'text-red-400' },
      { shade: '500', bg: '#ef4444', text: 'text-red-500' },
      { shade: '600', bg: '#dc2626', text: 'text-red-600' },
      { shade: '700', bg: '#b91c1c', text: 'text-red-700' },
      { shade: '800', bg: '#991b1b', text: 'text-red-800' },
      { shade: '900', bg: '#7f1d1d', text: 'text-red-900' },
      { shade: '950', bg: '#450a0a', text: 'text-red-950' },
    ]
  },
  {
    name: 'green',
    colors: [
      { shade: '50', bg: '#f0fdf4', text: 'text-green-50' },
      { shade: '100', bg: '#dcfce7', text: 'text-green-100' },
      { shade: '200', bg: '#bbf7d0', text: 'text-green-200' },
      { shade: '300', bg: '#86efac', text: 'text-green-300' },
      { shade: '400', bg: '#4ade80', text: 'text-green-400' },
      { shade: '500', bg: '#22c55e', text: 'text-green-500' },
      { shade: '600', bg: '#16a34a', text: 'text-green-600' },
      { shade: '700', bg: '#15803d', text: 'text-green-700' },
      { shade: '800', bg: '#166534', text: 'text-green-800' },
      { shade: '900', bg: '#14532d', text: 'text-green-900' },
      { shade: '950', bg: '#052e16', text: 'text-green-950' },
    ]
  },
  {
    name: 'blue',
    colors: [
      { shade: '50', bg: '#eff6ff', text: 'text-blue-50' },
      { shade: '100', bg: '#dbeafe', text: 'text-blue-100' },
      { shade: '200', bg: '#bfdbfe', text: 'text-blue-200' },
      { shade: '300', bg: '#93c5fd', text: 'text-blue-300' },
      { shade: '400', bg: '#60a5fa', text: 'text-blue-400' },
      { shade: '500', bg: '#3b82f6', text: 'text-blue-500' },
      { shade: '600', bg: '#2563eb', text: 'text-blue-600' },
      { shade: '700', bg: '#1d4ed8', text: 'text-blue-700' },
      { shade: '800', bg: '#1e40af', text: 'text-blue-800' },
      { shade: '900', bg: '#1e3a8a', text: 'text-blue-900' },
      { shade: '950', bg: '#172554', text: 'text-blue-950' },
    ]
  },
  {
    name: 'yellow',
    colors: [
      { shade: '50', bg: '#fefce8', text: 'text-yellow-50' },
      { shade: '100', bg: '#fef9c3', text: 'text-yellow-100' },
      { shade: '200', bg: '#fef08a', text: 'text-yellow-200' },
      { shade: '300', bg: '#fde047', text: 'text-yellow-300' },
      { shade: '400', bg: '#facc15', text: 'text-yellow-400' },
      { shade: '500', bg: '#eab308', text: 'text-yellow-500' },
      { shade: '600', bg: '#ca8a04', text: 'text-yellow-600' },
      { shade: '700', bg: '#a16207', text: 'text-yellow-700' },
      { shade: '800', bg: '#854d0e', text: 'text-yellow-800' },
      { shade: '900', bg: '#713f12', text: 'text-yellow-900' },
      { shade: '950', bg: '#422006', text: 'text-yellow-950' },
    ]
  },
  {
    name: 'purple',
    colors: [
      { shade: '50', bg: '#faf5ff', text: 'text-purple-50' },
      { shade: '100', bg: '#f3e8ff', text: 'text-purple-100' },
      { shade: '200', bg: '#e9d5ff', text: 'text-purple-200' },
      { shade: '300', bg: '#d8b4fe', text: 'text-purple-300' },
      { shade: '400', bg: '#c084fc', text: 'text-purple-400' },
      { shade: '500', bg: '#a855f7', text: 'text-purple-500' },
      { shade: '600', bg: '#9333ea', text: 'text-purple-600' },
      { shade: '700', bg: '#7e22ce', text: 'text-purple-700' },
      { shade: '800', bg: '#6b21a8', text: 'text-purple-800' },
      { shade: '900', bg: '#581c87', text: 'text-purple-900' },
      { shade: '950', bg: '#3b0764', text: 'text-purple-950' },
    ]
  },
];

// Gradient options with explicit styles
const gradientOptions = [
  { 
    name: 'Sunset', 
    class: 'bg-gradient-to-r from-orange-500 to-pink-500',
    style: { background: 'linear-gradient(to right, #f97316, #ec4899)' }
  },
  { 
    name: 'Ocean', 
    class: 'bg-gradient-to-r from-blue-500 to-teal-500',
    style: { background: 'linear-gradient(to right, #3b82f6, #14b8a6)' }
  },
  { 
    name: 'Forest', 
    class: 'bg-gradient-to-r from-green-500 to-emerald-500',
    style: { background: 'linear-gradient(to right, #22c55e, #10b981)' }
  },
  { 
    name: 'Lavender', 
    class: 'bg-gradient-to-r from-purple-500 to-indigo-500',
    style: { background: 'linear-gradient(to right, #a855f7, #6366f1)' }
  },
  { 
    name: 'Cherry', 
    class: 'bg-gradient-to-r from-red-500 to-pink-500',
    style: { background: 'linear-gradient(to right, #ef4444, #ec4899)' }
  },
  { 
    name: 'Sky', 
    class: 'bg-gradient-to-r from-sky-500 to-indigo-500',
    style: { background: 'linear-gradient(to right, #0ea5e9, #6366f1)' }
  },
  { 
    name: 'Lime', 
    class: 'bg-gradient-to-r from-lime-500 to-green-500',
    style: { background: 'linear-gradient(to right, #84cc16, #22c55e)' }
  },
  { 
    name: 'Amber', 
    class: 'bg-gradient-to-r from-amber-500 to-orange-500',
    style: { background: 'linear-gradient(to right, #f59e0b, #f97316)' }
  },
  { 
    name: 'Diagonal', 
    class: 'bg-gradient-to-br from-purple-500 to-pink-500',
    style: { background: 'linear-gradient(to bottom right, #a855f7, #ec4899)' }
  },
  { 
    name: 'Radial', 
    class: 'bg-radial-gradient from-amber-500 to-orange-500',
    style: { background: 'radial-gradient(circle, #f59e0b, #f97316)' }
  },
];

// Font size options with explicit styles
const fontSizeOptions = [
  { name: 'xs', class: 'text-xs', style: { fontSize: '0.75rem' } },
  { name: 'sm', class: 'text-sm', style: { fontSize: '0.875rem' } },
  { name: 'base', class: 'text-base', style: { fontSize: '1rem' } },
  { name: 'lg', class: 'text-lg', style: { fontSize: '1.125rem' } },
  { name: 'xl', class: 'text-xl', style: { fontSize: '1.25rem' } },
  { name: '2xl', class: 'text-2xl', style: { fontSize: '1.5rem' } },
  { name: '3xl', class: 'text-3xl', style: { fontSize: '1.875rem' } },
  { name: '4xl', class: 'text-4xl', style: { fontSize: '2.25rem' } },
  { name: '5xl', class: 'text-5xl', style: { fontSize: '3rem' } },
  { name: '6xl', class: 'text-6xl', style: { fontSize: '3.75rem' } },
  { name: '7xl', class: 'text-7xl', style: { fontSize: '4.5rem' } },
  { name: '8xl', class: 'text-8xl', style: { fontSize: '6rem' } },
];

// Font weight options with explicit styles
const fontWeightOptions = [
  { name: 'thin', class: 'font-thin', style: { fontWeight: 100 } },
  { name: 'extralight', class: 'font-extralight', style: { fontWeight: 200 } },
  { name: 'light', class: 'font-light', style: { fontWeight: 300 } },
  { name: 'normal', class: 'font-normal', style: { fontWeight: 400 } },
  { name: 'medium', class: 'font-medium', style: { fontWeight: 500 } },
  { name: 'semibold', class: 'font-semibold', style: { fontWeight: 600 } },
  { name: 'bold', class: 'font-bold', style: { fontWeight: 700 } },
  { name: 'extrabold', class: 'font-extrabold', style: { fontWeight: 800 } },
  { name: 'black', class: 'font-black', style: { fontWeight: 900 } },
];

// Spacing options with explicit styles
const spacingOptions = [
  { name: '0', class: 'p-0', style: { padding: '0' } },
  { name: '1', class: 'p-1', style: { padding: '0.25rem' } },
  { name: '2', class: 'p-2', style: { padding: '0.5rem' } },
  { name: '3', class: 'p-3', style: { padding: '0.75rem' } },
  { name: '4', class: 'p-4', style: { padding: '1rem' } },
  { name: '5', class: 'p-5', style: { padding: '1.25rem' } },
  { name: '6', class: 'p-6', style: { padding: '1.5rem' } },
  { name: '8', class: 'p-8', style: { padding: '2rem' } },
  { name: '10', class: 'p-10', style: { padding: '2.5rem' } },
  { name: '12', class: 'p-12', style: { padding: '3rem' } },
  { name: '16', class: 'p-16', style: { padding: '4rem' } },
];

// Border radius options with explicit styles
const borderRadiusOptions = [
  { name: 'none', class: 'rounded-none', style: { borderRadius: '0' } },
  { name: 'sm', class: 'rounded-sm', style: { borderRadius: '0.125rem' } },
  { name: 'md', class: 'rounded', style: { borderRadius: '0.25rem' } },
  { name: 'lg', class: 'rounded-lg', style: { borderRadius: '0.5rem' } },
  { name: 'xl', class: 'rounded-xl', style: { borderRadius: '0.75rem' } },
  { name: '2xl', class: 'rounded-2xl', style: { borderRadius: '1rem' } },
  { name: '3xl', class: 'rounded-3xl', style: { borderRadius: '1.5rem' } },
  { name: 'full', class: 'rounded-full', style: { borderRadius: '9999px' } },
];

interface StylePaletteProps {
  onStyleSelect: (styleType: string, styleClass: string) => void;
}

const StylePalette: React.FC<StylePaletteProps> = ({ onStyleSelect }) => {
  const handleDragStart = (e: React.DragEvent, styleType: string, styleClass: string) => {
    e.dataTransfer.setData('styleType', styleType);
    e.dataTransfer.setData('styleClass', styleClass);
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle>Style Palette</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <Tabs defaultValue="colors" className="w-full style-editor-tabs">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            <TabsTrigger value="colors" className="px-3 py-3 text-sm flex items-center gap-2 justify-center">
              <Palette className="h-4 w-4" />
              <span>Colors</span>
            </TabsTrigger>
            <TabsTrigger value="gradients" className="px-3 py-3 text-sm flex items-center gap-2 justify-center">
              <Paintbrush className="h-4 w-4" />
              <span>Gradients</span>
            </TabsTrigger>
            <TabsTrigger value="typography" className="px-3 py-3 text-sm flex items-center gap-2 justify-center">
              <Type className="h-4 w-4" />
              <span>Typography</span>
            </TabsTrigger>
            <TabsTrigger value="spacing" className="px-3 py-3 text-sm flex items-center gap-2 justify-center">
              <Maximize className="h-4 w-4" />
              <span>Spacing</span>
            </TabsTrigger>
            <TabsTrigger value="borders" className="px-3 py-3 text-sm flex items-center gap-2 justify-center">
              <Square className="h-4 w-4" />
              <span>Borders</span>
            </TabsTrigger>
            <TabsTrigger value="effects" className="px-3 py-3 text-sm flex items-center gap-2 justify-center">
              <Sparkles className="h-4 w-4" />
              <span>Effects</span>
            </TabsTrigger>
          </TabsList>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium mb-3">Background Colors <span className="text-xs text-gray-500">(applies to container)</span></h3>
                <div className="grid grid-cols-7 gap-2 overflow-x-auto pb-2">
                  {colorPalette.map((colorGroup) => (
                    <div key={colorGroup.name} className="space-y-1">
                      <div className="text-xs text-center font-medium mb-1 capitalize">{colorGroup.name}</div>
                      {colorGroup.colors.map((color) => (
                        <div
                          key={`${colorGroup.name}-${color.shade}`}
                          style={{ backgroundColor: color.bg }}
                          className="h-6 w-6 rounded cursor-grab border border-gray-200 mx-auto"
                          draggable
                          onDragStart={(e) => 
                            handleDragStart(e, 'backgroundColor', `bg-${colorGroup.name}-${color.shade}`)
                          }
                          onClick={() => onStyleSelect('backgroundColor', `bg-${colorGroup.name}-${color.shade}`)}
                          title={`bg-${colorGroup.name}-${color.shade}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-3">Text Colors <span className="text-xs text-gray-500">(applies to text)</span></h3>
                <div className="grid grid-cols-7 gap-2 overflow-x-auto pb-2">
                  {colorPalette.map((colorGroup) => (
                    <div key={`${colorGroup.name}-text`} className="space-y-1">
                      <div className="text-xs text-center font-medium mb-1 capitalize">{colorGroup.name}</div>
                      {colorGroup.colors.map((color) => (
                        <div
                          key={`${colorGroup.name}-${color.shade}-text`}
                          style={{ backgroundColor: color.bg }}
                          className="h-6 w-6 rounded cursor-grab border border-gray-200 mx-auto"
                          draggable
                          onDragStart={(e) => 
                            handleDragStart(e, 'textColor', `text-${colorGroup.name}-${color.shade}`)
                          }
                          onClick={() => onStyleSelect('textColor', `text-${colorGroup.name}-${color.shade}`)}
                          title={`text-${colorGroup.name}-${color.shade}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Gradients Tab */}
          <TabsContent value="gradients">
            <div className="grid grid-cols-2 gap-4">
              {gradientOptions.map((gradient) => (
                <div
                  key={gradient.name}
                  style={gradient.style}
                  className="h-12 rounded cursor-grab flex items-center justify-center text-white font-medium border border-gray-200"
                  draggable
                  onDragStart={(e) => handleDragStart(e, 'gradient', gradient.class)}
                  onClick={() => onStyleSelect('gradient', gradient.class)}
                >
                  {gradient.name}
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Font Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {fontSizeOptions.map((size) => (
                    <div
                      key={size.name}
                      className="border rounded p-2 cursor-grab text-center"
                      draggable
                      onDragStart={(e) => handleDragStart(e, 'fontSize', size.class)}
                      onClick={() => onStyleSelect('fontSize', size.class)}
                    >
                      <span style={size.style}>{size.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Font Weight</h3>
                <div className="grid grid-cols-3 gap-2">
                  {fontWeightOptions.map((weight) => (
                    <div
                      key={weight.name}
                      className="border rounded p-2 cursor-grab text-center"
                      draggable
                      onDragStart={(e) => handleDragStart(e, 'fontWeight', weight.class)}
                      onClick={() => onStyleSelect('fontWeight', weight.class)}
                    >
                      <span style={weight.style}>{weight.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Spacing Tab */}
          <TabsContent value="spacing">
            <div>
              <h3 className="text-sm font-medium mb-2">Padding</h3>
              <div className="grid grid-cols-4 gap-2">
                {spacingOptions.map((spacing) => (
                  <div
                    key={spacing.name}
                    className="border rounded cursor-grab text-center"
                    draggable
                    onDragStart={(e) => handleDragStart(e, 'padding', spacing.class)}
                    onClick={() => onStyleSelect('padding', spacing.class)}
                  >
                    <div style={{ ...spacing.style, background: '#f1f5f9' }} className="flex items-center justify-center">
                      p-{spacing.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Borders Tab */}
          <TabsContent value="borders">
            <div>
              <h3 className="text-sm font-medium mb-2">Border Radius</h3>
              <div className="grid grid-cols-4 gap-2">
                {borderRadiusOptions.map((radius) => (
                  <div
                    key={radius.name}
                    className="border cursor-grab text-center"
                    draggable
                    onDragStart={(e) => handleDragStart(e, 'borderRadius', radius.class)}
                    onClick={() => onStyleSelect('borderRadius', radius.class)}
                  >
                    <div style={{ ...radius.style, background: '#f1f5f9', height: '4rem' }} className="flex items-center justify-center">
                      {radius.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Effects Tab */}
          <TabsContent value="effects">
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Shadow Small', class: 'shadow-sm', style: { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' } },
                { name: 'Shadow Medium', class: 'shadow', style: { boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' } },
                { name: 'Shadow Large', class: 'shadow-md', style: { boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' } },
                { name: 'Shadow XL', class: 'shadow-lg', style: { boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' } },
                { name: 'Shadow 2XL', class: 'shadow-xl', style: { boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' } },
                { name: 'Shadow 3XL', class: 'shadow-2xl', style: { boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' } }
              ].map((shadow) => (
                <div
                  key={shadow.name}
                  style={shadow.style}
                  className="border rounded p-4 cursor-grab text-center bg-white"
                  draggable
                  onDragStart={(e) => handleDragStart(e, 'shadow', shadow.class)}
                  onClick={() => onStyleSelect('shadow', shadow.class)}
                >
                  {shadow.name}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default StylePalette;