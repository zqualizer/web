import { ReactElement } from 'react'

import { FormText, Row, View } from '@/components/server'

const MySummary = (): ReactElement => {
  return (
    <Row className="p-5 gap-4 justify-between">
      <View>
        <FormText>My total balance</FormText>
        <FormText>$ 58,600</FormText>
      </View>
      <View>
        <FormText>My SHP value</FormText>
        <FormText>$ 58,600</FormText>
      </View>
      <View>
        <FormText>My rewards</FormText>
        <FormText>$ 58,600</FormText>
      </View>
      <View>
        <FormText>My rewards</FormText>
        <FormText>$ 58,600</FormText>
      </View>
    </Row>
  )
}

export default MySummary
