---
title: Neurogrid - The Core
date: '2016-05-26'
author: src/data/alumni/nick-steinmetz.yaml
categories:
  - src/data/categories/general.yaml
tags:
image: images/flashConn.gif
image_alt: Neuromorphic Chip
figure: images/flashConn.gif
figure_caption: >-
  <b>Anatomy of a Cortical Model.</b> Projections between the sensory (V4) and executive (FEF) areas' excitatory (Exc) and inhibitory (Inh) populations are depicted as animated arcs: FEF's Exc neurons are recurrently connected with each other and reciprocally connected with FEF Inh neurons. They also provide modulatory feedback to V4 Exc neurons, which are excited by external stimuli and inhibited by V4 Inh neurons. Actual connections are point-to-point: An axon arborizes in the target layer (dark profile), its synapses decaying in strength with distance from the center (fading). The four populations have 128x128 neuron each—a total of 65 thousand neurons and 70 million synaptic connections. [<a href="http://web.stanford.edu/group/brainsinsilicon/documents/16_journ_Science.pdf" target="_blank">Nick Steinmetz 2016</a>]
excerpt: >-
  Creating and simulating cortical models on Neurogrid is straightforward--you describe your neural model by writing a Python script.
seo:
  title: Neurogrid - The Core
  description: 'Creating and simulating cortical models on Neurogrid is straightforward.'
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: Neurogrid - The Core
      keyName: property
    - name: 'og:description'
      value: 'Creating and simulating cortical models on Neurogrid is straightforward.'
      keyName: property
    - name: 'og:image'
      value: images/3.png
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Neurogrid - The Core
    - name: 'twitter:description'
      value: 'Creating and simulating cortical models on Neurogrid is straightforward.'
    - name: 'twitter:image'
      value: images/3.png
      relativeUrl: true
template: post
---
Creating and simulating cortical models on Neurogrid is straightforward. You describe your neural model by writing a Python script: Assigning each of Neurogrid's sixteen Neurocores to model a different cortical layer (or cell-type); tailoring its silicon neurons to emulate that cell-population's ion-channel repertoire; and routing its softwires to match their synaptic connectivity. You visualize the simulation results—and change parameters interactively—using a GUI: Selecting a single cell to plot its membrane voltage; choosing an entire layer to raster its spike activity; or examining any level of complexity in between. All with a few mouse clicks. Now you no longer have to dream of simulating a million cortical neurons in real-time!

> A gating-variable pair can be multiplied or summed, modeling one or two ion-channel populations with second- or first-order kinetics, respectively.

With 6 graded and 2 binary programmable parameters, Neurogrid’s ion-channels can model a rich variety of spiking patterns. Ion-channels endow a neuron with its repertoire, which can include bursting and bistability. They influence how inputs are filtered by changing their conductance in response to the dendritic potential. Activating or inactivating in a sigmoidal manner, as dictated by a **gating variable**, Neurogrid's have a programmable voltage threshold, potency (maximum conductance), reversal potential (excitatory or inhibitory), and temporal response (fast or slow). Each Neurogrid neuron has four independently programmable gating variables—except that each is paired with another that shares the same reversal potential.

> Synapses can set a gating-variable's maximum conductance and such gating-variables can be multiplied, modeling NMDA receptors and cholinergic modulation, respectively.

With 5 graded and 3 binary programmable parameters, Neurogrid's synapses can model a rich variety of neuronal interactions. Synapses are the neuron’s input, exciting, inhibiting, or shunting its activity by increasing their conductances transiently in response to spikes from other neurons. Turning on and off in an exponential manner, as dictated by a **low-pass filter**, Neurogrid's have a programmable rise-time (neurotransmitter pulse-width), fall-time (filter time-constant), potency (maximum conductance), and reversal potential (excitatory, inhibitory, or anything in between). A single low-pass filter models an entire population of biological synapses—summating their post-synaptic conductances—much as a single gating-variable models an entire population of ion-channels. Each Neurogrid neuron has four independently programmable low-pass filters that model up to four distinct synapse populations. They can be configured to drive the soma or the dendrite, or to set an ion-channel population's maximum conductance (voltage-gated). Altogether, a Neurogrid neuron has 61 graded and 18 binary programmable parameters—common to all 65,536 silicon neurons in that Neurocore.
