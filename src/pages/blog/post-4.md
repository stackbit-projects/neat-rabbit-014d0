---
title: Our Approach - A Third Alternative for Computation
date: '2020-05-30'
author: src/data/team/kwabena-boahen.yaml
categories:
  - src/data/categories/general.yaml
tags:
image: images/4.png
image_alt: Post 4 placeholder image
excerpt: >-
  Computers' inherent limitations as neural simulation platforms are addressed by neuromorphic chips: Their fundamental component is not a logic gate but a silicon neuron.
seo:
  title: Our Approach - A Third Alternative for Computation
  description: 'Computers inherent limitations as neural simulation platforms are addressed by neuromorphic chips'
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: Our Approach - A Third Alternative for Computation
      keyName: property
    - name: 'og:description'
      value: 'Computers inherent limitations as neural simulation platforms are addressed by neuromorphic chips'
      keyName: property
    - name: 'og:image'
      value: images/4.png
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Our Approach - A Third Alternative for Computation
    - name: 'twitter:description'
      value: 'Computers inherent limitations as neural simulation platforms are addressed by neuromorphic chips'
    - name: 'twitter:image'
      value: images/4.png
      relativeUrl: true
template: post
---

Alternative hardware solutions are being explored to satisfy **brain simulations'** voracious appetite for computational resources. In these simulations, the computer evaluates mathematical formulae that describe the behavior of ion-channels, pore-forming protein molecules that stud a neuron's membrane. In this way, researchers codify their hypotheses about how the cognitive behavior they are studying arises from the brain's physiology (a neuronal type's ion-channel repertoire) and anatomy (a neural network's synaptic organization). The number of evaluations explodes when the model is scaled up to replicate organism-level behavior. Consequently, researchers cannot link cognitive behavior to well-understood cellular-level processes.

> Progress has been made linking the generation of brain rhythms to cellular mechanisms, but the task of linking cognition to cellular mechanisms remains.

For instance, neuroscientists would like to know how various neuronal types in the visual cortex—and their synaptic connectivity—contribute to the tasks it performs, such as recognizing a face. When researchers lucky enough to have access to a two-million-dollar, 2048-processor, **Blue Gene** rack attempted this, it took one hour and twenty minutes to simulate one second of neural activity in 8 million neurons connected by 4 billion synapses. And when the model failed to predict the way the cortex responds to a novel situation, the researchers had to dump their hypothesis and start over. It can take umpteen iterations to get the model right, waiting an hour each time for it to run, frustrating researchers. Why did this tiny piece of cortex—far less than the brain uses to recognize a face—bring a supercomputer to its knees? Because Blue Gene had to evaluate those ion-channel equations 40 trillion times!

> Computers' inherent limitations as neural simulation platforms are addressed by neuromorphic chips: Their fundamental component is not a logic gate but a silicon neuron.

Two affordable alternatives to Blue Gene are currently available: **GPUs and FPGAs**. Graphical processing units sporting a hundred and twenty-eight cores on a single chip have been programmed to run brain simulations a hundred times faster than a PC. Field Programmable Gate Arrays sporting a hundred-thousand individually configurable logic gates on a single chip have been configured to run brain simulations two thousand times faster than a PC—comparable the 2048-processor Blue Gene rack—at a fraction of the cost. The good news is now you too can have your own supercomputer. The bad news is now you too can wait an hour to simulate a second of activity in tiny piece of cortex. To avoid the wait, we are pioneering a third alternative: **programmable neuromorphic chips**.
