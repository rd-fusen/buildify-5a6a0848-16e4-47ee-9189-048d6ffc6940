
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
  
  const classNames = cn(
    initialClassName,
    'min-h-[100px] min-w-[200px] border-2 border-dashed border-gray-300 flex items-center justify-center transition-all duration-200',
    Object.values(appliedStyles).join(' ')
  );
  
  const ElementComponent = elementType as any;
  
  return (
    <div className="relative">
      <ElementComponent
        className={classNames}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="text"
          value={content}
          onChange={handleContentChange}
          className="bg-transparent text-center focus:outline-none w-full"
        />
      </ElementComponent>
      
      <div className="mt-2 text-xs text-gray-500">
        <p>Applied styles: {Object.values(appliedStyles).join(' ') || 'None'}</p>
      </div>
    </div>
  );
};

export default StyleableElement;