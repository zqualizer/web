import { ReactElement } from 'react'

import {
  Card,
  FormInput,
  FormText,
  Row,
  View,
  FormLabel,
  FormImg,
} from '@/components/server'
import { FormButton } from '@/components/client'
import { COLOR } from '@/consts'

const StakeZqual = (): ReactElement => {
  return (
    <View className="gap-14">
      <Row className="gap-5">
        <Card className="gap-5">
          <FormText>Stake ZQUAL</FormText>
          <View>
            <FormInput label="Amount" />
          </View>
          <View>
            <FormLabel title="Estimate APR" />
            <Row className="items-center justify-end gap-3">
              <FormText fontType="R.14" color={COLOR.core._200}>
                You will receive
              </FormText>
              <FormText>n,nnn.nn xZQUAL</FormText>
            </Row>
          </View>
          <FormButton>Approve</FormButton>
        </Card>
        <Card className="gap-5">
          <FormText>Unstake ZQUAL</FormText>
          <View>
            <FormInput label="Amount" />
          </View>
          <View>
            <FormLabel title="Estimate APR" />
            <Row className="items-center justify-end gap-3">
              <FormText fontType="R.14" color={COLOR.core._200}>
                You will receive
              </FormText>
              <FormText>n,nnn.nn ZQUAL</FormText>
            </Row>
          </View>
          <FormButton>Approve</FormButton>
        </Card>
      </Row>
      <Row className="gap-5">
        <Card
          style={{
            backgroundColor: COLOR.core._800,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 20,
          }}
        >
          <Row className="gap-5">
            <FormImg src="/icons/logo-zqual.svg" size={40} />
            <View className="gap-2">
              <FormText fontType="R.14">Available Rewards</FormText>
              <FormText>971 ZQUAL</FormText>
            </View>
          </Row>
          <View className="w-20">
            <FormButton size="sm">Claim</FormButton>
          </View>
        </Card>
        <Card
          style={{
            backgroundColor: COLOR.core._800,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 20,
          }}
        >
          <Row className="gap-5">
            <FormImg src="/icons/logo-xzqual.svg" size={40} />
            <View className="gap-2">
              <FormText fontType="R.14">Your xZQUAL</FormText>
              <FormText>98,451</FormText>
            </View>
          </Row>
          <FormText>Locked for 122 Days</FormText>
        </Card>
      </Row>
    </View>
  )
}

export default StakeZqual
