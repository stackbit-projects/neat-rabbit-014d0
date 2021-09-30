---
title: Attention - Spike or burst?
date: '2014-02-10'
author: src/data/alumni/kai-michael-hynna.yaml
categories:
  - src/data/categories/general.yaml
tags:
image:
image_alt:
figure: images/introAni_ThalBurst.gif
figure_caption: >-
  <b>Bursting in a silicon thalamocortical cell.</b> Retinal input (blue) triggers single spikes (red) or bursts (green). Bursts require priming by inhibition (from a reticular neuron) evoked by vigorous responses; otherwise the cell switches to single-spike mode. [Kai Hynna 2002]
excerpt: >-
  How can a neuron hear anything over the cacophony created by ten thousand inputs?
seo:
  title: Attention - Spike or burst?
  description: 'How can a neuron hear anything over the cacophony created by ten thousand inputs?'
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: Attention - Spike or burst?
      keyName: property
    - name: 'og:description'
      value: 'How can a neuron hear anything over the cacophony created by ten thousand inputs?'
      keyName: property
    - name: 'og:image'
      value: images/introAni_ThalBurst.gif
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Attention - Spike or burst?
    - name: 'twitter:description'
      value: 'How can a neuron hear anything over the cacophony created by ten thousand inputs?'
    - name: 'twitter:image'
      value: images/introAni_ThalBurst.gif
      relativeUrl: true
template: post
---
How can a neuron hear anything over the cacophony created by ten thousand inputs? A logic gate's handful of inputs pales in comparison. The massive feedback projection from cortex to the **thalamus**, which relays sensory information, may solve this problem.

> Our calculations suggest that fifty spikes arriving within 1ms or seven bursts arriving within 100ms will fire a cortical cell reliably.

Setting a threshold so high that it is rarely exceeded by background activity makes **reliable transmission** possible. Assume a neuron's 10,000 inputs fire 10 times per second, on average. Then 100±10 spikes (mean ± sigma) occur in 1ms. Hence, the chance that more than 150 spikes (five sigma) are received is just 1%. For a 100ms interval, thresholds of 7 spikes (seven sigma) at each dendritic terminal and 7 active terminals at the soma yield the same probability.

> We are investigating how bursting and synchrony can reduce cacophony and boost saliency.

All the neurons in the thalamocortical circuit, including reticular interneurons, which inhibit relay neurons, can burst. But they require a strong input to do so, as a large leak must be overcome. When this leak is turned off, possibly by cortical feedback, the neurons switch their **firing mode** to single spikes, allowing reciprocal inhibition to synchronize the interneurons, which in turn synchronize the relays.
