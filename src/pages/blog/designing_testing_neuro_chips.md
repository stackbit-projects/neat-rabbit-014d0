---
title: Designing and Testing Neuromorphic Chips
date: '2020-05-28'
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

This page describes how we design and test neuromorphic chips, starting with
analysis of neurobiological data, then development of a neuron model, followed
by layout of a multi-neuron chip for fabrication, and finally chip testing.
Whether modeling axon migration, cochlear filtering, or thalamic nuclei,
careful interpretation of neurobiological data is imperative. In each of these
cases, the data is acquired using different experimental techniques—time-lapsed
flourescence microscopy, laser interferometry, or the patch clamp—each with its
own idiosyncrasies. It is important to interpret the fine details of individual
experiments carefully, weighing both supporting and contradictory evidence,
which seem to exist for every assertion made in biology. We develop this skill
via neuroscience coursework, rotations in neurobiology labs, and critical
reading of the literature.

**How Neurons Work**

The electrical characteristics of neurons are attributed to diffusion of
various ions across the capacitive cell membrane via selective protein pores.
These ion channels come in a wide variety and are highly selective for
particular ions species (up to one in a million), with conductivity modulated
by aspects of the local environment such as membrane voltage, ligand
concentration, or enzymatic alteration. Various pumps set up gradients of
specific ions across the membrane that ultimately create a negative resting
membrane voltage of approximately –70mV (relative to the extracellular fluid)
for most neurons.

A neuron's electrical behavior influences that of other neurons through the
action of ligand-gated ion-channels. The ligand, or neurotransmitter, is
released at a synapse, the junction formed between one neuron's output wire, or
axon, and another's input wire, or dendrite. As a result, particular ions flow
into or out of the post-synaptic (receiving) neuron, causing its membrane
voltage to depolarize (move closer to 0mV) or hyperpolarize (become more
negative).

When synaptic currents bring a neuron's membrane voltage above the threshold
necessary for activation of voltage-sensitive sodium channels, it discharges a
voltage pulse. The upswing occurs as sodium ions flow into the cell,
depolarizing it further. This positive feedback drives the voltage all the way
to the rail. The downswing occurs as sodium channels inactivate and slower but
more conductive (in the opposite direction) potassium channels activate. The
entire pulse, called an action potential, transpires in less than a millisecond.

Action potentials travel down the neuron's axon, trigger neurotransmitter
release at its terminals, thereby delivering synaptic inputs to target neurons,
which in turn generate more action potentials.

**Modeling Neurons with Transistors**

Analytic models describing the behavior of ion-channels and their electrical
effects on the neuron have been proposed since the mid 1900’s. A predominant
data source for these models is the patch-clamp, which measures both I-V
(current-voltage) relationships and changes in channel currents or membrane
voltage over time. In modeling neurons in our lab, we carefully evaluate
contributions of various channels to the neuron’s membrane voltage, and how
best to capture their behavior using transistors and capacitors.

A neuron’s function may be summarized in two steps: One, integration of
synaptic inputs leading to membrane depolarization. Two, initiation of an
action potential that propagates to the neuron’s axon terminals. Such neuron
models are called integrate-and-fire models. This is the simplest model
employed, whether in software or in hardware. In this section, we describe the
circuit-level design and analysis of a silicon-based integrate-and-fire neuron.

The six-transistor circuit shown above embodies the primary characteristics of
our silicon neuron models. It is a leaky integrate-and-fire neuron, a
stripped-down version of what we use in the lab. It consists of a membrane
capacitance (center) to which input current is suppied (Iin), a
positive-feedback loop to deliver sodium current to the membrane voltage (Ina),
and a leak current to return the membrane to its resting potential upon reset.

The transistors in this circuit operate in the sub-threshold regime, where the
channel current depends exponentially on the terminal voltages. The terminals
and the direction of current flow are defined in the picture below; notice that
the pMOS gate has a circle (left) while the nMOS gate does not (right). For an
nMOS transistor, the source voltage (Vs) is low (frequently zero, or ground).
As the gate voltage (Vg) increases (from zero), the current flowing from the
drain to the source increases exponentially. pMOS transistors have the opposite
polarity: Vs is generally high (frequently at Vdd, the highest voltage on the
chip), and as Vg decreases (from Vdd), the current increases exponentially.

Mathematically, the current–voltage relationships for pMOS and nMOS transistors
are described by:
Ids = (w/l) * I0 * exp[(kVg - Vs)/uT)] for the pMOS
Isd = (w/l) * I0 * exp[-(kVg - Vs)/uT)] for the nMOS
where w and l are the channel's width and length, respectively; I0 is the off
current; and uT is the thermal voltage (25mV at room temperature). These
equations only apply when difference in voltage between source and drain
exceeds 100mV, a condition known as saturation.

We will assume that the neuron is initially at rest. This means the membrane
voltage (Vmem) is zero (ground) and the input voltage (Vinput) is zero, and
hence the input current (Iin) is zero. In this state, the output voltage (Vout)
is high (at Vref). This is a result of Vmem being zero, which cuts off the
bottom right nMOS transistor and shorts the pMOS transistor directly above it,
thereby isolating Vout from ground while tying it to Vref.

To excite the neuron, the voltage (Vinput) is increased from zero to a few
hundred millivolts, causing Iin to turn on and charge the membrane capacitor,
thereby increasing Vmem. As Vmem increases, the bottom right nMOS begins to
conduct while the pMOS above it is still conductive (allbeit less so than it
was before). Thus a path is created for current to flow into the current mirror
(the two pMOS transistors labeled as such), which mirrors this current onto the
membrane capacitor (Ina). Thus Vmem increases further, replicating the sodium
channel's regenerative action.

Above are simulation results obtained for this simple neuron, displaying the
behavior described. The input and sodium currents are shown (top, magenta and
green respectively); the constant input current is so small (picoAmps) that it
appears as zero on this microAmp scale. The membrane and output voltages are
shown (bottom, magenta and green, respectively); one observes a slow and steady
increase of membrane voltage as the input current integrates on the membrane
capacitor. Threshold is reached around 3 microseconds; Ina spikes causing a
sharp increase in the membrane voltage.

This concludes the brief description of how we model an integrate-and-fire
neuron using transistors and a capacitor. In the past, this component was
generally unique for each chip designed, as different channel populations are
used to model different neural processes and types. Now that we have developed
a circuit that is versatile enough to model a wide variety of ion-channel
types, that is no longer the case. A single neuron by itself, though, is
insufficient to study population dynamics in neural circuits. This is where the
beauty of VLSI comes into play. A neuron circuit is converted into an array of
silicon neurons through the layout step described below.

**Laying Out the Circuit**

Once a circuit has been designed and simulated, the circuit must be layed out
before it can be fabricated. Layout refers to drawing the layers that will be
fabricated using a layout editor, a drawing program with integrated-circuit
specific features (we use L-Edit by Tanner Tools).

We show the layout of two transistors (one nMOS and one pMOS) and a capacitor
in the figure below; their terminals are labeled. Gate is red and drain/source
is green; their intersection (the channel) is yellow. The brown and blue
rectangles specify the doping of drain/source regions, thereby defining n- and
p-type transistors, respectively. The green stipple pattern specifies a lightly
doped n-region, called the well, within which the pMOS transistor (top-left)
sits. The rest of the silicon area, called the substrate, is lightly p-doped,
by default. Finally, the cyan regions are metal contacts made to the terminals.

The capacitor (right) is a transistor with one drain/source terminal missing
and a large gate. The additional n-doped region abutting the one source/drain
region creates an ohmic contact to the well (green stipple pattern). Similarly,
the nMOS transistor could use a p-doped region to create a substrate contact.

We show the layout of integrate-and-fire neuron below. Metal wires are blue.
Several nodes of the circuit are labeled: Vmem, Vdd, Gnd, Vinput, and Vleak.
This is an atypically simple layout. Most layouts are considerably more
complicated.

Time and effort must be devoted to lay out each transistor, capacitor, and wire
carefully in order to strike the right balance between density and precision.
Transistors must be sized to combat stochastic fluctuations in dopants
(mismatch) and leakage currents. Larger transistors have both less mismatch and
less leakage, but they take up much more area, limiting the number of neurons
that can be fabricated on a single chip. On the other hand, the more tightly
transistors are squeezed together, the more difficult it is to wire them
together. Also, as circuits become more compact, close proximity to digital
circuits couples noise into analog circuits.

After the neuron circuitry is layed out, it is tiled in an array and interfaced
with peripheral asynchronous digital circuitry, which implements a standard
communication protocol for communicating action potentials (or spikes). This is
done with ChipGen, code developed in-house over the past several years. Layout
for the entire chip is then verified against the schematic and checked for
design-rule violations. Finally, the mask layers are exported and emailed to
the fabrication service. We use MOSIS, a silicon broker that enables
educational and commercial projects to be fabricated on shared runs at
state-of-the-art fabs such as TSMC.

**Testing the Chip**

Once the chip has been fabricated and delivered, the real fun begins! Testing
is a step-by-step process that begins at the circuit-level and ends (does it
ever end?) at the system-level. The fabrication process is far from perfect and
no two copies of a circuit are identical—even though they use the same layout.
Transistor mismatch, leakage currents, and parasitic elements
(e.g., capacitances) can wreak havoc on a poor design. In addition, simulations
fail to account for noise introduced into the analog circuitry from proximal
digital circuitry. Though some of these problems can be reduced with careful
layout (as described above), the need for a robust analog design is obvious.

Chip testing is performed with the aid of a custom-designed printed circuit
board (PCB). Properly designed, the PCB makes testing the chip a breeze.
Improperly designed, life can become a nightmare of solder and wires.
Unfortunately, learning the difference between the two sometimes requires hours
of painful experience; novices often don't get it right on the first attempt.
Other than the chip itself, the board is populated with potentiometers,
connectors, voltage regulators, test pins (many of them!) and additional
onboard circuitry. Test pins are (obviously) a necessity for recording both
digital and analog signals within the chip. Analog signals are monitored and
recorded using an oscilloscope. Digital data can be captured using either a
logic analyzer or a computer (via USB).

The initial testing phase determines how well the simulated model has survived
fabrication. How do fabrication parameters vary across the chip? How have
leakage currents affected the function of the circuit? At what bias levels does
the chip perform optimally? This phase is simplified with a little foresight
during layout. Running various voltage or current signals outside of the array
(by including a scanner on the chip) helps in seeing how the various components
in the model behave. Their function can then be compared to earlier extensive
simulations. Otherwise, one is left with trying to figure out what is going on
by looking at the output spikes.

Since we are modeling biology, we expect our chip to work like biology. Thus,
the experimental procedure we use is very similar to that seen in the
literature. For the retina, this may involve flashing patterns of light. For
the cochlea, this may involve using various frequencies of sound. For a neuron
model, this may involve repeating voltage clamp experiments. It is important
for us to show that the components of our system replicate their biological
analogs. Otherwise, we will have a difficult time convincing others that our
artificial brain is working like the human brain.
