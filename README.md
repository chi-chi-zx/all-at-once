## All at Once: Temporally Adaptive Multi-Frame Interpolation with Advanced Motion Modeling



Zhixiang Chi, Rasoul Mohammadi Nasiri, Zheng Liu, Juwei Lu, Jin Tang, Konstantinos N Plataniotis

ECCV2020



#### Introduction

This work introduces a true multi-frame interpolator. It utilizes a pyramidal style network in the temporal domain to complete the multi-frame interpolation task in one-shot. A novel  flow estimation procedure using a relaxed loss function, and an advanced, cubic-based, motion model is also used to further boost interpolation accuracy when complex motion segments are encountered.



- #### Overall 

![](ims\overall.PNG)

- #### Efficiency

  ![efficiency](ims\efficiency.PNG)

- #### Example

  ​	![quality](ims\quality.PNG)

#### Requirements

1. Tensorflow 1.4
2. Python 2.7
3. CUDA 8.0
4. slim
5. cv2 (opencv)
6. ffmpeg (used to decode/encode videos for slow motion generation.)
7. The code is developed using the above packages but it was tested on a machine with python 3.7 + tensorflow 1.12 + CUDA 9.0

#### Test the pretrained models

The demo.py code provided takes 4 images: 1,2,3,4 and generates 7 frames between frame 2 & 3.

```python
CUDA_VISIBLE_DEVICES=0 python demo.py \
			--im_1=./ims/0001.jpg\
			--im_2=./ims/0002.jpg\
			--im_3=./ims/0003.jpg\
			--im_4=./ims/0004.jpg
```



#### Slow motion video generation

The provided slow_motion_video_demo.py  generates slow motion effects. The release model is trained to generate 7 intermediate frames (8x slower).  To generate 2x or 4x slow motion, we simply remove the corresponding frames at specific time stamps. The following demo code can be used:

```python
CUDA_VISIBLE_DEVICES=0 python slow_motion_video_demo.py \
			--video_folder=./video \
    		--video_name=3.mp4     \
        	--output_name=3_slow_8.mp4 \
            --rate=8 \
            --keep_frame=True
```



Our work is able to be extended to rates higher than 8x. A generic way is to extend more pyramid levels, if 960fps or higher fps training videos are available. A naive way to extend 8x model to higher rates is to follow the iterative methods. To generates 16x slow motion, we can:

1. run 8x and drop frames to get 2x video, and them apply the 8x model. (run 8x model 2 times)
2. run 8x and then run 8x as but only keep the middle frame. (run 8x model 8 times)
3. 4x and 4x (run 8x model 7 times)

All of the above methods can get 16x slower videos. The user can balance the computation cost and quality.

#### Training data preparation

The training set should contain sequences of sub folders each represents one training sample. Each training sample should contain 4 input frames and 7 ground truth frames.

```
train/
    1/
    2/
    3/
		frame0.jpg   frame1.jpg   frame2.jpg   frame3.jpg 
		framet1.jpg   framet2.jpg   framet3.jpg   framet4.jpg framet5.jpg   framet6.jpg   framet7.jpg
	4/
	...
```

The validation set follows the same structure.



#### Fine-tune the pre-trained model

We provide a training script to finetune the pre-trained model. As both training and convergence are slow and require large memory, we provide the demo training code for jointly fine-tuning all the modules based on the pre-trained model.

```python
CUDA_VISIBLE_DEVICES=0 python trainer_slowmo_new.py 
			--start_epoch=0 \
    		--fine_tune \
        	--valid_path=valid \
            --train_path=train \
            --save_path=save \
```

Note, this training code jointly trains all the modules instead of step-wise training. So training from scratch will harm the performance.



#### Citation

Please cite the following paper if you feel this repository useful.

```
@inproceedings{chiall,
        author    = {Zhixiang Chi, Rasoul Mohammadi Nasiri, Zheng Liu, Juwei Lu, Jin Tang, Konstantinos N Plataniotis}, 
        title     = {All at Once: Temporally Adaptive Multi-Frame Interpolation with Advanced Motion Modeling}, 
        booktitle = {European Conference on Computer Vision},
        year      = {2020}
    }
```





