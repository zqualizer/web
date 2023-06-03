import { ReactElement } from 'react'

import { FormImg, FormText, Row, View } from '@/components/server'

const MySummary = (): ReactElement => {
  return (
    <Row className="p-5 gap-4 justify-between">
      <Row className="gap-5">
        <FormImg src="/icons/ic-mybalance.svg" size={40} />
        <View className="gap-2">
          <FormText fontType="R.12">My total balance</FormText>
          <FormText fontType="R.16">$ 10,600</FormText>
        </View>
      </Row>
      <Row className="gap-5">
        <FormImg src="/icons/ic-myvalue.svg" size={40} />
        <View className="gap-2">
          <FormText fontType="R.12">My Zquilibrium Value</FormText>
          <FormText fontType="R.16">$ 10,000</FormText>
        </View>
      </Row>
      <Row className="gap-5">
        <FormImg src="/icons/logo-zqual.svg" size={40} />
        <View className="gap-2">
          <FormText fontType="R.12">My rewards</FormText>
          <FormText fontType="R.16">$ 387</FormText>{' '}
        </View>
      </Row>
      <Row className="gap-5">
        <FormImg src="/icons/logo-token-usdt-40.svg" size={40} />
        <View className="gap-2">
          <FormText fontType="R.12">My rewards</FormText>
          <FormText fontType="R.16">$ 196</FormText>
        </View>
      </Row>
    </Row>
  )
}

export default MySummary
