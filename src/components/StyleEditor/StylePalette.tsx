
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Color options
const colorOptions = [
  { name: 'slate', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'gray', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'zinc', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'neutral', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'stone', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'red', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'orange', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'amber', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'yellow', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'lime', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'green', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'emerald', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'teal', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'cyan', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'sky', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'blue', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'indigo', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'violet', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'purple', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'fuchsia', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'pink', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
  { name: 'rose', colors: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] },
];

// Gradient options
const gradientOptions = [
  { name: 'Sunset', class: 'bg-gradient-to-r from-orange-500 to-pink-500' },
  { name: 'Ocean', class: 'bg-gradient-to-r from-blue-500 to-teal-500' },
  { name: 'Forest', class: 'bg-gradient-to-r from-green-500 to-emerald-500' },
  { name: 'Lavender', class: 'bg-gradient-to-r from-purple-500 to-indigo-500' },
  { name: 'Cherry', class: 'bg-gradient-to-r from-red-500 to-pink-500' },
  { name: 'Sky', class: 'bg-gradient-to-r from-sky-500 to-indigo-500' },
  { name: 'Lime', class: 'bg-gradient-to-r from-lime-500 to-green-500' },
  { name: 'Amber', class: 'bg-gradient-to-r from-amber-500 to-orange-500' },
  { name: 'Diagonal', class: 'bg-gradient-to-br from-purple-500 to-pink-500' },
  { name: 'Radial', class: 'bg-radial-gradient from-amber-500 to-orange-500' },
];

// Font size options
const fontSizeOptions = [
  { name: 'xs', class: 'text-xs' },
  { name: 'sm', class: 'text-sm' },
  { name: 'base', class: 'text-base' },
  { name: 'lg', class: 'text-lg' },
  { name: 'xl', class: 'text-xl' },
  { name: '2xl', class: 'text-2xl' },
  { name: '3xl', class: 'text-3xl' },
  { name: '4xl', class: 'text-4xl' },
  { name: '5xl', class: 'text-5xl' },
  { name: '6xl', class: 'text-6xl' },
  { name: '7xl', class: 'text-7xl' },
  { name: '8xl', class: 'text-8xl' },
  { name: '9xl', class: 'text-9xl' },
];

// Font weight options
const fontWeightOptions = [
  { name: 'thin', class: 'font-thin' },
  { name: 'extralight', class: 'font-extralight' },
  { name: 'light', class: 'font-light' },
  { name: 'normal', class: 'font-normal' },
  { name: 'medium', class: 'font-medium' },
  { name: 'semibold', class: 'font-semibold' },
  { name: 'bold', class: 'font-bold' },
  { name: 'extrabold', class: 'font-extrabold' },
  { name: 'black', class: 'font-black' },
];

// Spacing options
const spacingOptions = [
  { name: '0', class: 'p-0' },
  { name: '1', class: 'p-1' },
  { name: '2', class: 'p-2' },
  { name: '3', class: 'p-3' },
  { name: '4', class: 'p-4' },
  { name: '5', class: 'p-5' },
  { name: '6', class: 'p-6' },
  { name: '8', class: 'p-8' },
  { name: '10', class: 'p-10' },
  { name: '12', class: 'p-12' },
  { name: '16', class: 'p-16' },
  { name: '20', class: 'p-20' },
  { name: '24', class: 'p-24' },
];

// Border radius options
const borderRadiusOptions = [
  { name: 'none', class: 'rounded-none' },
  { name: 'sm', class: 'rounded-sm' },
  { name: 'md', class: 'rounded' },
  { name: 'lg', class: 'rounded-lg' },
  { name: 'xl', class: 'rounded-xl' },
  { name: '2xl', class: 'rounded-2xl' },
  { name: '3xl', class: 'rounded-3xl' },
  { name: 'full', class: 'rounded-full' },
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
      <CardContent>
        <Tabs defaultValue="colors" className="w-full style-editor-tabs">
          <TabsList className="w-full grid grid-cols-6 gap-2 mb-6">
            <TabsTrigger value="colors" className="px-3 py-2 text-sm">Colors</TabsTrigger>
            <TabsTrigger value="gradients" className="px-3 py-2 text-sm">Gradients</TabsTrigger>
            <TabsTrigger value="typography" className="px-3 py-2 text-sm">Typography</TabsTrigger>
            <TabsTrigger value="spacing" className="px-3 py-2 text-sm">Spacing</TabsTrigger>
            <TabsTrigger value="borders" className="px-3 py-2 text-sm">Borders</TabsTrigger>
            <TabsTrigger value="effects" className="px-3 py-2 text-sm">Effects</TabsTrigger>
          </TabsList>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Background Colors</h3>
                <div className="grid grid-cols-11 gap-1">
                  {colorOptions.map((colorGroup) => (
                    <div key={colorGroup.name} className="space-y-1">
                      {colorGroup.colors.map((shade) => (
                        <div
                          key={`${colorGroup.name}-${shade}`}
                          className={cn(
                            `bg-${colorGroup.name}-${shade} h-5 w-5 rounded cursor-grab`
                          )}
                          draggable
                          onDragStart={(e) => 
                            handleDragStart(e, 'backgroundColor', `bg-${colorGroup.name}-${shade}`)
                          }
                          onClick={() => onStyleSelect('backgroundColor', `bg-${colorGroup.name}-${shade}`)}
                          title={`bg-${colorGroup.name}-${shade}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Text Colors</h3>
                <div className="grid grid-cols-11 gap-1">
                  {colorOptions.map((colorGroup) => (
                    <div key={colorGroup.name} className="space-y-1">
                      {colorGroup.colors.map((shade) => (
                        <div
                          key={`${colorGroup.name}-${shade}-text`}
                          className={cn(
                            `bg-${colorGroup.name}-${shade} h-5 w-5 rounded cursor-grab`
                          )}
                          draggable
                          onDragStart={(e) => 
                            handleDragStart(e, 'textColor', `text-${colorGroup.name}-${shade}`)
                          }
                          onClick={() => onStyleSelect('textColor', `text-${colorGroup.name}-${shade}`)}
                          title={`text-${colorGroup.name}-${shade}`}
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
                  className={cn(
                    gradient.class,
                    "h-12 rounded cursor-grab flex items-center justify-center text-white font-medium"
                  )}
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
                      <span className={size.class}>{size.name}</span>
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
                      <span className={weight.class}>{weight.name}</span>
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
                    <div className={cn(spacing.class, "bg-gray-100 flex items-center justify-center")}>
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
                    <div className={cn(
                      radius.class, 
                      "bg-gray-100 h-16 flex items-center justify-center"
                    )}>
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
              <div
                className="shadow-sm border rounded p-4 cursor-grab text-center"
                draggable
                onDragStart={(e) => handleDragStart(e, 'shadow', 'shadow-sm')}
                onClick={() => onStyleSelect('shadow', 'shadow-sm')}
              >
                Shadow Small
              </div>
              <div
                className="shadow border rounded p-4 cursor-grab text-center"
                draggable
                onDragStart={(e) => handleDragStart(e, 'shadow', 'shadow')}
                onClick={() => onStyleSelect('shadow', 'shadow')}
              >
                Shadow Medium
              </div>
              <div
                className="shadow-md border rounded p-4 cursor-grab text-center"
                draggable
                onDragStart={(e) => handleDragStart(e, 'shadow', 'shadow-md')}
                onClick={() => onStyleSelect('shadow', 'shadow-md')}
              >
                Shadow Large
              </div>
              <div
                className="shadow-lg border rounded p-4 cursor-grab text-center"
                draggable
                onDragStart={(e) => handleDragStart(e, 'shadow', 'shadow-lg')}
                onClick={() => onStyleSelect('shadow', 'shadow-lg')}
              >
                Shadow XL
              </div>
              <div
                className="shadow-xl border rounded p-4 cursor-grab text-center"
                draggable
                onDragStart={(e) => handleDragStart(e, 'shadow', 'shadow-xl')}
                onClick={() => onStyleSelect('shadow', 'shadow-xl')}
              >
                Shadow 2XL
              </div>
              <div
                className="shadow-2xl border rounded p-4 cursor-grab text-center"
                draggable
                onDragStart={(e) => handleDragStart(e, 'shadow', 'shadow-2xl')}
                onClick={() => onStyleSelect('shadow', 'shadow-2xl')}
              >
                Shadow 3XL
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default StylePalette;