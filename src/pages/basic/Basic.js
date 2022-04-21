import React, { useState } from 'react'
import XInput from 'core/forms/XInput'
import XCard from 'core/card/XCard'
import XUpload from 'core/forms/XUpload'
import XButton from 'core/button/XButton'

export default function Basic() {
    return (
        <div>
            <form>
                <XCard
                    title={'Input Text'}
                    cardBody={
                        <>
                            <XInput
                                name="text"
                                placeholder="Some Text..."
                                type="text"
                                label={
                                    <>
                                        Use input <code>type="text".</code>
                                    </>
                                }
                            />
                            <XButton name={'Submit'} type={'primary'} />
                        </>
                    }
                />
                <XCard
                    title={'Input Password'}
                    cardBody={
                        <>
                            <XInput
                                name="password"
                                placeholder="Password"
                                type="password"
                                label={
                                    <>
                                        Use input <code>type="password".</code>
                                    </>
                                }
                            />
                            <XButton name={'Submit'} type={'primary'} />
                        </>
                    }
                />
                <XCard
                    title={'Input Email'}
                    cardBody={
                        <>
                            <XInput
                                name="email"
                                placeholder="example@example.com"
                                type="email"
                                label={
                                    <>
                                        Use input <code>type="email".</code>
                                    </>
                                }
                            />
                            <XButton name={'Submit'} type={'primary'} />
                        </>
                    }
                />
                <XCard
                    title={'Input Range'}
                    cardBody={
                        <XInput name="range" placeholder="" type="range" />
                    }
                />
                <XCard
                    title={'Upload File'}
                    cardBody={
                        <XUpload
                            name="file"
                            placeholder="Choose File"
                            type="file"
                            title="Choose File"
                            button="Browse"
                        />
                    }
                />
            </form>
        </div>
    )
}
