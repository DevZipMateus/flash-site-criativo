interface DiagonalDividerProps {
  direction?: 'left' | 'right';
  className?: string;
}

const DiagonalDivider = ({ direction = 'left', className = '' }: DiagonalDividerProps) => {
  return (
    <div className={`relative h-20 sm:h-24 md:h-32 overflow-hidden ${className}`}>
      {/* Solid diagonal shape */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {direction === 'left' ? (
          <polygon 
            points="0,0 0,100 100,100" 
            fill="hsl(var(--primary))"
            fillOpacity="0.15"
          />
        ) : (
          <polygon 
            points="100,0 0,100 100,100" 
            fill="hsl(var(--primary))"
            fillOpacity="0.15"
          />
        )}
      </svg>
      
      {/* Glowing diagonal line */}
      <div 
        className={`absolute w-[120%] h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent left-[-10%]`}
        style={{
          top: direction === 'left' ? '0' : 'auto',
          bottom: direction === 'left' ? 'auto' : '0',
          transform: direction === 'left' 
            ? 'rotate(-5deg) translateY(50%)' 
            : 'rotate(5deg) translateY(-50%)',
          transformOrigin: direction === 'left' ? 'top left' : 'bottom right',
          boxShadow: '0 0 15px hsl(var(--primary) / 0.6), 0 0 30px hsl(var(--primary) / 0.4)'
        }}
      />
      
      {/* Decorative particles */}
      <div className={`absolute ${direction === 'left' ? 'right-1/4' : 'left-1/4'} top-1/3 w-2 h-2 bg-primary/50 rounded-full blur-sm`} />
      <div className={`absolute ${direction === 'left' ? 'right-1/3' : 'left-1/3'} top-2/3 w-1 h-1 bg-primary/70 rounded-full blur-sm`} />
    </div>
  );
};

export default DiagonalDivider;
