import React from 'react'

import { OrgControl } from './_components/org-control'
import { auth } from '@clerk/nextjs'
import { startCase } from 'lodash';

export async function generateMetadata() {
  const {orgSlug} = auth();

  return {
    title: startCase(orgSlug || "organization")
  }
}

const OrganizationIdLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <OrgControl />
        {children}
    </>
  )
}

export default OrganizationIdLayout