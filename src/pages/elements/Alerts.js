import React from 'react'
import XCard from 'core/card/XCard'
import XAlert from 'core/elements/XAlert'

export default function Alerts() {
    return (
        <div>
            <XCard
                title={'Default Alerts'}
                cardBody={
                    <>
                        <XAlert type={'primary'} />
                        <XAlert type={'warning'} />
                        <XAlert type={'success'} />
                        <XAlert type={'info'} />
                        <XAlert type={'error'} />
                    </>
                }
            />
            <XCard
                title={'Outline Alerts'}
                cardBody={
                    <>
                        <XAlert type={'outline-primary'} />
                        <XAlert type={'outline-error'} />
                    </>
                }
            />
            <XCard
                title={'Solid Alerts'}
                cardBody={
                    <>
                        <XAlert type={'solid-primary'} />
                        <XAlert type={'solid-danger'} />
                    </>
                }
            />
        </div>
    )
}
