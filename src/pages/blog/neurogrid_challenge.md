---
title: Neurogrid - The Challenge
date: '2015-05-25'
author: src/data/team/nick-steinmetz.yaml
categories:
  - src/data/categories/general.yaml
tags:
image: images/flashWMAtt.gif
image_alt: Neuromorphic Chip
figure: images/flashWMAtt.gif
figure_caption: >-
  <b>Modeling Selective Attention in Cortex.</b> An executive area (FEF) and a sensory area (V4) are each modeled with populations of excitatory (Exc) and inhibitory (Inh) neurons. External stimuli drive two groups of V4 Exc neurons (within blue and orange boxes), whose average activity is also displayed (corresponding traces below). A brief external cue drives a group of FEF Exc neurons, whose activity, sustained via recurrent excitation, increases the gain of Exc neurons at the corresponding spatial location in V4 (blue box) through modulatory feedback. As a result, the stimulus applied there evokes a stronger response the second time, replicating the effects of selective attention in visual cortex [Nick Steinmetz 2011].
excerpt: >-
  Neurogrid is part of a profound shift in computing, away from the sequential, step-by-step Von Neumann architecture towards a parallel, interconnected architecture more like the brain.
seo:
  title: Neurogrid - The Challenge
  description: 'Neurogrid makes the computational power required to explore various hypotheses about how the cortex works affordable.'
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: Neurogrid - The Challenge
      keyName: property
    - name: 'og:description'
      value: 'Neurogrid makes the computational power required to explore various hypotheses about how the cortex works affordable.'
      keyName: property
    - name: 'og:image'
      value: images/3.png
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Neurogrid - The Challenge
    - name: 'twitter:description'
      value: 'Neurogrid makes the computational power required to explore various hypotheses about how the cortex works affordable.'
    - name: 'twitter:image'
      value: images/3.png
      relativeUrl: true
template: post
---

Brain simulations are difficult because **computers** operate sequentially, with one or a few cores executing a preprogrammed set of instructions step-by-step, while the brain operates in parallel, with a multitude of highly interconnected neurons processing information distributed throughout the network. The computer can compensate for its lack of parallelism by executing instructions blazingly fast, but it pays a steep cost in energy and time to shuttle far-flung data through its central processing unit—putting cortex-scale simulations out of reach. Our lab has built an affordable supercomputer to address this need—Neurogrid.

> Neurogrid's speciality is simulations large enough to include multiple cortical areas yet detailed enough to account for distinct cellular properties.

**Neurogrid** is part of a profound shift in computing, away from the sequential, step-by-step Von Neumann architecture towards a parallel, interconnected architecture more like the brain. Its fundamental component is not a logic gate, like in a digital computer, but a silicon neuron, whose behavior and connectivity are programmable. This neuromorphic approach, developed over the past two decades, yields hitherto unimagined levels of efficiency that make supercomputer performance affordable on a computer-cluster budget.

> Blue Brain has the complementary goal of modeling interactions within a cortical column at subcellular resolution.

A promising alternative to GPUs and FPGAs, Neurogrid makes the computational power required to explore various hypotheses about how the cortex works affordable. Neurogrid's speciality is modeling interactions between **cortical areas**, of which there are over three dozen in the visual system alone, connected by lateral, feedforward, and feedback projections. Feedback projections constitute about half the total—virtually every area projects back to the areas that feed it—yet their role remains mysterious. One hypothesis is that they integrate these areas' myriad representations into a coherent percept. Another hypothesis is that they mediate attention, zooming in on the most informative signals and excluding the others.
