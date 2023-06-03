import { ReactElement } from 'react'

import { FormText, Row, View } from '@/components/server'

const Header = (): ReactElement => {
  return (
    <Row className="justify-between p-5 max-w-[1800px]">
      <View>
        <FormText>Zqualizer</FormText>
      </View>
      <View>
        

        <div
          data-te-chip-init
          data-te-ripple-init
          class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200">
          <img
            class="my-0 -ml-[12px] mr-[8px] h-[inherit] w-[inherit] rounded-[100%]"
            src="https://s1.coincarp.com/logo/1/sui.png"
            alt="Contact Person" />
          0x4066....9814
        </div>

      </View>
    </Row>
  )
}

export default Header
