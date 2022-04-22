import XCard from 'core/card/XCard'
import XProgressBar from 'core/elements/XProgressBar'
import React from 'react'

export default function ProgressBar() {
    return (
        <>
            <XCard
                title={'Basic Progress Bar'}
                cardBody={
                    <XProgressBar
                        type={'primary-main-bcg'}
                        width={'w100'}
                        progressType={'primary-secondary-bcg'}
                        progressWidth={'w20'}
                    />
                }
            />
        </>
    )
}
