export const PageText = {
  heading: 'All at Once: Temporally Adaptive Multi-Frame Interpolation with Advanced Motion Modeling',
  authors: [
    'Zhixiang Chi*',
    'Rasoul Mohammadi Nasiri*',
    'Zheng Liu*',
    'Juwei Lu*',
    'Jin Tang*',
    'Konstantinos N Plataniotis#'
  ],
  departments: [
    '*Noah’s Ark Lab, Huawei Technologies',
    '#University of Toronto, Canada'
  ],
  eccvTitle: 'ECCV2020',
  abstractTitle: 'Abstract',
  abstractContentOne: 'Recent advances in high refresh rate displays as well as the increased interest in high rate of slow motion and frame up-conversion fuel the demand for efficient and cost-effective multi-frame video interpolation solutions.  To that regard, inserting multiple frames between consecutive video frames are of paramount importance for the consumer electronics industry. State-of-the-art methods are iterative solutions interpolating one frame at the time. They introduce temporal inconsistencies and clearly noticeable visual artifacts.',
  abstractContentTwo: 'Departing from the state-of-the-art, this work introduces a true multi-frame interpolator. It utilizes a pyramidal style network in the temporal domain to complete the multi-frame interpolation task in one-shot. A novel flow estimation procedure using a relaxed loss function, and an advanced, cubic-based, motion model is also used to further boost interpolation accuracy when complex motion segments are encountered. Results on the Adobe240 dataset show that the proposed method generates visually pleasing, temporally consistent frames, outperforms the current best off-the-shelf method by 1.57db in PSNR with 8 times smaller model and 7.7 times faster. The proposed method can be easily extended to interpolate a large number of new frames while remaining efficient because of the one-shot mechanism.',
  videoTitle: 'Video Display',
  videoSrc: 'https://www.youtube.com/embed/2s6pWOR1dHk?autoplay=1&mute=1',
  citationTitle: 'Citation',
  paperTitle: 'Paper',
  paperLink: 'https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123720103.pdf',
  suppLink: 'https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123720103-supp.zip',
  overviewTitle: 'Method overview',
  resultTitle: 'Results'
}
