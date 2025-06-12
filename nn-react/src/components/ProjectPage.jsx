import React from "react";
import "./ProjectCard.css";

const projects = [
  {
    title: "Jet Engine Nozzle Optimization",
    icon : "/products/nozzle.png",
    description:
      "Optimize jet engine nozzle performance using AI-driven simulations. Our solution employs physics-informed neural networks (PINNs) to rapidly evaluate nozzle geometries, improving thrust, fuel efficiency, and thermal tolerance. Cut design cycles from weeks to hours while maintaining aerospace-grade precision—ideal for R&D teams in defense, aviation, and propulsion innovation.",
  },
  {
    title: "HVAC airflow in smart buildings",
        icon : "/products/hvac.png",

    description:
      "Optimize HVAC airflow in smart buildings with AI-enhanced CFD models. Our solution uses physics-informed neural networks to simulate air circulation, temperature gradients, and ventilation efficiency in real-time. Reduce energy costs, improve occupant comfort, and adapt dynamically to building usage—perfect for facility managers and green building innovators.",  
  },
  {
    title: "Wind loading on solar panels",
        icon : "/products/solar.jpg",

    description:
"Predict and mitigate wind-induced stresses on solar installations with tailored CFD analysis. Our simulations optimize panel orientation and mounting for structural safety and efficiency, reducing downtime and material fatigue. Ideal for solar farm designers and renewable energy consultants seeking resilience against extreme weather.",    },
  {
    title: "Combustion in microreactors",
        icon : "/products/reactor.jpg",

    description:
      "Accelerate chemical innovation with high-fidelity CFD models of combustion in microreactors. Our simulations reveal detailed flame structure, heat release, and pollutant formation, enabling safe, efficient, and scalable reaction engineering—perfect for pharma, green chemistry, and process intensification teams. ",
   },
  {
    title: "Blood flow in arterial geometries",
        icon : "/products/haemod.png",

    description:
      "Model patient-specific blood flow using advanced CFD and PINNs. We simulate hemodynamics in complex arterial networks to support surgical planning, stent design, and disease progression analysis—empowering medtech companies and cardiovascular researchers with data-driven clinical insights.",
    },
   {
    title: "Pollutant dispersion in cities",
        icon : "/products/pollutant.jpeg",

    description:
        "Simulate urban airflow and pollutant spread with our AI-augmented CFD platform. Analyze emissions impact, ventilation design, and health risks across neighborhoods—supporting urban planners, environmental agencies, and smart city developers in designing cleaner, safer environments.",    
    },
   {
    title: "Turbulent mixing in process tanks",
        icon : "/products/turb.png",

    description:
        "Improve chemical yield and energy efficiency with detailed CFD analysis of turbulent mixing in stirred tanks. We simulate vortex dynamics, residence time, and multi-phase interactions, supporting optimal baffle placement and impeller design in food, pharma, and chemical industries.",
   },
   {
    title: "Cooling strategies for EV batteries",
        icon : "/products/battery.png",

    description:
        "Design high-performance thermal management systems for EV batteries using data-driven CFD simulations. From air-cooled to liquid immersion systems, our models help optimize flow channels, minimize hotspots, and extend battery life—critical for electric vehicle OEMs and battery pack engineers.",    
    },
   {
    title: "Ship hull hydrodynamics",
        icon : "/products/logo.png",

    description:"Reduce drag and improve stability with advanced hydrodynamic simulations for ship hulls. Our CFD services capture wave resistance, pressure distribution, and flow separation, guiding efficient hull design for marine engineers and naval architects focused on fuel economy and performance",    
   },

   {
    title: "Thermal modeling in electronics",
    icon : "/products/electronics.jpg",
    description:
      "Prevent thermal failure in high-density electronics with precision CFD simulations. We model heat flow in PCB layouts, chips, and enclosures to optimize cooling strategies, airflow paths, and thermal interfaces—ideal for electronics manufacturers and embedded systems designers.",
    },    
];


const services = [  
  {
    title: "Mesh generation and optimization",
    icon : "/products/mesh.jpg",
    description:
      "High-quality meshes are the backbone of accurate CFD. We deliver automated and customized mesh generation workflows, optimizing grid quality, boundary resolution, and computational load—streamlining simulations for analysts and engineers across aerospace, automotive, and biomedical sectors.",
  },
  {
    title: "Multiphase flow modeling",
        icon : "/products/turb.png",

    description:
      "Simulate complex fluid interactions—gas-liquid, liquid-solid, or slurry flows—with robust multiphase CFD models. We address challenges in bubble columns, cavitation, sediment transport, and emulsions, helping clients in energy, biotech, and materials industries design and optimize critical processes.",  
  },
  {
    title: "LES/DNS turbulence simulations",
        icon : "/products/processtank.png",

    description:
    "Achieve high-fidelity turbulence resolution using LES and DNS techniques. Our services uncover unsteady flow structures and small-scale eddies, enabling deeper insights for research, combustion, and noise studies where RANS models fall short—ideal for advanced aero and fluid mechanics projects",
  },
  {
    title: "HPC support",
        icon : "/products/hvac.png",

    description:
      " Run large-scale CFD simulations efficiently with our HPC consulting. From cluster setup to solver parallelization and job scheduling, we ensure your CFD tools perform optimally on cloud or on-premise infrastructure—saving time and compute costs.",  
  },
  {
    title: "Parametric studies and DoE",
        icon : "/products/experiment.jpg",

    description:
      "Speed up design decisions with automated parametric sweeps and DoE-integrated CFD. We help you explore design space efficiently, identify key performance drivers, and support optimization workflows across industries—from aerospace to HVAC to manufacturing. ",  
  },
  {
    title: "Post-processing and visualization",
        icon : "/products/visualz.jpg",

    description:
      "Turn raw CFD data into actionable insights with advanced post-processing. We create customized plots, animations, and dashboards that highlight flow behavior, thermal hotspots, and stress zones—improving stakeholder communication and engineering decisions. ",  
  },
  {
    title: "Software customization",
        icon : "/products/servers.png",

    description:
      "Tailor your CFD tools to your workflow. From custom solvers and boundary conditions to UI automation and scripting, we modify OpenFOAM, ANSYS, or in-house codes to match your unique simulation needs—empowering your engineering teams with fit-for-purpose solutions.",  
  },
  {
    title: "Validation and verification studies",
        icon : "/products/validate.png",

    description:
      "Ensure simulation credibility with rigorous validation and verification workflows. We cross-check model fidelity against analytical, experimental, or benchmark data—delivering documented confidence in CFD results for regulatory approval, internal QA, or client delivery.",  
  },
  {
    title: "Pre-configured OpenFOAM environments",
        icon : "/products/of.png",

    description:
      "Get started with CFD instantly using our pre-packaged OpenFOAM environments. Optimized for performance and ease-of-use, our setups include solvers, tutorials, and automation tools—ideal for teams who want robust open-source CFD without the setup hassle. ",  
  },
   {
    title: "Remote CFD team support",
        icon : "/products/remote-support.webp",

    description:
      "Extend your CFD capabilities with our on-demand remote engineering team. From quick troubleshooting to full project delivery, we offer flexible collaboration, expert guidance, and responsive support—ideal for startups, research labs, and enterprises scaling CFD operations.",  
  },

]; 



const hpc = [  
  {
    title: "Custom GPU Acceleration of Legacy Code",
    icon : "/products/nozzle.png",
    tech : "OpenACC, CUDA Fortran, f2py, Kokkos",
    description:
      "We help migrate and accelerate existing CPU-based software to run efficiently on GPUs. This service targets engineering firms, financial institutions, and medical imaging companies needing faster simulations or analytics without complete rewrites.",
  },
  {
    title: "High-Speed Image and Video Processing",
    icon : "/products/hvac.png",
    tech : "OpenCV-CUDA, NPP, FFmpeg-CUDA, cuVID, NVENC/NVDEC",
    description:
      "We offer GPU-accelerated solutions for real-time image recognition, video enhancement, and object detection using OpenCL/CUDA—ideal for surveillance, autonomous systems, and industrial quality control.",  
  },
  {
    title: "Computational Fluid Dynamics (CFD) Acceleration",
    icon : "/products/hvac.png",
    tech : "OpenFOAM + CUDA, SU2 with GPU backends, PETSc-GPU, AMReX",
    description:
    "We develop GPU-parallelized solvers or integrate CUDA kernels in CFD tools to drastically reduce simulation runtimes. Valuable for aerospace, automotive, and HVAC industries performing complex turbulence and multiphase flow modeling.",
  },
  {
    title: "Real-Time Signal Processing for Embedded Systems",
    icon : "/products/hvac.png",
    tech : "CUDA C++, OpenCL, NVIDIA Jetson SDK, TensorRT, DeepStream",
    description:
      "We design GPU-accelerated pipelines for radar, sonar, or IoT signal analysis. This supports defense, medical devices, and smart manufacturing sectors with strict latency and throughput requirements",  
  },
  {
    title: "AI/ML Model Training and Inference Pipelines",
    icon : "/products/hvac.png",
    tech : "PyTorch, TensorFlow-GPU, ONNX Runtime, cuDNN, TensorRT",
    description:
      "We provide optimized CUDA kernels for deep learning frameworks (e.g., PyTorch, TensorFlow) or custom OpenCL solutions for edge devices. Serve clients in fintech, healthtech, or robotics needing faster model performance",  
  },
  {
    title: "GPU-Based Monte Carlo Simulations",
    icon : "/products/hvac.png",
    tech : "cuRAND, custom CUDA kernels, Thrust, MPI-GPU hybrid",
    description:
      "We help accelerate probabilistic modeling and risk analysis using CUDA/OpenCL for industries like insurance, nuclear physics, and financial derivatives that rely heavily on Monte Carlo methods.",  
  },
  {
    title: "Medical Image Reconstruction and Segmentation",
    icon : "/products/hvac.png",
    tech : "MONAI (GPU-based), TorchIO, ITK-GPU, 3D Slicer with VTK, DL + CUDA",
    description:
      "We offer real-time GPU-powered 3D reconstruction and segmentation for MRI/CT data using CUDA. Hospitals and medtech companies can integrate this for diagnostic speed and precision.",  
  },
  {
    title: "High-Resolution Scientific Visualization",
    icon : "/products/hvac.png",
    tech : "VTK, ParaView, NVIDIA IndeX, Vulkan, Three.js (WebGL)",
    description:
      "We create real-time, interactive visualizations of large scientific datasets using GPU rendering—beneficial to geosciences, bioinformatics, and materials science teams managing terabyte-scale simulations or scans.",  
  },

]; 



const ProjectPage = () => {
  return (
    <div className="projects-page px-6 py-10 text-white bg-dark">
      <h1 className="page-title text-3xl font-bold text-center mb-8 text-neon" id = "cfdprojects">CFD Projects</h1>
      
      <div className="project-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-neon transition">
            <div className="project-content text-sm leading-relaxed">
              
              <h2 className="project-title text-xl font-semibold mb-2 text-neon">{project.title}</h2>
              
              <p className="project-description text-gray-300">
                <img
                  src={project.icon}
                  alt={project.title}
                  className="w-20 h-auto float-left mr-4 mb-2 rounded"
                />
                {project.description}
              </p>

            </div>
          </div>
        ))}
      </div>
      
        <br></br>

        <h1 className="page-title text-3xl font-bold text-center mb-8 text-neon"  id = "cfdproducts">CFD Services</h1>
      
      <div className="project-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div key={idx} className="project-card bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-neon transition">
            <div className="project-content text-sm leading-relaxed">
              
              <h2 className="project-title text-xl font-semibold mb-2 text-neon">{service.title}</h2>
              
              <p className="project-description text-gray-300">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-20 h-auto float-left mr-4 mb-2 rounded"
                />
                {service.description}
              </p>

            </div>
          </div>
        ))}
      </div>

              <br></br>

        <h1 className="page-title text-3xl font-bold text-center mb-8 text-neon"  id = "cfdproducts">HPC Computation</h1>
      
      <div className="project-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {hpc.map((service, idx) => (
          <div key={idx} className="project-card bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-neon transition">
            <div className="project-content text-sm leading-relaxed">
              
              <h2 className="project-title text-xl font-semibold mb-2 text-neon">{service.title}</h2>
              
              <p className="project-description text-gray-300">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-20 h-auto float-left mr-4 mb-2 rounded"
                />
                {service.description}
                {service.tech && (
                  <span className="text-gray-400 block mt-2">
                    <strong>Tech Stack:</strong> {service.tech}
                  </span>
                )}
              </p>

            </div>
          </div>
        ))}
      </div>



    </div>

    
  );
};


export default ProjectPage;
