---
title: Neuroprosthesis - Fully implanted brain-machine interfaces
date: '2015-09-02'
author: src/data/alumni/samir-menon.yaml
categories:
  - src/data/categories/general.yaml
tags:
image: images/brainsinsilicon_neuromorphics_clip_no_border.gif
image_alt:
figure: images/brainsinsilicon_neuromorphics_clip_no_border.gif
figure_caption: >-
  <b>Neuromorphic Robot-Arm Controller.</b> Neurogrid's spiking neurons compute motor-torques applied to joints of a robot-arm, thereby moving its end-effector to a location specified by the user. Spike rates and rasters are displayed (black-and-white & cyan plots on monitor's left side) as well as the user-specified location (green ball on monitor's right side). The computer relays the difference between the current and desired end-effector locations to Neurogrid as well as the current joint angles [Menon et al., 2014].
excerpt: >-
  BrainGate's partially implanted brain machine interface (BMI) uses half of the 100 mW it consumes to wirelessly transmit neural signals recorded on 100 microelectrodes.
seo:
  title: Neuroprosthesis - Fully implanted brain-machine interfaces
  description: "BrainGate's partially implanted brain machine interface (BMI) uses half of the 100 mW it consumes to wirelessly transmit neural signals recorded on 100 microelectrodes."
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: Neuroprosthesis - Fully implanted brain-machine interfaces
      keyName: property
    - name: 'og:description'
      value: "BrainGate's partially implanted brain machine interface (BMI) uses half of the 100 mW it consumes to wirelessly transmit neural signals recorded on 100 microelectrodes."
      keyName: property
    - name: 'og:image'
      value: images/brainsinsilicon_neuromorphics_clip_no_border.gif
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Neuroprosthesis - Fully implanted brain-machine interfaces
    - name: 'twitter:description'
      value: "BrainGate's partially implanted brain machine interface (BMI) uses half of the 100 mW it consumes to wirelessly transmit neural signals recorded on 100 microelectrodes."
    - name: 'twitter:image'
      value: images/brainsinsilicon_neuromorphics_clip_no_border.gif
      relativeUrl: true
template: post
---
BrainGate's partially implanted brain machine interface (BMI) uses half of the 100 mW it consumes to wirelessly transmit neural signals recorded on 100 microelectrodes. Most of this energy could be saved by processing these signals inside the implant to decode the intended movement. We are exploring a **neuromorphic approach** to perform this processing energy-efficiently. Our approach mimics the brain's graded dendritic potentials using analog circuits and its all-or-none axonal spikes using digital circuits, thereby combining energy-efficient analog computation with software-configurable digital communication.

> We use the Neural Engineering Framework (NEF) to configure our mixed analog-digital neuromorphic chips.

Developed by Eliasmith and Anderson, **NEF** defines three principles of neural computation. First, a population of neurons collectively **represents** a time-varying vector through nonlinear encoding and linear decoding. Second, alternative linear decodings that **transform** this vector (linearly or nonlinearly) are used to compute weighted connections from one neural population to the next. Third, recurrent connections—from a neural population back to itself—realize a transformation that governs the vector's **dynamics**.

> We have used NEF to implement a Kalman-Filter-based decoder with simulated spiking neurons as well as to implement a robot-arm controller with silicon spiking neurons.

The first spiking neural network, consisting of two populations with 1000 spiking neurons each, decoded spike trains recorded from the motor cortex (into intended movement) as accurately as a MatLab implementation of the **Kalman-filter algorithm** on which it was based. The second one, consisting of five populations with 256 spiking neurons each, controlled a **three-degree-of-freedom robot-arm** with a precision of 1.3 to 2.1 cm. To ensure safety, the end-effector's force—rather than its position—is controlled. This **force-based approach** makes the robot compliant to external perturbations (see video). An entire BMI may be realized by combining these two networks, which Brainstorm will run using only a few microwatts.
