// types/index.ts
export interface PromptConfig {
    tema: string;
    categoria: string;
    novaCategoria?: string;
    detalhes: string;
    estilo: string;
    formato: string;
    publico: string;
    emocao: string;
    palavras: string;
    tom: string;
    idioma: string;
  }
  
  // lib/promptGenerator.ts
  export class PromptGenerator {
    private config: PromptConfig;
  
    constructor(config: PromptConfig) {
      this.config = config;
    }
  
    private getCategoria(): string {
      return this.config.categoria === 'outro' 
        ? this.config.novaCategoria || 'Outra Categoria'
        : this.config.categoria;
    }
  
    generate(): string {
      return `
        Tema: ${this.config.tema}
        Categoria: ${this.getCategoria()}
        Detalhes: ${this.config.detalhes}
        Estilo: ${this.config.estilo}
        Formato: ${this.config.formato}
        Público-alvo: ${this.config.publico}
        Emoção: ${this.config.emocao}
        Palavras-chave: ${this.config.palavras}
        Tom: ${this.config.tom}
        Idioma: ${this.config.idioma}
  
        **Instruções para a IA:**
        - Crie um conteúdo com base no tema proposto...
        ${this.getFormatSpecificInstructions()}
      `;
    }
  
    private getFormatSpecificInstructions(): string {
      const formatInstructions = {
        'Texto longo': '- Desenvolva parágrafos coesos...',
        'Lista': '- Organize em itens numerados...',
        // outros formatos
      };
      
      return formatInstructions[this.config.formato] || '';
    }
  }