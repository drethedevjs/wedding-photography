export interface AboutHeroProps {
  imageFileName?: string;
  alt?: string;
  headline: string;
}

export interface AboutIntroProps {
  portraitFileName?: string;
  portraitAlt?: string;
}

export interface AboutValue {
  label: string;
  description: string;
}

export interface AboutValuesProps {
  values: AboutValue[];
}

export interface AboutEditorialImageProps {
  imageFileName?: string;
  alt?: string;
}

export interface AboutDirectMessageProps {
  message: string;
}
