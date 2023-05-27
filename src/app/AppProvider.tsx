import { ReactElement, ReactNode } from 'react'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const AppProvider = ({ children }: { children: ReactNode }): ReactElement => {
  return <>{children}</>
}

export default AppProvider
