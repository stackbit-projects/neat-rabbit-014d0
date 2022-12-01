---
title: Research
sections:
  - type: research_section
    title: Research Goals
    pubFile: src/data/pubs3.yaml
    features:
      - title: Discovering Codes and Primitives in the Brain
        content: >-
            A constant chattering of 80 billion neurons through 100 trillion synapses
            could easily overheat our dense brains. To avoid that, each neuron
            spikes sparingly, and each spike carries as many bits of information as possible.
            This series of projects explore how spike activity encodes
            information, and how dendritic mechanisms decode this information.
        align: left
        posts:
          - blog/attention_bursts.md
          - blog/attention_synchrony.md
          - blog/audition_spike_precision.md
        paper_ids:
          - J47
          - C53
          - C34
          - J23
          - C25
      - title: Scaling Neuromorphic Systems
        content: >-
          We translate our insights from the brain's spike encoding and dendritic decoding mechanisms to design neuromorphic hardware that realizes the same signaling codes and computational primitives. Such codes and primitives lead to more _scalable_ neuromorphic systems. As the problem size grows, the energy demands grow more favorably. For example, when there are only a few neurons chattering, a neuron can get its message across by increasing its volume (i.e, spiking at a higher rate), but when there are many neurons, it's much better for them to take turns (i.e, coordinate their spiking). Thus the latter code scales more favorably.

        align: left
        posts:
          - blog/neurmorphics_analog_digital.md
          - blog/vision_efficiency.md
        paper_ids:
          - J47
          - J43
          - C49
          - C43
          - J24
          - J41
      - title: Programming Neuromorphic Systems
        content: >-
          To exploit these codes and primitives, which define our neuromorphic hardware's instruction set and data operations, we must devise new algorithms. To this end, we develop a full software stack, with clean abstractions and a high-level user interface. We aim to solve broad engineering challenges such as migrating tasks from the datacenter to the smartphone. This would improve privacy, enhance user experience, and reduce carbon emissions.
        align: left
        posts:
          - blog/our_technology.md
          - blog/computation_nef.md
          - blog/neuroprosthesis_bmi.md
        paper_ids:
          - J47
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
