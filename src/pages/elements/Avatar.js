import React from 'react'
import XCard from 'core/card/XCard'
import XAvatar from 'core/elements/XAvatar'

export default function Avatar() {
    return (
        <div>
            <XCard
                title={'Avatar Big Size'}
                cardBody={
                    <>
                        <XAvatar
                            type={'avatar-big'}
                            title={
                                <>
                                    Use avatar <code>type="avatar-big".</code>
                                </>
                            }
                        />
                    </>
                }
            />
            <XCard
                title={'Avatar Middle Size'}
                cardBody={
                    <>
                        <XAvatar
                            type={'avatar-middle'}
                            title={
                                <>
                                    Use avatar{' '}
                                    <code>type="avatar-middle".</code>
                                </>
                            }
                        />
                    </>
                }
            />
            <XCard
                title={'Avatar Small Size'}
                cardBody={
                    <>
                        <XAvatar
                            type={'avatar-small'}
                            title={
                                <>
                                    Use avatar <code>type="avatar-small".</code>
                                </>
                            }
                        />
                    </>
                }
            />
            <XCard
                title={'Avatar Online Indicator'}
                cardBody={
                    <>
                        <XAvatar
                            type={'avatar-middle'}
                            online={true}
                            title={
                                <>
                                    Use avatar <code>type="avatar-small"</code>{' '}
                                    & online = boolean.
                                </>
                            }
                        />
                    </>
                }
            />
            <XCard
                title={'Avatar Small Size'}
                cardBody={
                    <>
                        <XAvatar
                            type={'rounded-big'}
                            title={
                                <>
                                    Use avatar <code>type="rounded-big".</code>
                                </>
                            }
                        />
                    </>
                }
            />
            <XCard
                title={'Avatar Small Size'}
                cardBody={
                    <>
                        <XAvatar
                            type={'rounded-primary'}
                            title={
                                <>
                                    Use avatar
                                    <code>type="rounded-primary".</code>
                                </>
                            }
                        />
                    </>
                }
            />
        </div>
    )
}
