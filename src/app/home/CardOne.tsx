'use client'

import { ReactElement } from 'react'
import styled from 'styled-components'

import { COLOR } from '@/consts'
import { FormText, View } from '@/components/server'
import Card from '@/components/server/Card'

const StyledCardItem = styled(View)`
  background-color: red;
  border-radius: 20px;
  background-color: ${COLOR.core._800};
  padding: 16px 0;
  align-items: center;
  border: 2px solid ${COLOR.core._600};
`

const CardOne = (): ReactElement => {
  return (
    <Card className="gap-4">
      <StyledCardItem>
        <FormText>Total Value Locked</FormText>
        <FormText>$ 12,210,118,743</FormText>
      </StyledCardItem>
      <StyledCardItem>
        <FormText>My SHP value</FormText>
        <FormText>$ 58,600</FormText>
      </StyledCardItem>
      <StyledCardItem>
        <FormText>My rewards</FormText>
        <FormText>$ 58,600</FormText>
      </StyledCardItem>
      <StyledCardItem>
        <FormText>My rewards</FormText>
        <FormText>$ 58,600</FormText>
      </StyledCardItem>
    </Card>
  )
}

export default CardOne
