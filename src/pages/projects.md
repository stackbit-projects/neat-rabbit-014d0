---
title: Projects
sections:
  - type: features_section
    title: Current Projects
    features:
      - title: Compute-in-Memory with 3D NAND Flash
        content: >-
          With the advent of data-hungry deep-learning methods, moving data
          between memory and processors has become a significant bottleneck to
          energy-efficient machine learning. The brain solves this problem by
          co-localizing its memory storage and its compute, and we aim to
          realize this mechanism using the architecture and subthreshold
          dynamics of 3D NAND Flash.
        align: left
        image_alt: Feature 1 placeholder image
        image_position: right
      - title: Sparse Signalling with Sequence-Selective Pyramidal Cells
        content: >-
          The brain saves power when signalling between separated regions by
          arranging neurons in three-dimensions, but must prevent cooking its
          own cells by signalling sparsely. By decoding information represented
          as sparse sequences of spikes instead of dense, high bit-width
          activations, pyramidal cell circuits are able to communicate
          combinatorially more bits of information under the same energy budget
          as conventional ReLU layers.
        align: left
        image_alt: Feature 2 placeholder image
        image_position: left
      - title: Geometry of Knowledge Graphs in Transformers
        content: >-
          Transformers like BERT and GPT-x are SoTA for natural language
          processing and general sequence modeling, but at an incredibly steep
          monetary and energetic price. After weeks of training and terabytes of
          data, transformers learn a general graph to represent the
          relationships between tokens in its dictionary. However, at inference,
          transformers continue to treat this graph as a dynamic object and thus
          recompute distance relationships between all pairwise tokens in its
          context. Instead, we aim to extract its knowledge graph and embed it
          within a static Graph Neural Network to perform more efficient
          inference.
        align: left
        image: images/feature.svg
        image_alt: Feature 3 placeholder image
        image_position: right
seo:
  title: Projects
  description: This is the projects page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Projects
      keyName: property
    - name: 'og:description'
      value: This is the projects page
      keyName: property
template: advanced
---
