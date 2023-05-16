import { ReactElement } from 'react'

import { FormText, Row, View } from '@/components/server'

const Header = (): ReactElement => {
  return (
    <Row className="justify-between p-5">
      <View>
        <FormText>Logo</FormText>
      </View>
      <View>
        <FormText>Connect Wallet</FormText>
      </View>
    </Row>
  )
}

export default Header
