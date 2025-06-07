import { HeroProps } from './types';

export const defaultHeroConfig: Required<HeroProps> = {
  logo: {
    src: '/assets/xpips-logo.png',
    alt: 'Company Logo',
    width: 120,
    height: 100,
  },
  title: {
    main: 'Your Journey To Simulated',
    highlighted: 'Funded Trading',
    secondary: 'Your Journey To Simulated',
  },
  description:
    'Join XPIPS and access up to in simulated capital. We support serious traders',
  highlightedAmount: '$400,000',
  buttons: [
    { text: 'Start Trading', variant: 'primary' },
    { text: 'Learn more', variant: 'secondary' },
  ],
  statistics: [
    { value: 140, suffix: '+', label: 'Countries' },
    { value: 65, suffix: 'K+', label: 'Qualified Analysts' },
    { value: 750, suffix: 'K+', label: 'Traders' },
    { value: 10, suffix: 'K', label: 'Virtual Strategies' },
    { value: 100, prefix: '$', suffix: 'M+', label: 'Performance Fee' },
  ],
  sponsorLogo: {
    src: '/assets/sponsor-logo.png',
    alt: 'Sponsor',
    width: 138,
    height: 100,
  },
  showTrustpilot: true,
  showBackgroundSvg: true,
};
