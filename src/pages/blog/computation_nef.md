---
title: Neural Computation - NEF
date: '2014-02-03'
author: src/data/alumni/sam-fok.yaml
categories:
  - src/data/categories/general.yaml
tags:
image:
image_alt:
figure: images/ngNEFSystem.png
figure_caption: >-
  <b>NEF on Neurogrid System Architecture.</b> Using the subthreshold, analog silicon neurons on Neurogrid with an FPGA daughterboard allows us to implement the principles of NEF and construct networks for real world tasks.
excerpt: >-
  To map computations onto Neurogrid, we use the Neural Engineering Framework.
seo:
  title: Neural Computation - NEF
  description: "To map computations onto Neurogrid, we use the Neural Engineering Framework."
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: Neural Computation - NEF
      keyName: property
    - name: 'og:description'
      value: "To map computations onto Neurogrid, we use the Neural Engineering Framework."
      keyName: property
    - name: 'og:image'
      value: images/ngNEFSystem.png
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Neural Computation - NEF
    - name: 'twitter:description'
      value: "To map computations onto Neurogrid, we use the Neural Engineering Framework."
    - name: 'twitter:image'
      value: images/ngNEFSystem.png
      relativeUrl: true
template: post
---
With a power budget of less than 20 watts, the brain makes simple work of computational tasks that are extremely challenging for digital computers. Even the simplest tasks like walking take several orders of magnitude more power on a digital computer than for the brain. How can we mimic the efficiency of the brain in our computations? Neurogrid offers us the ability to create networks of up to a million, heterogenous neurons operating in real time for orders of magnitude less power than a conventional computer. To map computations onto Neurogrid, we use the [Neural Engineering Framework](http://compneuro.uwaterloo.ca/research/nef.html) (NEF).

> NEF provides a principled method for mapping mathematical functions onto spiking neural networks.

Developed by Eliasmith et al., the NEF uses three principles to map mathematical functions onto spiking neurons: representation, transformation, and dynamics.
1. Representation: A multidimensional input is nonlinearly encoded in the spike rates of a group of neurons. A linear decode can be used to recover the original input.
2. Transformation: A connection between neural groups computes a function on the represented value. Arbitrary functions can be computed by changing the decoding weights.
3. Dynamics: Using standard control theory, recurrent connections, and the dynamics of synapses, networks can implement dynamical systems.

> Applying the three principles of representation, transformation, and dynamics with Neurogrid allow us to build scalable networks for real world application.

With Neurogrid and NEF, we have a platform for low power, reprogrammable computation. Reprogramming the network to perform a new computation is simply a matter of changing the connection weights between neurons. The potential applications for this system are vast. Two application areas we are currently working on include related robotic control and signal estimation.
