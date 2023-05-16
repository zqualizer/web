import { ReactElement } from 'react'

import { Row, View } from '@/components/server'
import MySummary from './MySummary'
import CardOne from './CardOne'
import CardTwo from './CardTwo'

const Home = (): ReactElement => {
  return (
    <View className="gap-5">
      <MySummary />
      <Row className="gap-8">
        <View className="gap-5 flex-1">
          <CardOne />
          <CardTwo />
        </View>
        <View className="gap-5 flex-1">
          <CardOne />
          <CardTwo />
        </View>
      </Row>
    </View>
  )
}

export default Home
