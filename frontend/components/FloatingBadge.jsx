export default function FloatingBadge({ icon: Icon, children, className, testId }) {
  return (
    <div className={`absolute z-20 flex items-center gap-2 rounded-xl border border-gray-900/80 px-3 py-2 text-sm leading-tight text-gray-900 shadow-[3px_3px_0_0_rgba(17,24,39,0.9)] animate-float ${className}`} data-testid={testId}>
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span>{children}</span>
    </div>
  );
}
