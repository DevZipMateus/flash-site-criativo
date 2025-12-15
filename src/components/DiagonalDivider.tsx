interface DiagonalDividerProps {
  direction?: 'left' | 'right';
  className?: string;
}

const DiagonalDivider = ({ direction = 'left', className = '' }: DiagonalDividerProps) => {
  return (
    <div className={`relative h-16 sm:h-20 md:h-24 overflow-hidden ${className}`}>
      {/* Diagonal shape */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id={`gradient-${direction}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {direction === 'left' ? (
          <polygon 
            points="0,100 100,0 100,100" 
            fill="hsl(var(--background))"
          />
        ) : (
          <polygon 
            points="0,0 100,100 0,100" 
            fill="hsl(var(--background))"
          />
        )}
      </svg>
      
      {/* Glowing line effect */}
      <div 
        className={`absolute ${direction === 'left' ? 'rotate-[-8deg]' : 'rotate-[8deg]'} w-[120%] h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent top-1/2 left-[-10%]`}
        style={{
          boxShadow: '0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--primary) / 0.3)'
        }}
      />
      
      {/* Decorative particles */}
      <div className={`absolute ${direction === 'left' ? 'right-1/4' : 'left-1/4'} top-1/3 w-2 h-2 bg-primary/40 rounded-full blur-sm`} />
      <div className={`absolute ${direction === 'left' ? 'right-1/3' : 'left-1/3'} top-2/3 w-1 h-1 bg-primary/60 rounded-full blur-sm`} />
      <div className={`absolute ${direction === 'left' ? 'right-1/2' : 'left-1/2'} top-1/2 w-1.5 h-1.5 bg-primary/50 rounded-full blur-sm`} />
    </div>
  );
};

export default DiagonalDivider;
