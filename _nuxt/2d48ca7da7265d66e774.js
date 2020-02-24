(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1334:function(e,n,t){"use strict";t.r(n),n.default="---\nheader: Electromagnetism\ndescription: Electromagnetic forces.\n---\n\n# Coulomb's Law\n\nCoulomb's law quantifies the relationship between two electrically charged particles. It is useful for finding the electric field due to **point charges**.\n\n### Magnitude of Force\n\n$$|F| = k_e \\frac{q_1 q_2}{r^2}$$\n\n- $q_1$ is the magnitude of the first charge.\n- $q_2$ is the magnitude of the second charge.\n- $k_e = 8.988 \\times 10^9 N \\cdot m^2 \\cdot C^{-2} \\text{}$\n- $r$ is the distance between the two charges.\n\n### Force Vector\n\n$$\\bold{F} = k_e \\frac{q_1 q_2}{|\\bold{r}_{21}|^2} \\hat{\\bold{r}}_{21} = k_e \\frac{q_1 q_2}{|r_{21}|^2} \\frac{\\bold{r}_{21}}{|\\bold{r}_{21}|}$$\n\n- $q_1$ is the magnitude of the first charge.\n- $q_2$ is the magnitude of the second charge.\n- $k_e = 8.988 \\times 10^9 N \\cdot m^2 \\cdot C^{-2} \\text{}$\n- $r_{21}$ is the vector from $q_2$ to $q_1$.\n\n# Biot-Savart Law\n\nThe Biot-Savart Law quantifies the generation of a magnetic field from a constant current carrying conductor.\n\n$$d\\bold{F}_m = md \\bold{B} = m\\mu_0 \\frac{I dl \\times a_R}{4\\pi r^2}$$\n\n$$\\bold{B}(\\bold{r}) = \\frac{\\mu_0}{4 \\pi} \\int_c \\frac{I d\\bold{l} \\times \\bold{a}_R}{|a_R|^2} $$\n\n# Lorentz Force\n\n$$\\bold{F} = q \\bold{v} \\times \\bold{B}$$\n\n\n# Electric Field\n\n### Electric Field Intensity\n\n$$\\bold{E} = \\frac{\\bold{F}_2}{q} = \\frac{Q}{4 \\pi \\epsilon_0 R^2} \\bold{r}$$\n\nMore generally,\n\n$$\\bold{E} = \\sum_{i=1}^N \\frac{Q_i}{4 \\pi \\epsilon_0 R_i^2} \\bold{a}_{R_i}$$\n\n# Electric Flux\n\nThe electric flux eminating from a charged sphere is proportional to the total charge of the sphere.\n\n$$\\Phi_e = Q$$\n\n### Electric Flux Density over Sphere\n\n$$\\bold{D} = \\epsilon_0 \\bold{E} = \\frac{Q}{4 \\pi r^2} \\bold{a}_r$$\n\n| Variable           | Meaning                                     |\n| ------------------ | ------------------------------------------- |\n| $\\epsilon_0$       | $8.854 \\times 10^{-12} F \\cdot m^2 \\text{}$ |\n| $\\bold{E} \\text{}$ | Electric Field Intensity                    |\n| $\\bold{a}_r$       | Direction of Electric Flux Density          |\n\n### Electric Flux over Closed Surface $s$\n\n$$\\Phi_E = \\oint_s \\epsilon_0 \\bold{E} \\cdot d\\bold{s} = \\frac{Q}{\\epsilon_0}$$\n\n# Maxwell's Equations\n\n### Gauss's Law, Electric Flux\n\nThe electric flux eminating over a closed surface $s$ is equal to the charge.\n\n#### Integral Form\n\n$$\\Phi_e = \\oint_s \\epsilon_0 \\bold{E} \\cdot d \\bold{s} = \\int_v \\rho_v dv = Q$$\n\n#### Differential Form\n\n$$\\nabla \\cdot (\\epsilon_0 \\bold{E}) = \\rho_v$$\n\n### Gauss's Law, Magnetic Flux\n\nThe magnetic flux eminating over a closed surface $s$ is equal to zero.\n\nNote:\n- Because magnetic fields are closed, the magnetic flux is equal to zero.\n- Isolated magnetic poles do not exist.\n\n#### Integral Form\n\n$$\\Phi_b = \\oint_s \\bold{B} \\cdot d \\bold{s} = 0$$\n\n#### Differential Form\n\n$$\\nabla \\cdot \\bold{B} = 0$$\n\n### Faraday's Law of Induction\n\nThe induced electromagnetic force (voltage) over a closed contour $c$ is caused by the change in the magnetic flux over a surface $s$.\n\nNote:\n- The voltage resists the change in magnetic field, hence the negative sign.\n\n#### Lenz's Law\n\nInduced emf is in such a way that opposes the change in magnetic flux.\n\n#### Integral Form\n\n$$\\text{V} = \\oint_c \\bold{E} \\cdot d\\bold{l} = -\\frac{d}{dt} \\int_s \\bold{B} \\cdot d\\bold{s}$$\n\n#### Differential Form\n\n$$\\nabla \\times \\bold{E} = - \\frac{\\partial \\bold{B}}{\\partial t}$$\n\n### Ampere's Law\n\nThe current over a closed contour $c$ is the current density over a surface $s$ and the change in magnetic flux over the surface $s$.\n\nThe term $\\displaystyle \\frac{d}{dt} \\int_s \\epsilon_0 \\bold{E} \\cdot d\\bold{s}$ is often referred to as the \"virtual current\" because it is resistance of voltage to the change in electric flux.\n\n#### Integral Form\n\n$$I_{enc} = \\oint_c \\frac{\\bold{B}}{\\mu_0} \\cdot d\\bold{l} = \\int_s \\bold{J} \\cdot d\\bold{s} + \\frac{d}{dt} \\int_s \\epsilon_0 \\bold{E} \\cdot d\\bold{s}$$\n\n#### Differential Form\n\n$$\\nabla \\times \\frac{\\bold{B}}{\\mu_0} = \\bold{J} + \\frac{\\partial (\\epsilon_0 \\bold{E})}{\\partial t}$$\n\n# Wave Propagation in Source Free Region\n\n### Source Free Region\n\nIf a wave is in a source free region, it means the wave is away from the source.\n\n### Maxwell's Equations in Source Free Region\n\nWe assume $\\rho_v = 0$ and $\\bold{J} = 0$ because we are in a [source free region](#source-free-region).\n\n$$\\bold{\\nabla} \\cdot \\epsilon_0 \\bold{E} = 0$$\n\n$$\\bold{\\nabla} \\cdot \\bold{B} = 0$$\n\n$$\\bold{\\nabla} \\times \\bold{E} = - \\frac{\\partial \\bold{B}}{\\partial t}$$\n\n$$\\bold{\\nabla} \\times \\frac{\\bold{B}}{\\mu_0} = - \\frac{\\partial \\bold{\\epsilon}_0 \\bold{b}}{\\partial t}$$\n\n$$\\bold{\\nabla}^2 \\bold{E} - \\mu_0 \\epsilon_0 \\frac{\\partial^2 \\bold{E}}{\\partial t^2} = 0$$\n\n$$\\bold{\\nabla}^2 \\bold{B} - \\mu_0 \\epsilon_0 \\frac{\\partial^2 \\bold{B}}{\\partial t^2} = 0$$\n\n### Harmonic Fields in Phasor Representation\n\nRepresenting fields in the phasor form are useful for sinusoidal steady state analysis. However, because the phasor form is dependent solely on position (not time), it is incomplete for wave propagation analysis.\n\n### Characteristics\n\n#### Wavelength\n\n$$\\lambda = \\frac{2 \\pi}{\\beta_0}$$\n\n#### Wave Velocity\n\n$$v_p = \\frac{1}{\\sqrt{\\epsilon_o \\mu_o}} = c$$\n\n#### Phase Constant\n\n$$\\beta_o = \\omega \\sqrt{\\epsilon_o \\mu_o}$$\n\n#### Intrinsic Impedence\n\n$$\\frac{\\hat{E}_x}{\\hat{H}_y} = \\eta_o = \\sqrt{\\mu_o}{\\epsilon_o}$$\n\n### General Solution to Maxwell's Equations in Phasor Form\n\n$$\\hat{E}_x = \\hat{E}_m e^{-j \\beta_o z} + \\hat{E}_m e^{j \\beta_o z}$$\n\n### General Solution to Maxwell's Equations in Real Time Form\n\n$$E_x(z, t) = \\mathcal{Re} \\{ \\hat{E}_x e^{j\\omega t} \\} = E_m \\cos{(\\omega t - \\beta_o z)} + E_m \\cos{(\\omega t + \\beta_o z)} $$\n\n### Polarization State\n\n#### Linear Polarization\n\n#### Circular Polarization\n\n#### Elliptical Polarization\n\n\n\n# Maxwell's Equations and Plane Wave Propagation in Materials\n\nMaterials consist of atoms, which contain charged particles. Because of this, additional induced sources (creating electric and magnetic fields) from the presence and interaction of these charged particles must be accounted for and added to the existing [Maxwell's equations](#maxwells-equations).\n\nThe interaction of the charged particles results in conduction, polarization and magnetization. Each generates a mix of bound charge density, polarization or conduction currents.\n\nBoundary conditions describe the transition between different materials to account for the different properties of each.\n\n### Types of Materials\n\n#### Conductors\n\nConductors are described to have a preponderance of **free** electrons in the conduction band. They are constantly in motion from thermal energy.\n\nUnder the influence of external electric field $\\bold{E}$, the electrons experience a force and the flow of electrons is the **induced conduction current**\n\n#### Dielectrics (Insulators)\n\nDielectrics are described to have a preponderance of **bound** electrons in the valence band. Electrons are not free to move; they can only be displaced from their position. They have the ability to store electric energy.\n\nUnder the influence of external electric field $\\bold{E}$, an induced source known as the **polarization charges and currents** are generated.\n\n#### Magnetic Materials\n\nMagnetic materials have the ability to store magnetic energy.\n\nThe process of aligning current loops causes an induced source called the **magnetization current**. \n\n## Induced Sources\n\n### Conduction Current (Conductors)\n\nConduction current is generated due to an application of an external electric field $\\bold{E}$ on a conducting material. It is related to the movement drift of the free charges since its movement is confined within a lattice.\n\nElectrons not in free space do not accelerate due to the electric field; rather, they are assumed to be contained in the atomic structure of the material. Therefore, they are free to move inside the material but bounce off of the walls of the atomic lattice and induce friction.\n\nElectrons instead drift with a $\\bold{v}_a$ average drift velocity and $\\tau_c$ mean free time (average time interval between collisions):\n\n$$\\bold{J} = \\frac{m \\bold{v}_a}{\\tau_c} = -e\\bold{E} \\implies \\bold{v}_a = - \\frac{e \\tau_c}{m} \\bold{E}$$\n\nAnd we get the current density $\\bold{J}$ (Ohm's law in point form) associated with the flow of the electronic changes:\n\n$$\\bold{J} = (-ne) \\bold{v}_a = \\frac{ne^2 \\tau_c}{m} \\bold{E} = \\sigma \\bold{E}$$\n\nwhere $\\sigma$ is the conductivity of the material.\n\n### Polarization (Dielectrics)\n\nThere are three different types of polarization due to the application of external electric field $\\bold{E}$ on a dielectric material. It is related to the displacement of bound charges. \n\nElectrons within the dielectric material stores electric energy because of the shifts in the positions of the positive and negatives charges against normal molecular and atomic forces.\n\nCharges in dielectrics are bound (not free to move), so they are displaced; the charge displacement is called polarization.\n\n#### Electronic Polarization\n\nElectric polarization results in the displacement of bound electrons of an atom such that the center of the cloud of electrons is separated from the center of the nucleus. The atom is polarized since an electric dipole is generated.\n\nThe electric dipole moment, with point charges $+q$ and $-q$ with the distance between the two point charges $\\bold{d}$ is:\n\n$$\\bold{p} = q\\bold{d}$$\n\n#### Orientational Polarization\n\nPolarization may already exist without an external electric field; however, atoms are randomly oriented meaning the net polarization is zero (in a macro sense).\n\nWhen an electric field is induced, a torque is induced on microscopic dipoles to orient them in the direction of the field.\n\n#### Ionic Polarization\n\nMaterials that participate in ionic bonding electrically bind their positive and negative ions (since they transfer electrons between atoms).\n\nUpon applying an electric field the ions separate and form electric dipoles.\n\n#### Polarization\n\nThe polarization, describing the electric polarization on a macroscopic level, is given by:\n\n$$\\bold{P} = \\lim_{\\Delta v \\rightarrow 0} \\frac{1}{\\Delta v} \\sum_{i=1}^{n\\Delta v} \\bold{p}_i = n \\bold{p}_a = nq\\bold{d}_a = \\rho_+ \\bold{d}_a $$\n\nsuch that $n\\Delta v$ is the number of dipoles in a volume $\\Delta v$, $\\bold{p}_a$ is the average dipole moment per molecule, $\\bold{d}_a$ is the displacement between positive and negative charges and $\\rho_+ = nq$ the density of positive charges per unit volume generated int he polarized region.\n\nThe absence of an electric field implies the polarization is zero since dipoles are randomly polarized. However, if there is an electric field, the dipole moment is non-zero.\n\n#### Polarization Current\n\nSince we are considering the electric field's effect on a dielectric material (which has bound charges), we consider a time varying electric field $\\bold{E} = E_o \\cos{\\omega t} \\bold{a}_z$.\n\n$$\\bold{P} = \\epsilon_o \\chi_e \\bold{E} = \\epsilon_o \\chi_e E_o \\cos{\\omega t} \\bold{a}_z$$ \n\nThus, the polarization current is:\n\n$$\\bold{J}_p = \\frac{\\partial \\bold{P}}{\\partial t} = \\frac{\\partial{\\epsilon_o \\chi_e \\bold{E}}}{\\partial t}$$\n\n#### Polarization Charge Density\n\nWhen an external electric field is applied to a dielectric material, dipole moments will be induced and the material will subsequently be polarized. \n\nThe polarization over the area is equal to the induced charge distribution over the volume enclosed by the area.\n\n$$\\oint_s \\bold{P} \\cdot ds = -\\int_v \\rho_p dv$$\n\nIn point form:\n\n$$\\bold{\\nabla} \\cdot \\bold{P} = -\\rho_p$$\n\n### Magnetization\n\nMagnetization is the alignment of atomic magentic dipole moments along the direction of the applied magnetic field.\n\nThe magnetic dipole moment is given by the current multiplied by the differential element of area $ds$ encircled by the current:\n\n$$\\bold{m} = I d\\bold{s}$$\n\nWithout an external magnetic field, magnetic dipole moments are randomly oriented so $\\bold{m} = 0$ in the volume.\n\nWith an external magnetic field, a torque will be applied on the dipole moments.\n\nMagnetization is the total magnetic moment per unit volume:\n\n$$M = \\lim_{\\Delta v \\rightarrow 0} \\frac{1}{\\Delta v} \\sum_{i = 0}^{n \\Delta v} \\bold{m}_i = n \\bold{m}_a = n\\bold{I} d\\bold{s}$$\n\nThe torque is on the dipole is defined by:\n\n$$d\\bold{T} = \\bold{m} \\times \\bold{B}$$\n\n#### Magnetization Current Density\n\n## Modifications to Maxwell's Equations in Materials\n\n### Ampere's Law, Polarization Current\n\nWe will add the [polarization current](#polarization-current) term:\n\n$$\\bold{\\nabla} \\times \\frac{\\bold{B}}{\\mu_0} = \\bold{J} + \\frac{\\partial (\\epsilon_0 \\bold{E})}{\\partial t} + \\frac{\\partial \\bold{P}}{\\partial t}$$\n\nAdditionally, we must replace the permeability of free space constant to take into account the material:\n\n$$\\bold{\\nabla} \\times \\frac{\\bold{B}}{\\mu_0} = \\bold{J} + \\frac{\\partial \\bold{D}}{\\partial t}$$\n\n$$\\bold{D} = \\epsilon_o \\epsilon_r \\bold{E}$$\n\nwhere $\\epsilon_r = 1 + \\chi_e$ is the suseptability of material to store electric energy due to induced polarization.\n\n### Ampere's Law, Magnetization Current\n\nWe will add the [magnetization current](#magnetization-current-density) term.\n\n$$\\nabla \\times \\frac{\\bold{B}}{\\mu_0} = \\bold{J} + \\frac{\\partial \\bold{D}}{\\partial t} + \\bold{J}_m = \\bold{J} + \\frac{\\partial \\bold{D}}{\\partial t} + \\bold{\\nabla} \\times \\bold{M}$$\n\nSimplifying:\n\n$$\\bold{\\nabla} \\times \\bold{H} = \\bold{J} + \\frac{\\partial \\bold{D}}{\\partial t}$$\n$$\\bold{H} = \\frac{\\bold{B}}{\\mu_o} - \\bold{M}$$\n\n### Gauss's Law for Electric Field\n\nWe will add the induced charge distribution:\n\n$$\\bold{\\nabla} \\cdot \\epsilon_o \\bold{E} = \\rho_v + \\rho_p \\implies \\bold{\\nabla} \\cdot \\epsilon_o \\bold{E} = \\rho_v + \\bold{\\nabla} \\cdot \\bold{P}$$\n\nSimplifying:\n\n$$\\bold{\\nabla} \\cdot \\bold{D} = \\rho_v$$\n\n## Complex Permittivity\n\nComplex permittivity characterizes the heating losses associated with the frictional losses due to the rotation of electric dipoles due to the application of a time varying electric field in a dielectric.\n\nThe capacitance contains the complex permittivity.\n\n$$c=\\frac{\\epsilon^* A}{d}$$\n\n## Boundary Conditions\n\nBoundary conditions describe the transitional properties of the electric and magnetic fields between different materials.\n\nIt will be solved for by solving for the tangential and normal components.\n\n## Poynting Vector\n\nThe Poynting vector describes the energy flux, or energy transfer per unit area, associated with the propagation of electromagnetic waves. \n\n$$\\bold{P_p} = \\bold{E} \\times \\bold{H}$$\n\nFor practicality, we will take the time average Poynting vector.\n\n### Time Average Poynting Vector Real Time Form\n\n$$\\bold{P}_av (z) = \\frac{1}{t_2 - t_1} \\int_{t_1}^{t_2} \\bold{P}(z, t) dt $$\n\n### Time Average Poynting Vector Real Time Form (Sinusoid)\n\n$$\\bold{P}_av (z) = \\frac{1}{T} \\int_{0}^{T} \\bold{P}(z, t) dt $$\n\n### Complex Poynting Vector for Time Harmonic Fields\n\n$$\\bold{P}_az (z) = \\frac{1}{2} \\mathcal{Re} \\{ \\bold{\\hat{E}} \\times \\bold{\\hat{H}}^* \\} = \\frac{1}{2} \\mathcal{Re} \\{ (E_r + jE_i) \\bold{a}_x \\times (H_r + jH_i) \\bold{a}_y \\} = \\frac{1}{2} (E_r H_r + E_i H_i) \\bold{a}_z $$\n\n"}}]);