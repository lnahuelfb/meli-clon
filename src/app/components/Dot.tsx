const Dot = ({ style = '', children }: { style?: string, children: React.ReactNode | string }) => {
  return (
    <span className={`rounded-full text-center ${style}`}>{children}</span>
  )
}

export default Dot