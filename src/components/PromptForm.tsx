// components/PromptForm.tsx
import { useState, useCallback } from 'react';
import { PromptGenerator } from '../lib/promptGenerator';
import { FormValidator } from '../lib/formValidator';
import type { PromptConfig } from '../types';

export const PromptForm = () => {
  const [formData, setFormData] = useState<Partial<PromptConfig>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const handleSubmit = useCallback(() => {
    const validationErrors = FormValidator.validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const generator = new PromptGenerator(formData as PromptConfig);
      setGeneratedPrompt(generator.generate());
    }
  }, [formData]);

  const handleChange = useCallback((field: keyof PromptConfig, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  return (
    <div className="container">
      {/* Campos do formulário com tratamento de erros */}
      <button onClick={handleSubmit}>Gerar Prompt</button>
      {generatedPrompt && <PromptDisplay content={generatedPrompt} />}
    </div>
  );
};