"use client"

import { FormLoginPage } from '@/components/FormLoginPage'
import { HeaderLoginPage } from '@/components/HeaderLoginPage'
import { Icon } from '@/components/Icon/Icon'
import React, { useState } from 'react'

const page = () => {



  return (
    <div className='bg-[#1F4CA3] bg-[url("../assets/BG.svg")] bg-cover bg-no-repeat h-screen w-full'>
      <div className='container mx-auto max-w-lg '>
        <div className='flex justify-center flex-col items-center h-screen p-5'>
          <HeaderLoginPage />
          <FormLoginPage />
        </div>
      </div>
    </div>
  )
}

export default page