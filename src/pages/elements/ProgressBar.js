import XCard from 'core/card/XCard'
import XProgressBar from 'core/elements/XProgressBar'
import React from 'react'

export default function ProgressBar() {
    return (
        <>
            <XCard
                title={'Basic Progress Bar'}
                cardBody={
                    <>
                        <XProgressBar
                            type={'primary-main-bcg'}
                            width={'w100'}
                            size={'default-progres-bar'}
                            progressType={'primary-secondary-bcg'}
                            progressWidth={'w20'}
                        />
                        <XProgressBar
                            type={'primary-main-bcg'}
                            width={'w100'}
                            size={'default-progres-bar'}
                            progressType={'info-secondary-bcg'}
                            progressWidth={'w30'}
                        />
                        <XProgressBar
                            type={'primary-main-bcg'}
                            width={'w100'}
                            size={'default-progres-bar'}
                            progressType={'success-secondary-bcg'}
                            progressWidth={'w50'}
                        />
                        <XProgressBar
                            type={'primary-main-bcg'}
                            width={'w100'}
                            size={'default-progres-bar'}
                            progressType={'warning-secondary-bcg'}
                            progressWidth={'w60'}
                        />
                        <XProgressBar
                            type={'primary-main-bcg'}
                            width={'w100'}
                            size={'default-progres-bar'}
                            progressType={'danger-secondary-bcg'}
                            progressWidth={'w70'}
                        />
                        <XProgressBar
                            type={'primary-main-bcg'}
                            width={'w100'}
                            size={'default-progres-bar'}
                            progressType={'secondary-secondary-bcg'}
                            progressWidth={'w80'}
                        />
                        <XProgressBar
                            type={'primary-main-bcg'}
                            width={'w100'}
                            size={'default-progres-bar'}
                            progressType={'dark-secondary-bcg'}
                            progressWidth={'w90'}
                        />
                    </>
                }
            />
            <XCard
                title={'Gradient Progress Bar'}
                cardBody={
                    <>
                        <XProgressBar
                            type={'primary-main-bcg'}
                            width={'w100'}
                            size={'default-progres-bar'}
                            progressType={'primary-secondary-gradient'}
                            progressWidth={'w20'}
                        />
                        <XProgressBar
                            type={'primary-main-bcg'}
                            width={'w100'}
                            size={'default-progres-bar'}
                            progressType={'info-secondary-gradient'}
                            progressWidth={'w30'}
                        />
                        <XProgressBar
                            type={'primary-main-bcg'}
                            width={'w100'}
                            size={'default-progres-bar'}
                            progressType={'success-secondary-gradient'}
                            progressWidth={'w40'}
                        />
                        <XProgressBar
                            type={'primary-main-bcg'}
                            width={'w100'}
                            size={'default-progres-bar'}
                            progressType={'warning-secondary-gradient'}
                            progressWidth={'w50'}
                        />
                        <XProgressBar
                            type={'primary-main-bcg'}
                            width={'w100'}
                            size={'default-progres-bar'}
                            progressType={'danger-secondary-gradient'}
                            progressWidth={'w60'}
                        />
                        <XProgressBar
                            type={'primary-main-bcg'}
                            width={'w100'}
                            size={'default-progres-bar'}
                            progressType={'secondary-secondary-gradient'}
                            progressWidth={'w70'}
                        />
                        <XProgressBar
                            type={'primary-main-bcg'}
                            width={'w100'}
                            size={'default-progres-bar'}
                            progressType={'dark-secondary-gradient'}
                            progressWidth={'w80'}
                        />
                    </>
                }
            />
            <XCard
                title={'Striped Progress Bar'}
                cardBody={
                    <XProgressBar
                        type={'primary-main-bcg'}
                        width={'w100'}
                        size={'default-progres-bar'}
                        progressType={'custom-progress-bar'}
                        progressWidth={'w80'}
                    />
                }
            />
            <XCard
                title={'Striped Progress Bar'}
                cardBody={
                    <XProgressBar
                        type={'primary-main-bcg'}
                        width={'w100'}
                        size={'default-progres-bar'}
                        progressType={'custom-bar-animated'}
                        progressWidth={'w50'}
                    />
                }
            />
            <XCard
                title={'Labels Progress Bar'}
                cardBody={
                    <>
                        <XProgressBar
                            type={'primary-main-bcg'}
                            width={'w100'}
                            progressType={'primary-secondary-bcg'}
                            progressWidth={'w80'}
                            label={'CSS'}
                            secondLabel={'80%'}
                        />
                        <XProgressBar
                            type={'primary-main-bcg' + ' double-titled-bar'}
                            width={'w100'}
                            progressType={'info-secondary-bcg'}
                            progressWidth={'w40'}
                            label={'HTML'}
                            secondLabel={'40%'}
                        />
                    </>
                }
            />
            <XCard
                title={'Progress Bar Different Sizws'}
                cardBody={
                    <>
                        <XProgressBar
                            type={'primary-main-bcg'}
                            width={'w100'}
                            size={'default-progres-bar'}
                            progressType={'primary-secondary-bcg'}
                            progressWidth={'w90'}
                            sizeCode={'Default Progress Bar Size'}
                        />
                        <XProgressBar
                            type={'primary-main-bcg' + ' double-titled-bar'}
                            width={'w100'}
                            size={'progress-bar-sm'}
                            progressType={'info-secondary-bcg'}
                            progressWidth={'w80'}
                            sizeCode={'.progress-bar-sm'}
                        />
                        <XProgressBar
                            type={'primary-main-bcg' + ' double-titled-bar'}
                            width={'w100'}
                            size={'progress-bar-md'}
                            progressType={'info-secondary-bcg'}
                            progressWidth={'w70'}
                            sizeCode={'.progress-bar-md'}
                        />
                        <XProgressBar
                            type={'primary-main-bcg' + ' double-titled-bar'}
                            width={'w100'}
                            size={'progress-bar-lg'}
                            progressType={'info-secondary-bcg'}
                            progressWidth={'w60'}
                            sizeCode={'.progress-bar-lg'}
                        />
                        <XProgressBar
                            type={'primary-main-bcg' + ' double-titled-bar'}
                            width={'w100'}
                            size={'progress-bar-xl'}
                            progressType={'info-secondary-bcg'}
                            progressWidth={'w50'}
                            sizeCode={'.progress-bar-xl'}
                        />
                    </>
                }
            />
        </>
    )
}
