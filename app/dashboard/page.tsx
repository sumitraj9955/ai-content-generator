"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {
  const [userSearchInput,SetUserSearchInput]=useState<string>()
  return (
    <div>
       {/* Search Section */}
       <SearchSection onSearchInput={(value:string)=>SetUserSearchInput(value)}/>

       {/* template list section */}
       <TemplateListSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard

