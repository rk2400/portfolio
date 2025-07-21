/// <reference types="vite/client" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': {
        name: string;
        style?: React.CSSProperties;
        className?: string;
        onClick?: (event: React.MouseEvent) => void;
        [key: string]: any;
      };
    }
  }
}

export {};
