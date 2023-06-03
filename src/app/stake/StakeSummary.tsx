import { ReactElement } from 'react'

import { FormImg, FormText, Row, View } from '@/components/server'

const StakeSummary = (): ReactElement => {
  return (
    <View className="gap-5">
      <FormText fontType="B.24">ZQUALIZER Staking Analytics</FormText>
      <Row className="p-5 gap-4 justify-between">
        <Row className="gap-5">
          <FormImg src="/icons/ic-stake-apr.svg" size={40} />
          <View className="gap-2">
            <FormText fontType="R.12">ZQUAL Staking APR</FormText>
            <FormText fontType="R.16">3.17%</FormText>
          </View>
        </Row>
        <Row className="gap-5">
          <FormImg src="/icons/ic-stake-total.svg" size={40} />
          <View className="gap-2">
            <FormText fontType="R.12">Total ZQUAL Staked</FormText>
            <FormText fontType="R.16">$ 2,473,160</FormText>
          </View>
        </Row>
        <Row className="gap-5">
          <FormImg src="/icons/ic-stake-ratio.svg" size={40} />
          <View className="gap-2">
            <FormText fontType="R.12">Staked Ratio</FormText>
            <FormText fontType="R.16">17.63%</FormText>{' '}
          </View>
        </Row>
        <Row className="gap-5">
          <FormImg src="/icons/ic-stake-locked.svg" size={40} />
          <View className="gap-2">
            <FormText fontType="R.12">Total Value Locked</FormText>
            <FormText fontType="R.16">$ 47,336,302</FormText>
          </View>
        </Row>
      </Row>
    </View>
  )
}

export default StakeSummary
