export interface InvestmentEditorialImageProps {
  imageFileName?: string;
  alt?: string;
}

export interface InvestmentIncludeItem {
  label: string;
  description: string;
}

export interface InvestmentFAQItem {
  question: string;
  answer: string;
}

export interface InvestmentFAQProps {
  items: InvestmentFAQItem[];
}

export interface InvestmentHeroProps {
  imageFileName?: string;
  alt?: string;
  eyebrow?: string;
  headline: string;
}

export interface InvestmentPricingProps {
  headline: string;
  eyebrow?: string;
}

export interface InvestmentProcessProps {
  steps: InvestmentProcessStep[];
}

export interface InvestmentProcessStep {
  number: string;
  title: string;
  description: string;
}
