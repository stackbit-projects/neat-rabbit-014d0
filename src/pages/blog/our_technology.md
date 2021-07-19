---
title: Our Technology - Programmable Neural Silicon
date: '2015-08-25'
author: src/data/team/kwabena-boahen.yaml
categories:
  - src/data/categories/general.yaml
tags:
image:
image_alt: Neuromorphic Chip
excerpt: >-
  A computer that executes one instruction every time the brain activates a synapse would consume a hundred megawatts!
seo:
  title: Our Technology - Programmable Neural Silicon
  description: 'Neuromorphic chips were pioneered by Carver Mead in the late eighties.'
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: Our Technology - Programmable Neural Silicon
      keyName: property
    - name: 'og:description'
      value: 'Neuromorphic chips were pioneered by Carver Mead in the late eighties'
      keyName: property
    - name: 'og:image'
      value: images/3.png
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Our Technology - Programmable Neural Silicon
    - name: 'twitter:description'
      value: 'Neuromorphic chips were pioneered by Carver Mead in the late eighties'
    - name: 'twitter:image'
      value: images/3.png
      relativeUrl: true
template: post
---

**Neuromorphic chips** were pioneered by Carver Mead in the late eighties, when he developed the first silicon retina at Caltech. Extrapolating the doubling in computer performance that was occurring every eighteen months (Moore’s Law), Mead predicted correctly in 1990 that present-day computers would use ten million times more energy (per instruction) than the brain uses (per synaptic activation). He sought to close this efficiency-gap by building microelectronic circuits based on the brain. Mead succeeded in mimicking ion-flow across a neuron's membrane with electron-flow through a transistor's channel—this should not have come as a surprise—the same physical forces are at work in both cases! We made these chips programmable by coming up with a versatile ion-channel analog and reconfigurable synaptic connections.

> A computer that executes one instruction every time the brain activates a synapse would consume a hundred megawatts!

Instead of designing different electronic circuits to emulate each of a wide variety of ion-selective protein pores that stud neurons' membranes, as Mead did in his silicon retina, we came up with a versatile analog that **emulates** the range of behavior they display. Some open when the voltage across the membrane is high, others open when the voltage is low, and everything in between. Nevertheless, the fraction that opens always follows a sigmoid-curve, and the time it takes always follows a bell-curve. As few as **eight transistors** sufficed to replicate this behavior—thanks to the common physical forces—allowing millions of distinct ion-channel populations to be modeled with a single chip. After it is fabricated, its sigmoid- and bell-curves are tailored to fit any desired ion-channel type by computer-controlled bias voltages.

> Whereas simulation refers to software, emulation refers to hardware—a physical realization of a neural model that operates in real-time.

Instead of hardwiring the silicon neurons together, as Mead did in his silicon retina, we **softwired** them by assigning unique addresses. Every time a spike occurs, the chip outputs that neuron’s address. This address points to a memory location (RAM) that holds the synaptic target’s address, or to multiple memory locations if the neuron has multiple synaptic targets. When this address is fed back into the chip, a post-synaptic potential is triggered at the target. An extremely efficient technique, as the same post-synaptic circuit serves all the synapses that neuron receives—virtual synapses! Encoding, translating, and decoding an address happens fast enough to route several million spikes per second, allowing a million connections to be made among a thousand silicon neurons. These softwires may be rerouted simply by overwriting the RAM’s look-up table, making it possible to specify any desired synaptic connectivity.
