import React from 'react'
import { P, HeadingL, HeadingS } from '../components/text'
import { PageText } from './constants'
import overviewImage from '../images/overview.png'
import compare from '../images/compare.png'
import sample from '../images/sample.png'
import eff from '../images/eff.png'
import paper from '../images/paper.png'

const PageContainer = () => {
  const {
    heading,
    authors,
    departments,
    eccvTitle,
    abstractTitle,
    abstractContentOne,
    abstractContentTwo,
    videoTitle,
    videoSrc,
    citationTitle,
    paperTitle,
    paperLink,
    overviewTitle,
    resultTitle
  } = PageText

  return (
    <div className='page-container'>
      <div>
        <HeadingL>{heading}</HeadingL>
        <div className='text-row'>
          {authors.map(name => <P style={{ marginRight: '8px' }} key={name}>{name + ','}</P>)}
        </div>
        <div className='text-row'>
          {departments.map(name => <P style={{ marginRight: '8px' }} key={name}>{name}</P>)}
        </div>
        <P>{eccvTitle}</P>
      </div>
      <div className='block-container'>
        <div className='text-row' style={{ justifyContent: 'start' }}>
          <HeadingS>{abstractTitle}</HeadingS>
        </div>
        <div className='content-text'>{abstractContentOne}</div>
        <div className='content-text' style={{ marginTop: '16px' }}>{abstractContentTwo}</div>
      </div>
      <div className='block-container'>
        <div className='text-row' style={{ justifyContent: 'start' }}>
          <HeadingS>{videoTitle}</HeadingS>
        </div>
        <div className='text-row'>
          <embed title='all-at-once' width='800' height='550' src={videoSrc} />
        </div>
      </div>
      <div className='block-container'>
        <div className='text-row' style={{ justifyContent: 'start' }}>
          <HeadingS>{citationTitle}</HeadingS>
        </div>
        <div style={{ textAlign: 'initial', backgroundColor: '#e9e9e9', padding: '16px' }}>
          <code style={{ whiteSpace: 'pre-wrap' }}>
            {'@inproceedings{chiall,\n' +
                    '  author = {Zhixiang Chi, Rasoul Mohammadi Nasiri, Zheng Liu, Juwei Lu, Jin Tang, Konstantinos N Plataniotis}, \n' +
                    '  title  = {All at Once: Temporally Adaptive Multi-Frame Interpolation with Advanced Motion Modeling}, \n' +
                    '  booktitle = {European Conference on Computer Vision},\n' +
                    '  year   = {2020}\n' +
                    '}'}
          </code>
        </div>
      </div>
      <div className='block-container'>
        <div className='text-row' style={{ justifyContent: 'start' }}>
          <HeadingS>{paperTitle}</HeadingS>
        </div>
        <div className='text-row' style={{ justifyContent: 'start' }}>
          <a href={paperLink} target='_blank' rel='noreferrer'>
            <img className='paper-download' src={paper} alt='paper_download' />
          </a>
        </div>
      </div>
      <div className='block-container'>
        <div className='text-row' style={{ justifyContent: 'start' }}>
          <HeadingS>{overviewTitle}</HeadingS>
        </div>
        <div className='text-row'>
          <div
            className='content-image'
            style={{
              backgroundImage: `url(${overviewImage})`,
              position: 'relative'
            }}
          />
        </div>
      </div>
      <div className='block-container'>
        <div className='text-row' style={{ justifyContent: 'start' }}>
          <HeadingS>{resultTitle}</HeadingS>
        </div>
        <div
          className='result-image'
          style={{
            backgroundImage: `url(${compare})`,
            position: 'relative'
          }}
        />
        <div
          className='result-image'
          style={{
            backgroundImage: `url(${sample})`,
            position: 'relative'
          }}
        />
        <div
          className='result-image'
          style={{
            backgroundImage: `url(${eff})`,
            position: 'relative',
            paddingBottom: '44%'
          }}
        />
      </div>
    </div>
  )
}

export default PageContainer
