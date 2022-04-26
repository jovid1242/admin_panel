import XCard from 'core/card/XCard'
import XCards from 'core/card/XCards'
import React from 'react'

export default function Cards() {
    return (
        <>
            <XCard
                title={'Card type #1'}
                cardBody={
                    <XCards
                        icon={true}
                        title={'Simple'}
                        bodyText={
                            'Mauris nisi felis, placerat in volutpat id, varius et sapien.'
                        }
                    />
                }
            />
        </>
    )
}
