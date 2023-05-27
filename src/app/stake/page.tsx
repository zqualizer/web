import { ReactElement } from 'react'

import { View } from '@/components/server'
import StakeSummary from './StakeSummary'
import StakeZqual from './StakeZqual'

const Stake = (): ReactElement => {
  return (
    <View className="gap-5">
      <StakeSummary />
      <StakeZqual />
    </View>
  )
}

export default Stake
