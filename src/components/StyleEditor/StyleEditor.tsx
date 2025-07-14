
import React, { useState } from 'react';
import StylePalette from './StylePalette';
import StyleableElement from './StyleableElement';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface StyleEditorProps {
  onSave?: (styles: string) => void;
}

const StyleEditor: React.FC<StyleEditorProps> = ({ onSave }) => {
  const [elements, setElements] = useState([
    { id: '1', content: 'Heading Element', type: 'h2', className: 'text-2xl font-bold' },
    { id: '2', content: 'Paragraph Element', type: 'p', className: 'text-base' },
    { id: '3', content: 'Button Element', type: 'button', className: 'px-4 py-2 bg-blue-500 text-white rounded' },
  ]);
  
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [generatedCSS, setGeneratedCSS] = useState<string>('');
  const [projectName, setProjectName] = useState<string>('My Tailwind Project');
  
  const handleStyleSelect = (styleType: string, styleClass: string) => {
    if (selectedElement) {
      setElements(prev => 
        prev.map(el => 
          el.id === selectedElement 
            ? { 
                ...el, 
                className: updateClassName(el.className, styleType, styleClass) 
              } 
            : el
        )
      );
    }
  };
  
  const updateClassName = (currentClassName: string, styleType: string, newClass: string) => {
    // Split the current class name into an array
    const classes = currentClassName.split(' ');
    
    // Remove any existing classes of the same type
    const filteredClasses = classes.filter(cls => {
      if (styleType === 'backgroundColor' && cls.startsWith('bg-')) return false;
      if (styleType === 'textColor' && cls.startsWith('text-') && cls !== 'text-center' && cls !== 'text-base' && cls !== 'text-sm' && cls !== 'text-lg' && cls !== 'text-xl') return false;
      if (styleType === 'fontSize' && (cls === 'text-xs' || cls === 'text-sm' || cls === 'text-base' || cls === 'text-lg' || cls === 'text-xl' || cls === 'text-2xl' || cls === 'text-3xl' || cls === 'text-4xl' || cls === 'text-5xl' || cls === 'text-6xl' || cls === 'text-7xl' || cls === 'text-8xl')) return false;
      if (styleType === 'fontWeight' && cls.startsWith('font-')) return false;
      if (styleType === 'padding' && cls.startsWith('p-')) return false;
      if (styleType === 'borderRadius' && cls.startsWith('rounded')) return false;
      if (styleType === 'shadow' && cls.startsWith('shadow')) return false;
      if (styleType === 'gradient' && (cls.startsWith('bg-gradient') || cls.startsWith('from-') || cls.startsWith('to-') || cls.startsWith('via-'))) return false;
      return true;
    });
    
    // Add the new class
    filteredClasses.push(newClass);
    
    // Join the classes back into a string
    return filteredClasses.join(' ');
  };
  
  const handleElementSelect = (id: string) => {
    setSelectedElement(id);
  };
  
  const handleAddElement = () => {
    const newId = `element-${Date.now()}`;
    setElements(prev => [...prev, { 
      id: newId, 
      content: 'New Element', 
      type: 'div', 
      className: 'p-4' 
    }]);
    setSelectedElement(newId);
  };
  
  const handleRemoveElement = (id: string) => {
    setElements(prev => prev.filter(el => el.id !== id));
    if (selectedElement === id) {
      setSelectedElement(null);
    }
  };
  
  const handleElementTypeChange = (id: string, type: string) => {
    setElements(prev => 
      prev.map(el => 
        el.id === id ? { ...el, type: type as any } : el
      )
    );
  };
  
  const handleElementContentChange = (id: string, content: string) => {
    setElements(prev => 
      prev.map(el => 
        el.id === id ? { ...el, content } : el
      )
    );
  };
  
  const handleStyleChange = (id: string, className: string) => {
    setElements(prev => 
      prev.map(el => 
        el.id === id ? { ...el, className } : el
      )
    );
  };
  
  const generateCSS = () => {
    let css = `/* Generated Tailwind CSS for ${projectName} */\n\n`;
    
    elements.forEach((element, index) => {
      css += `.element-${index + 1} {\n`;
      css += `  /* ${element.content} */\n`;
      
      // Convert Tailwind classes to approximate CSS
      const classes = element.className.split(' ');
      classes.forEach(cls => {
        if (cls.startsWith('bg-') && !cls.startsWith('bg-gradient')) {
          css += `  background-color: var(--${cls});\n`;
        } else if (cls.startsWith('text-') && !cls.includes('-')) {
          css += `  font-size: var(--${cls});\n`;
        } else if (cls.startsWith('text-')) {
          css += `  color: var(--${cls});\n`;
        } else if (cls.startsWith('font-')) {
          css += `  font-weight: var(--${cls});\n`;
        } else if (cls.startsWith('p-')) {
          css += `  padding: var(--${cls});\n`;
        } else if (cls.startsWith('rounded')) {
          css += `  border-radius: var(--${cls});\n`;
        } else if (cls.startsWith('shadow')) {
          css += `  box-shadow: var(--${cls});\n`;
        } else if (cls.startsWith('bg-gradient')) {
          css += `  background: var(--${cls});\n`;
        }
      });
      
      css += '}\n\n';
    });
    
    setGeneratedCSS(css);
  };
  
  const handleSave = () => {
    if (onSave) {
      const stylesData = {
        projectName,
        elements: elements.map(el => ({
          type: el.type,
          content: el.content,
          className: el.className
        }))
      };
      
      onSave(JSON.stringify(stylesData));
    }
  };
  
  const handleExport = () => {
    generateCSS();
    
    // Create a downloadable file
    const blob = new Blob([generatedCSS], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${projectName.toLowerCase().replace(/\s+/g, '-')}.css`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const selectedElementData = selectedElement 
    ? elements.find(el => el.id === selectedElement) 
    : null;
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Tailwind Style Editor</h1>
        <div className="flex gap-2">
          <Button onClick={handleSave} variant="outline">Save Project</Button>
          <Button onClick={handleExport}>Export CSS</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left sidebar - Elements */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Elements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="project-name">Project Name</Label>
                <Input 
                  id="project-name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="mb-4"
                />
              </div>
              
              <div className="space-y-2">
                {elements.map(element => (
                  <div 
                    key={element.id}
                    className={`p-3 border rounded cursor-pointer ${
                      selectedElement === element.id ? 'border-blue-500 bg-blue-50' : ''
                    }`}
                    onClick={() => handleElementSelect(element.id)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{element.content}</span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveElement(element.id);
                        }}
                      >
                        ✕
                      </Button>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {element.type} • {element.className}
                    </div>
                  </div>
                ))}
              </div>
              
              <Button onClick={handleAddElement} className="w-full">
                Add Element
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Center - Preview */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {elements.map(element => (
                <StyleableElement
                  key={element.id}
                  initialContent={element.content}
                  initialClassName={element.className}
                  elementType={element.type as any}
                  onStyleChange={(className) => handleStyleChange(element.id, className)}
                />
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Right sidebar - Style palette */}
        <div className="md:col-span-1">
          <Tabs defaultValue="palette">
            <TabsList className="w-full">
              <TabsTrigger value="palette" className="flex-1">Style Palette</TabsTrigger>
              <TabsTrigger value="properties" className="flex-1">Properties</TabsTrigger>
              <TabsTrigger value="code" className="flex-1">Code</TabsTrigger>
            </TabsList>
            
            <TabsContent value="palette">
              <StylePalette onStyleSelect={handleStyleSelect} />
            </TabsContent>
            
            <TabsContent value="properties">
              <Card>
                <CardHeader>
                  <CardTitle>Element Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedElementData ? (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="element-type">Element Type</Label>
                        <select
                          id="element-type"
                          value={selectedElementData.type}
                          onChange={(e) => handleElementTypeChange(selectedElementData.id, e.target.value)}
                          className="w-full p-2 border rounded mt-1"
                        >
                          <option value="div">div</option>
                          <option value="p">p</option>
                          <option value="h1">h1</option>
                          <option value="h2">h2</option>
                          <option value="h3">h3</option>
                          <option value="button">button</option>
                          <option value="span">span</option>
                          <option value="section">section</option>
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="element-content">Content</Label>
                        <Input
                          id="element-content"
                          value={selectedElementData.content}
                          onChange={(e) => handleElementContentChange(selectedElementData.id, e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="element-class">Tailwind Classes</Label>
                        <div className="mt-2 flex flex-wrap gap-1 mb-2 border p-2 rounded min-h-[100px]">
                          {selectedElementData.className.split(' ').filter(cls => cls.trim()).map((cls, index) => (
                            <span 
                              key={index} 
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 hover:bg-gray-200 cursor-pointer"
                              onClick={() => {
                                const classes = selectedElementData.className.split(' ');
                                const filteredClasses = classes.filter(c => c !== cls);
                                handleStyleChange(selectedElementData.id, filteredClasses.join(' '));
                              }}
                            >
                              {cls} ✕
                            </span>
                          ))}
                        </div>
                        <Input
                          id="element-class"
                          value={selectedElementData.className}
                          onChange={(e) => handleStyleChange(selectedElementData.id, e.target.value)}
                          className="mt-1"
                          placeholder="Edit classes directly or click on tags to remove"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      Select an element to edit its properties
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="code">
              <Card>
                <CardHeader>
                  <CardTitle>Generated Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button onClick={generateCSS} className="mb-4">Generate CSS</Button>
                  
                  {generatedCSS ? (
                    <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-[400px] text-sm">
                      {generatedCSS}
                    </pre>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      Click "Generate CSS" to see the code
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default StyleEditor;