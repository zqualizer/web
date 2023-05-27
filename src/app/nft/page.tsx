import { ReactElement } from 'react'

import { Row, View } from '@/components/server'
import Mint from './Mint'
import MintInfo from './MintInfo'
import ChartOne from './ChartOne'

const NFT = (): ReactElement => {
  return (
    <View>
      <Row className="gap-5 pb-28">
        <View className="flex-1">
          <Mint />
        </View>
        <View className="flex-1">
          <MintInfo />
        </View>
      </Row>
      <Row className="gap-5">
        <ChartOne />
        <ChartOne />
      </Row>
    </View>
  )
}

export default NFT
