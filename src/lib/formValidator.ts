// lib/formValidator.ts
import { PromptConfig } from '../types';

export class FormValidator {
  private static readonly rules = {
    tema: { required: true, minLength: 3 },
    categoria: { required: true },
    detalhes: { required: true },
    // outras regras
  };

  static validate(config: Partial<PromptConfig>): Record<keyof PromptConfig, string> {
    const errors: Record<string, string> = {};

    for (const [field, rule] of Object.entries(this.rules)) {
      if (rule.required && !config[field]) {
        errors[field] = `${field} é obrigatório`;
      }
      // outras validações
    }

    return errors;
  }
}