
import React from 'react';
import StyleEditor from '@/components/StyleEditor/StyleEditor';

const StyleEditorPage: React.FC = () => {
  const handleSave = (stylesData: string) => {
    // In a real application, you might want to save this to localStorage or a backend
    console.log('Saving styles:', stylesData);
    localStorage.setItem('tailwind-styles', stylesData);
    alert('Styles saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StyleEditor onSave={handleSave} />
    </div>
  );
};

export default StyleEditorPage;