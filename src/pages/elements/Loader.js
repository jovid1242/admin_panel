import XCard from 'core/card/XCard'
import XLoader from 'core/elements/XLoader'
import DFlex from 'core/flexbox/DFlex'
import React from 'react'

export default function Loader() {
    return (
        <>
            <XCard
                title={'Loader Sizes'}
                cardBody={
                    <DFlex type={'space-around'} flexContent={<XLoader />} />
                }
            />
        </>
    )
}
