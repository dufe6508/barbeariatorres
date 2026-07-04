export default function Button({ href, onClick, variant = 'red', size, icon, className = '', style, children }) {
  const cls = ['btn-torres', `btn-torres--${variant}`, size && `btn-torres--${size}`, className]
    .filter(Boolean).join(' ')
  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="btn-torres__ar" aria-hidden="true">→</span>}
    </>
  )
  if (onClick && !href) {
    return <button type="button" className={cls} style={style} onClick={onClick}>{content}</button>
  }
  return <a href={href} className={cls} style={style} onClick={onClick}>{content}</a>
}
