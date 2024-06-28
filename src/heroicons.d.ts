// src/heroicons.d.ts

// Assuming @heroicons/react/outline exports IconComponent type
declare module '@heroicons/react/outline' {
    import { IconComponent } from '@heroicons/react/dist/types';
  
    // Replace 'any' with specific types if available
    const content: { [key: string]: IconComponent };
    export = content;
  }
  