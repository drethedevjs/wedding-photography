import {
  InvestmentFAQItem,
  InvestmentIncludeItem,
  InvestmentProcessStep
} from "@/interface/InvestmentInterfaces";

export const investmentIncludes: InvestmentIncludeItem[] = [
  {
    label: "Full-resolution gallery",
    description:
      "Edited high-resolution images delivered to a private online gallery for you, your family, and your friends."
  },
  {
    label: "Print release",
    description:
      "Print anywhere you'd like — directly through the gallery's professional lab or wherever you love."
  },
  {
    label: "Timeline planning",
    description:
      "Wedding day timeline planning so every moment — and every photo — has room to breathe."
  },
  {
    label: "Location guidance",
    description:
      "Portrait location recommendations that flatter the two of you and the light you'll have."
  },
  {
    label: "A steady hand",
    description:
      "A photographer who keeps you on schedule and keeps the whole day feeling calm."
  }
];

export const investmentProcessSteps: InvestmentProcessStep[] = [
  {
    number: "01",
    title: "Inquiry",
    description:
      "Tell me about your day. Fill out the contact form and I'll be in touch within 48 hours."
  },
  {
    number: "02",
    title: "Consultation",
    description:
      "We talk — about your vision, your venue, your priorities. No pressure, just a real conversation."
  },
  {
    number: "03",
    title: "Your Proposal",
    description:
      "I build a custom collection around exactly what you need and send it your way."
  }
];

export const investmentFAQItems: InvestmentFAQItem[] = [
  {
    question: "Do you travel outside of Augusta?",
    answer:
      "Absolutely. I'm based in Augusta and serve the CSRA, but I'm available for travel anywhere. Tell me where you're getting married and we'll make it work. Travel fees may apply."
  },
  {
    question: "Do we get the full-resolution images?",
    answer:
      "Yes. You'll receive a print release and a private online gallery of your edited images: a folder for web sharing and a folder of high-resolution images for printing. You can purchase prints directly from the gallery through a professional lab, or download and print wherever you'd like."
  },
  {
    question: "How do we officially book?",
    answer:
      "A signed contract and retainer lock in your date. Nothing is held without both."
  },
  {
    question: "Do you back up our photos?",
    answer:
      "Yes — multiple times. I shoot with backup gear, back up your images on separate hard drives. Your day is too important to risk."
  },
  {
    question: "How long until we get our photos?",
    answer:
      "I'll share a sneak peek within two weeks. Your full gallery will be delivered within 8 weeks of your wedding day."
  },
  {
    question: "Can I customize my wedding package?",
    answer:
      "Absolutely! Your wedding experience starts with 8 hours of coverage and one photographer (me) and is completely customizable from there. Extra hours of coverage, a second photographer, or an engagement session are just some of the things you can add on to create a custom wedding package that suits your specific needs."
  },
  {
    question: "Do you offer photo albums?",
    answer:
      "Yes, your life deserves to be in print. All of my clients are gifted one wedding album. More are available for purchase."
  }
];
