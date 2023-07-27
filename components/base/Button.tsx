type propTypes = {
  children: React.ReactNode
  name: string
  styleArr: [buttonType, buttonState]
  type: 'submit' | 'reset' | 'button'
}

type buttonType = 'primary' | 'secondary'
type buttonState = 'fill' | 'outline' | 'text' | 'inactive'

export default function Button({ children, styleArr, type }: propTypes) {
  const style = setButtonStyle(styleArr)
  return (
    <button
      title='name'
      type={type}
      className={`flex items-center justify-center font-semibold text-xs px-[6.375rem] py-5 rounded-[1.25rem] hover:scale-105 transition-transform ease-in-out duration-200 ${style}`}
    >
      {children}
    </button>
  )
}

function setButtonStyle(styleArr: [buttonType, buttonState]): string {
  const [buttonType, buttonState] = styleArr
  let style: string = ''
  switch (buttonType) {
    case 'primary':
      if (buttonState === 'fill') {
        style = 'bg-primary-200 text-grey-100  p-4 bg-black'
      } else if (buttonState === 'outline') {
        style =
          'bg-[rgb(247_211_57_/0.20)] border-2 border-primary-100 text-primary-100'
      } else if (buttonState === 'text') {
        style = 'bg-transparent text-primary-100'
      } else if (buttonState === 'inactive') {
        style = 'bg-primary-300 text-grey-100'
      }
      break
    case 'secondary':
      if (buttonState === 'fill') {
        style = 'bg-secondary-200 text-grey-400'
      } else if (buttonState === 'outline') {
        style = 'bg-[#757D8E] border-2 border-secondary-300 text-grey-400'
      } else if (buttonState === 'text') {
        style = 'bg-transparent text-grey-400'
      } else if (buttonState === 'inactive') {
        style = 'bg-secondary-300 text-grey-400'
      }
      break
    default:
      break
  }
  return style
}
