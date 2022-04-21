import XButton from 'core/button/XButton'
import XButtonGroups from 'core/button/XButtonGroups'
import XCard from 'core/card/XCard'
import DFlex from 'core/flexbox/DFlex'
import React from 'react'

export default function ButtonGroups(params) {
    return (
        <div>
            <XCard
                title={'Horizontal'}
                cardBody={
                    <DFlex
                        type={'d-flex'}
                        flexContent={
                            <>
                                <XButton name={'Left'} type={'dark'} />
                                <XButton name={'Midle'} type={'dark'} />
                                <XButton name={'Right'} type={'dark'} />
                            </>
                        }
                    />
                }
            />
            <XCard
                title={'Input Group'}
                cardBody={
                    <DFlex
                        type={'d-flex'}
                        flexContent={
                            <>
                                <XButton name={'1'} type={'dark'} />
                                <XButton name={'2'} type={'dark'} />
                                <XButton name={'3'} type={'dark'} />
                                <XButton name={'3'} type={'dark'} />
                            </>
                        }
                    />
                }
            />
            <XCard
                title={'Input Group'}
                cardBody={
                    <>
                        <XButton name={'Button'} type={'dark'} />
                        <XButton name={'Button'} type={'dark'} />
                        <XButton name={'Button'} type={'dark'} />
                        <XButton name={'Button'} type={'dark'} />
                    </>
                }
            />
        </div>
    )
}
