'use client'

import { ReactElement } from 'react'

import { Card, FormText, Row, View } from '@/components/server'
import styled from 'styled-components'
import { COLOR } from '@/consts'

const StyledCardItem = styled(View)`
  flex: 1;
  border-radius: 20px;
  background-color: ${COLOR.core._800};
  padding: 16px 0;
  align-items: center;
  justify-content: center;
  border: 2px solid #373742;
  gap: 12px;
`

const MintInfo = (): ReactElement => {
  return (
    <View>
      <View className="gap-3 pb-8">
        <FormText fontType="B.24">Mint Zquilibrium :</FormText>
        <FormText fontType="R.14">
          Zquilibrium owners will be eligible to receive rewards in both USDT
          and ZQUAL
        </FormText>
      </View>
      <Card className="gap-3">
        <Row className="gap-3">
          <StyledCardItem>
            <FormText fontType="B.14">Available Balance</FormText>
            <FormText fontType="B.20">$ 12,210,118,743</FormText>
          </StyledCardItem>
          <StyledCardItem>
            <FormText fontType="B.14">My Zquilibrium Value</FormText>
            <FormText fontType="B.20">$ 40,000</FormText>
          </StyledCardItem>
        </Row>
        <Row className="gap-3">
          <StyledCardItem>
            <FormText fontType="B.14">Zquilibrium APR</FormText>
            <FormText fontType="B.20">12.81%</FormText>
          </StyledCardItem>
          <StyledCardItem>
            <FormText fontType="B.14">Zquilibrium Daily Rewards</FormText>
            <FormText fontType="B.20">$ 84.00</FormText>
          </StyledCardItem>
        </Row>
      </Card>
    </View>
  )
}

export default MintInfo
