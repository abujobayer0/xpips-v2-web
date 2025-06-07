export interface StatisticItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  animationDelay?: number;
}

export interface ButtonConfig {
  text: string;
  variant: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
}

export interface HeroProps {
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  title?: {
    main: string;
    highlighted: string;
    secondary?: string;
  };
  description?: string;
  highlightedAmount?: string;
  buttons?: ButtonConfig[];
  statistics?: StatisticItem[];
  sponsorLogo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  showTrustpilot?: boolean;
  showBackgroundSvg?: boolean;
}

export interface StatisticsProps {
  statistics: StatisticItem[];
}

export interface ActionButtonsProps {
  buttons: ButtonConfig[];
}
