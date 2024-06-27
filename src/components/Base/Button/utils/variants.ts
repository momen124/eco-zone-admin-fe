
export const buttonVariants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-text-900',
    
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-text-900',
  
    accent: 'bg-accent-500 hover:bg-accent-600 text-text-900',
  
    outline: 'bg-primary-500 bg-opacity-0 hover:bg-opacity-10 border border-text-50 text-text-50',
  } as const
  
  export type Variants =  keyof typeof buttonVariants