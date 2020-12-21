import React from 'react'
import { P, HeadingL, HeadingS } from '../components/text'
import { PageText } from './constants'
const PageContainer = () => {
    const {
        heading,
        authors,
        departments,
        abstractTitle,
        abstractContentOne,
        abstractContentTwo,
        videoTitle,
        videoSrc,
        citationTitle
    } = PageText

    return (
        <div className='page-container'>
            <div>
                <HeadingL>{heading}</HeadingL>
                <div className='text-row'>
                    {authors.map(name => <P style={{marginRight:'8px'}}>{name}</P>)}
                </div>
                <div className='text-row'>
                    {departments.map(name => <P style={{marginRight:'8px'}}>{name}</P>)}
                </div>
            </div>
            <div className='block-container'>
                <div className='text-row' style={{justifyContent:'start'}}>
                    <HeadingS>{abstractTitle}</HeadingS>
                </div>
                <div className='content-text'>{abstractContentOne}</div>
                <div className='content-text' style={{ marginTop: '16px' }}>{abstractContentTwo}</div>
            </div>
            <div className='block-container'>
                <div className='text-row' style={{justifyContent:'start'}}>
                    <HeadingS>{videoTitle}</HeadingS>
                </div>
                <div className='text-row'>
                    <embed title='all-at-once' width='800' height='550' src={videoSrc}/>
                </div>
            </div>
            <div className='block-container'>
                <div className='text-row' style={{justifyContent:'start'}}>
                    <HeadingS>{citationTitle}</HeadingS>
                </div>
            </div>
        </div>

    )
}

export default PageContainer