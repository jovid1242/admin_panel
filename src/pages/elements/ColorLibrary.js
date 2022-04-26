import XCard from 'core/card/XCard'
import XColorLibrary from 'core/elements/XColorLibrary'
import DFlex from 'core/flexbox/DFlex'
import React from 'react'
export default function ColorLibrary() {
    return (
        <div>
            <XCard
                title={'Main Colors'}
                cardBody={
                    <DFlex
                        type={'wrap'}
                        flexContent={
                            <>
                                <XColorLibrary
                                    type={'color-primary'}
                                    title={'Primary'}
                                    palette={'#4361ee'}
                                />
                                <XColorLibrary
                                    type={'color-info'}
                                    title={'Info'}
                                    palette={'#007bff'}
                                />
                                <XColorLibrary
                                    type={'color-success'}
                                    title={'Success'}
                                    palette={'#28a745'}
                                />
                                <XColorLibrary
                                    type={'color-warning'}
                                    title={'Warning'}
                                    palette={'#e2a03f'}
                                />
                                <XColorLibrary
                                    type={'color-danger'}
                                    title={'Danger'}
                                    palette={'#e7515a'}
                                />
                                <XColorLibrary
                                    type={'color-secondary'}
                                    title={'Secondary'}
                                    palette={'#e7515a'}
                                />
                                <XColorLibrary
                                    type={'color-dark'}
                                    title={'Dark'}
                                    palette={'#3b3f5c'}
                                />
                            </>
                        }
                    />
                }
            />
            <XCard
                title={'Light Colors'}
                cardBody={
                    <DFlex
                        type={'wrap'}
                        flexContent={
                            <>
                                <XColorLibrary
                                    type={'primary-light'}
                                    title={'Primary'}
                                    palette={'#eaf1ff'}
                                />
                                <XColorLibrary
                                    type={'info-light'}
                                    title={'Info'}
                                    palette={'#e7f7ff'}
                                />
                                <XColorLibrary
                                    type={'success-light'}
                                    title={'Success'}
                                    palette={'#ddf5f0'}
                                />
                                <XColorLibrary
                                    type={'warning-light'}
                                    title={'Warning'}
                                    palette={'#fff9ed'}
                                />
                                <XColorLibrary
                                    type={'danger-light'}
                                    title={'Danger'}
                                    palette={'#fff5f5'}
                                />
                                <XColorLibrary
                                    type={'secondary-light'}
                                    title={'Secondary'}
                                    palette={'#f3effc'}
                                />
                                <XColorLibrary
                                    type={'dark-light'}
                                    title={'Dark'}
                                    palette={'#e3e4eb'}
                                />
                            </>
                        }
                    />
                }
            />
            <XCard
                title={'More Colors'}
                cardBody={
                    <DFlex
                        type={'wrap'}
                        flexContent={
                            <>
                                <XColorLibrary
                                    type={'white'}
                                    title={'White'}
                                    palette={'#fff'}
                                />
                                <XColorLibrary
                                    type={'teal'}
                                    title={'Teal'}
                                    palette={'#20c997'}
                                />
                                <XColorLibrary
                                    type={'yellow'}
                                    title={'Yellow'}
                                    palette={'#ffc107'}
                                />
                                <XColorLibrary
                                    type={'pink'}
                                    title={'Pink'}
                                    palette={'#e83e8c'}
                                />
                                <XColorLibrary
                                    type={'indigo'}
                                    title={'Indigo'}
                                    palette={'#6610f2'}
                                />
                                <XColorLibrary
                                    type={'green'}
                                    title={'Green'}
                                    palette={'#28a745'}
                                />
                                <XColorLibrary
                                    type={'orange'}
                                    title={'Orange'}
                                    palette={'#fd7e14'}
                                />
                            </>
                        }
                    />
                }
            />
        </div>
    )
}