export interface ContactHeadlineProps {
  headline: string;
}

export interface ContactSplitProps {
  imageFileName?: string;
  alt?: string;
  subheading: string;
  phoneDisplay: string;
  phoneHref: string;
  emailDisplay: string;
  emailHref: string;
}

export interface ContactClosingProps {
  message: string;
  links: ContactSocialLink[];
}

export interface ContactSocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}
