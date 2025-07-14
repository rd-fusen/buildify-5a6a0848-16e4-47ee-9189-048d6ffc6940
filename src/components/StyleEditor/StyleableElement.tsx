
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface StyleableElementProps {
  initialContent?: string;
  initialClassName?: string;
  elementType?: keyof JSX.IntrinsicElements;
  onStyleChange?: (className: string) => void;
}

const StyleableElement: React.FC<StyleableElementProps> = ({
  initialContent = 'Drag styles onto this element',
  initialClassName = '',
  elementType = 'div',
  onStyleChange,
}) => {
  const [content, setContent] = useState(initialContent);
  const [appliedStyles, setAppliedStyles] = useState<Record<string, string>>({});
  
  // Initialize appliedStyles from initialClassName
  React.useEffect(() => {
    if (initialClassName) {
      const classMap: Record<string, string> = {};
      const classes = initialClassName.split(' ');
      
      classes.forEach(cls => {
        if (cls.startsWith('bg-')) classMap['backgroundColor'] = cls;
        else if (cls.startsWith('text-') && cls !== 'text-center') {
          if (cls === 'text-xs' || cls === 'text-sm' || cls === 'text-base' || 
              cls === 'text-lg' || cls === 'text-xl' || cls === 'text-2xl' || 
              cls === 'text-3xl' || cls === 'text-4xl') {
            classMap['fontSize'] = cls;
          } else {
            classMap['textColor'] = cls;
          }
        }
        else if (cls.startsWith('font-')) classMap['fontWeight'] = cls;
        else if (cls.startsWith('p-')) classMap['padding'] = cls;
        else if (cls.startsWith('rounded')) classMap['borderRadius'] = cls;
        else if (cls.startsWith('shadow')) classMap['shadow'] = cls;
        else if (cls.startsWith('bg-gradient')) classMap['gradient'] = cls;
      });
      
      setAppliedStyles(classMap);
    }
  }, [initialClassName]);
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    
    const styleType = e.dataTransfer.getData('styleType');
    const styleClass = e.dataTransfer.getData('styleClass');
    
    if (styleType && styleClass) {
      setAppliedStyles(prev => {
        const newStyles = { ...prev, [styleType]: styleClass };
        
        // If onStyleChange callback is provided, call it with the new className string
        if (onStyleChange) {
          const classNames = Object.values(newStyles).join(' ');
          onStyleChange(classNames);
        }
        
        return newStyles;
      });
    }
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  
  // Determine which styles should be applied to the container vs. the content
  const containerStyles: string[] = [];
  const contentStyles: string[] = [];
  
  Object.entries(appliedStyles).forEach(([type, style]) => {
    // Text-related styles should be applied to the content for text elements
    if ((elementType === 'p' || elementType === 'h1' || elementType === 'h2' || 
         elementType === 'h3' || elementType === 'h4' || elementType === 'h5' || 
         elementType === 'h6' || elementType === 'span') && 
        (type === 'textColor' || type === 'fontSize' || type === 'fontWeight')) {
      contentStyles.push(style);
    } else {
      containerStyles.push(style);
    }
  });
  
  const containerClassNames = cn(
    initialClassName,
    'min-h-[100px] min-w-[200px] border-2 border-dashed border-gray-300 flex items-center justify-center transition-all duration-200',
    containerStyles.join(' ')
  );
  
  const contentClassNames = cn(
    contentStyles.join(' ')
  );
  
  const ElementComponent = elementType as any;
  
  return (
    <div className="relative">
      <ElementComponent
        className={containerClassNames}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="text"
          value={content}
          onChange={handleContentChange}
          className={cn("bg-transparent text-center focus:outline-none w-full", contentClassNames)}
        />
      </ElementComponent>
      
      <div className="mt-2 text-xs text-gray-500">
        <p>Applied styles:</p>
        <div className="mt-1 flex flex-wrap gap-1">
          {Object.entries(appliedStyles).map(([type, style]) => (
            <span 
              key={type} 
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                setAppliedStyles(prev => {
                  const newStyles = { ...prev };
                  delete newStyles[type];
                  
                  if (onStyleChange) {
                    const classNames = Object.values(newStyles).join(' ');
                    onStyleChange(classNames);
                  }
                  
                  return newStyles;
                });
              }}
              title={`Click to remove ${type}`}
            >
              {type === 'backgroundColor' ? '🎨 ' : 
               type === 'textColor' ? '🔤 ' : 
               type === 'fontSize' ? '📏 ' : 
               type === 'fontWeight' ? '📝 ' : 
               type === 'padding' ? '📦 ' : 
               type === 'borderRadius' ? '🔄 ' : 
               type === 'shadow' ? '👥 ' : 
               type === 'gradient' ? '🌈 ' : ''}{style} ✕
            </span>
          ))}
          {Object.keys(appliedStyles).length === 0 && (
            <span className="text-gray-400">None</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default StyleableElement;

export default StyleableElement;