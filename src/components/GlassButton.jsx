export default function GlassButton({ href, className = '', style, children }) {
  return (
    <a href={href} className={`btn-wedge ${className}`.trim()} style={style}>
      <span className="glass-fx" aria-hidden="true"></span>
      <span className="glass-tint" aria-hidden="true"></span>
      <span className="glass-shine" aria-hidden="true"></span>
      <span className="text-container"><span className="text">{children}</span></span>
    </a>
  )
}
