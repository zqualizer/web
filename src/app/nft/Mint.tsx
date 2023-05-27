import { ReactElement } from 'react'

import { FormImg, View } from '@/components/server'
import { FormButton } from '@/components/client'

const Mint = (): ReactElement => {
  return (
    <View className="w-[630] self-center gap-5">
      <FormImg src="/zquilibrium.png" size={430} />
      <FormButton>Mint Zquilibrium</FormButton>
    </View>
  )
}

export default Mint
