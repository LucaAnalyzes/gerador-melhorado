// tests/promptGenerator.test.ts
import { PromptGenerator } from '../lib/promptGenerator';
import { PromptConfig } from '../types';

describe('PromptGenerator', () => {
  const mockConfig: PromptConfig = {
    tema: 'Teste',
    categoria: 'Tecnologia',
    detalhes: 'Alto',
    // outros campos
  };

  it('should generate basic prompt structure', () => {
    const generator = new PromptGenerator(mockConfig);
    const result = generator.generate();
    
    expect(result).toContain('Tema: Teste');
    expect(result).toContain('Categoria: Tecnologia');
  });

  it('should handle custom category', () => {
    const customConfig = {
      ...mockConfig,
      categoria: 'outro',
      novaCategoria: 'Custom'
    };
    
    const generator = new PromptGenerator(customConfig);
    expect(generator.generate()).toContain('Categoria: Custom');
  });
});