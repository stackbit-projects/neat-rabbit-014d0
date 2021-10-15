---
title: Research
sections:
  - type: research_section
    title: Research Goals
    pubFile: src/data/pubs2.yaml
    features:
      - title: Discovering Primitives and Codes in Neuroscience
        content: >-
          A constant chattering of 80 billion neurons through 100 trillion synapses
          could easily overheat our dense brains. Instead, each neuron must
          spike sparingly, using each spike to carry as many bits as possible.
          This series of projects explore how efficiently spike activity carries
          information, and how robustly neuronal structures decode that representation.
        align: left
        posts:
          - blog/attention_bursts.md
          - blog/attention_synchrony.md
          - blog/audition_spike_precision.md
        paper_ids:
          - C53
          - J39
          - J34
          - C34
      - title: Designing Scalable Systems
        content: >-
          Neurons are commonly modeled as Poisson spike-machines, but when
          designing scalable systems, it's useful to know that such neurons must
          spike 100x faster to improve a decoder's signal-to-noise ratio (SNR)
          by just 10x. A fundamental property of Poisson statistics, this
          system's scaling clarifies a tradeoff: to linearly increase the
          decoder's SNR, we must quadratically increase the neuron's spike rate.
          This series of projects expose the fundamental scaling laws that
          govern how neural systems operate and the tradeoffs that us engineers
          must balance.
        align: left
        posts:
          - blog/neurmorphics_analog_digital.md
          - blog/vision_efficiency.md
        paper_ids:
          - J43
          - C49
          - C50
          - C43
      - title: Programming Neuromorphic Systems
        content: >-
          Engineering challenges like building networks of smart sensors or building
          brain-computer interfaces can become more tractable through the minimal
          power demands of our neuromorphic systems. This series of projects
          develop algorithms that leverage the intrinsic neural dynamics for
          broader applications like speech recognition on the edge, autonomous
          robotics, and neural prosthetics. Often, this includes an eye towards
          ease-of-use and good software design, with clean abstractions and a
          high-level user interface.
        align: left
        posts:
          - blog/our_technology.md
          - blog/computation_nef.md
          - blog/neuroprosthesis_bmi.md
        paper_ids:
          - J44
          - J36
          - C42
          - C39
seo:
  title: Research
  description: This is the research page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Research
      keyName: property
    - name: 'og:description'
      value: This is the research page
      keyName: property
template: advanced
---
