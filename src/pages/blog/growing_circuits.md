---
title: Learning - Growing circuits
date: '2015-05-27'
author: src/data/alumni/brian-taba.yaml
categories:
  - src/data/categories/general.yaml
tags:
image:
image_alt:
figure: images/peoBrianEvo_000.gif
figure_caption: >-
  <b>Modeling epigenetic development.</b> Axon-terminals from randomly-activated patches of retinal cells (top-left) excite tectal cells (top-right) to release neurotropin, a chemical that diffuses to nearby locations. Migrating up the neurotropin gradient, axons from neighboring retinal cells converge on neighboring tectal cells. Coloring retinal cells (bottom-left) and tracing the colors reveals a map forming in the tectum (bottom-right). This simulation was performed by a neuromorphic chip: electrons emulate neurotropin and softwires emulate axon-migration. [Brian Taba 2002]
excerpt: >-
  The genome's billion (10^9) bits cannot specify where each synapse in the brain goes—--a hundred million times more bits are required to list the quadrillion (10^15) connections among the brain's trillion (10^12) neurons
seo:
  title: Learning - Growing circuits
  description: "The genome's billion (10^9) bits cannot specify where each synapse in the brain goes."
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: Learning - Growing circuits
      keyName: property
    - name: 'og:description'
      value: "The genome's billion (10^9) bits cannot specify where each synapse in the brain goes."
      keyName: property
    - name: 'og:image'
      value: images/memorylg.gif
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Learning - Growing circuits
    - name: 'twitter:description'
      value: "The genome's billion (10^9) bits cannot specify where each synapse in the brain goes."
    - name: 'twitter:image'
      value: images/memorylg.gif
      relativeUrl: true
template: post
---
The **genome**'s billion (10^9) bits cannot specify where each synapse in the brain goes—a hundred million times more bits are required to list the quadrillion (10^15) connections among the brain's trillion (10^12) neurons. The problem that computer architects worry about—how to use the trillion (10^12) transistors that fit on a silicon wafer—pales in comparison.

> Having exhausted all information available in the genome, neural circuits customize themselves through internal and external interaction, a learning process known as epigenesis.

Models of **epigenesis** have demonstrated that the brain's feature maps can be built simply by wiring together neurons that fire together: Light- and dark-sensitive inputs from the retina wire together to produce orientation-tuned cells; left- and right-eye inputs produce depth-tuned cells; lagged and nonlagged inputs produce (motion) direction-tuned cells.

> Emulating epigenesis could allow engineers to build more complex systems.

As a chip's metal wires cannot grow, we developed softwires—virtual connections that do not require point-to-point wiring. A softwire is routed to its target by a silicon growth-cone, a model of the motile structure that tows a growing axon along a chemical trail.
