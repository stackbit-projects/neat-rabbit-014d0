---
title: Neuromorphics - Combining analog computation with digital communication
date: '2015-09-02'
author: src/data/alumni/ben-varkey-benjamin.yaml
categories:
  - src/data/categories/general.yaml
tags:
image:
image_alt:
figure: images/spaun.png
figure_caption: >-
  <b>Rapid variable creation in Spaun.</b> Several input-output examples are presented to Spaun visually. It is then given an input and must produce the appropriate output, writing its answer. To get the right answer in this task, Spaun must infer a common pattern in the input-output pairings. Doing so requires induction, a central feature of human cognition. In the trial shown, it responds correctly, successfully inferring the common pattern [Eliasmith et al. 2012].
excerpt: >-
  Spaun autonomously performs several different cognitive visuomotor tasks but runs 9,000 times slower than real-time on a 16-core PC.
seo:
  title: Neuromorphics - Combining analog computation with digital communication
  description: "Spaun autonomously performs several different cognitive visuomotor tasks but runs 9,000 times slower than real-time on a 16-core PC."
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: Neuromorphics - Combining analog computation with digital communication
      keyName: property
    - name: 'og:description'
      value: "Spaun autonomously performs several different cognitive visuomotor tasks but runs 9,000 times slower than real-time on a 16-core PC."
      keyName: property
    - name: 'og:image'
      value: images/spaun.png
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Neuromorphics - Combining analog computation with digital communication
    - name: 'twitter:description'
      value: "Spaun autonomously performs several different cognitive visuomotor tasks but runs 9,000 times slower than real-time on a 16-core PC."
    - name: 'twitter:image'
      value: images/spaun.png
      relativeUrl: true
template: post
---

<div align="center"><iframe src="https://www.youtube.com/embed/tPRbphzQ-T8" allowfullscreen></div>

The five-year goal of this ONR-funded project, which begun in April 2013, is to build a multichip neuromorphic system that will run Spaun in real-time while consuming mere milliwatts of power. Spaun is the world's largest behaving brain model. Its unprecedented scale—2.3M neurons connected by 898M synapses—was acheived by using NEF (Neural Engineering Framework) to synthesize synaptic weights automatically from a specification of population-level representations and transformations. Thanks to this higher level of abstraction, it is now possible to build spiking neural networks that perform interesting cognitive visuomotor tasks completely autonomously.

> Spaun autonomously performs several different cognitive visuomotor tasks but runs 9,000 times slower than real-time on a 16-core PC.

Spaun performs a total of eight different **visuomotor tasks** with a network of 2,341,242 spiking neurons organized into 32,143 pools connected by 898,205,908 synapses. For example, its 220K-neuron visual heirarchy recognizes handwritten digits presented to its 28x28-pixel retina. Its 1M-neuron dorsolateral prefrontal cortex keeps track of the sequence of digits it has seen. Its 500K-neuron ventrolateral prefrontal cortex infers the next digit in a sequence. And its 35K-neuron motor cortex controls its arm to write down the inferred digit.

> We are currently designing Brainstorm, the first neuromorphic chip whose spiking-neuron networks are synthesized from a high-level description, and coding Neuromorph, a software tool that automatically performs this synthesis.

This new approach to designing and configuring neuromorphic chips is analogous to current practices with field-programmable gate-arrays (FPGAs). **Brainstorm**'s silicon neurons are akin to an FPGA's logic-gates and its synaptic connections are akin to reconfigurable wiring between these gates. **Neuromorph** is akin to a tool the FPGA's integrated design suite provides that synthesizes a circuit's netlist from a Verilog description of its function. Instead of Verilog, however, Neuromorph starts with a mathematically-specified computation, coded in Python, that specifies population-level representations and transformations. First, it defines an encoding between values of each variable in the computation and a Brainstorm pool's patterns of spiking activity. Next, it derives population-to-population synaptic weights (using NEF) that transform one spike-activity pattern into another so as to realize the desired computation. Finally, it programs Brainstorm to route these weighted connections between the silicon neurons.
