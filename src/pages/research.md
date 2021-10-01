---
title: Research
sections:
  - type: research_section
    title: Research Goals
    pubFile: src/data/pubs2.yaml
    features:
      - title: Discovering Primitives and Codes in Neuroscience
        content: >-
          A deep net _infers_ a response to a stimulus by multiplying a vector
          that comprises activations of all units in a layer by a matrix that
          comprises weights of all connections from that layer to the next
          layer, repeating these calculations for each tier of connections.
          Communicating weights to and fro, between memory and processor,
          consumes by far the most energy.
        align: left
        posts:
          - blog/attention_bursts.md
          - blog/attention_synchrony.md
          - blog/audition_spike_precision.md
        paper_ids:
          - C51
          - J39
          - C41
          - J34
      - title: Designing Scalable Systems
        content: >-
          Artificial intelligence benefited from shrinking transistors and
          connecting them densely in two dimensions to reduce the energy cost of
          calculating. Now the energy cost of signaling greatly exceeds that of
          calculating, reducing the benefits of additional miniaturization.
          Signaling distance is now being shortened by stacking circuits.
        align: left
        posts:
          - blog/neuromorphics_analog_digital.md
          - blog/vision_efficiency.md
          - blog/computation_nef.md
        paper_ids:
          - C51
          - J39
          - C41
          - J34
      - title: Emulating Neural Circuits in Silicon
        content: >
          Retinomorphic cameras preprocess their photodetectors’ signals to
          produce spatiotemporally sparse “spikes”. Event-based—as opposed to
          frame-based—readout translates this lower data-rate into a higher
          (equivalent) frame-rate and a shorter latency. In the row-column
          architecture event-based vision sensors currently use.
        align: left
        posts:
          - blog/memory_storage.md
          - blog/growing_circuits.md
          - blog/neurogrid_board.md
        paper_ids:
          - C51
          - J39
          - C41
          - J34
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
