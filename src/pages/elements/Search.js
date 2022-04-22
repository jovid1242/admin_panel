import XCard from 'core/card/XCard'
import XSearch from 'core/elements/XSearch'
import React from 'react'

export default function Search() {
    return (
        <>
            <XCard
                title={'Live Search'}
                cardBody={<XSearch type={'live-search'} />}
            />
            <XCard
                title={'Overlay Search'}
                cardBody={<XSearch type={'overlay-search'} />}
            />
            <XCard
                title={'Search Box'}
                cardBody={<XSearch type={'box-search'} />}
            />
        </>
    )
}
