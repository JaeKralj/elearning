export default function Card({ children, className }: propTypes) {
  return (
    <div className={`my-2 rounded-xl p-4 shadow-sm ${className}`}>
      {children}
    </div>
  )
}

type propTypes = {
  children: React.ReactNode
  className?: string
}
