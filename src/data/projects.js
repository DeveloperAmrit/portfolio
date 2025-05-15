const projects = [
    {
        image: "/images/hb1.png",
        title: "Heroic Bloging | The first flight",
        description:
            `
        A bloging website i made in <span class='text-sky-400'>class 10th</span>. It started my web dev journey. 
        Built on raw HTML, CSS, Js and Django with literally no 3rd party components.
        It features login, signup, reading, creating, deleting blogs and giving feedbacks.
        `,
        stack: ["Vanilla", "Django"],
        github: "https://github.com/DeveloperAmrit/HeroicBloging-1",
        deployed: true,
        live: "https://heroicbloging.pythonanywhere.com/",
        category:[ "webd"],
    },
    {
        image: "https://media.licdn.com/dms/image/v2/D4D12AQFZGukN1Ff4pA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698690938031?e=2147483647&v=beta&t=lRC7g_IT_GTbbJcRdoTNmHDM1mDzM6Xc-Nth94OAcOg",
        title: "Ayurchikitsa",
        description:
        `
        Filling the gap between tech and medical. A medtech website which enables patients to upload images, which are <span class='text-sky-400'>diagonised by ai
        model to detect rashes, pimples, etc.</span> and send to doctor. Leaded the "Apexdevelopers" team for Prometeo (tech-fest) 2025 IIT-Jodhpur and being a first year 
        got 3rd postion among students from different IITs and years.
        `,
        stack: ["NEXT", "Python", "AI Model"],
        github: "https://github.com/DeveloperAmrit/Ayurchikitsa",
        deployed: false,
        live: "FINISHED",
        category:[ "webd", "aiml"],
    },
    {
        image: "/images/iitjus.png",
        title: "IITJ US FOUNDATION",
        description:
        `
        Contributed in US foundation website of IITJ SAA as the <span class='text-sky-400'>2nd top contributor</span>. A website to connect to alumni of IIT-Jodhpur in USA,
        developed on very professional level for the institute. Learnt collabration with seniors and professional way of working. Developed 
        the contact us page, email system and some UI/UX components.
        `,
        stack: ["MERN", "Vite", "Typescript"],
        github: "https://github.com/DeveloperAmrit/SAA-USFoundation",
        deployed: false,
        live: "YET TO BE DEPLOYED",
        category:[ "webd"],
    },
    {
        image: "/images/insti1.png",
        title: "IITJ Insti App",
        description:
        `
        A central website and app for students to know all information about college, mess, academics, events, bus schedules, competitions and student senate.
        Working under Devlup labs as lead frontend developer for the website. It is a <span class='text-sky-400'>huge project with backend in spring (java), a flutter application
        and a react website. Figma designed by M.Tech and Ph.D students</span>. Currently under development.
        `,
        stack: ["MERN", "Flutter", "SPRING", "Figma"],
        github: "https://github.com/DeveloperAmrit/IITJInstiWebApp",
        deployed: false,
        live: "UNDER DEV",
        category:[ "webd"],
    },
    {
        image: "/images/voliitj1.png",
        title: "Volunteers IITJ",
        description:
        `
        VolunteerIITJ is a platform created with the mission to help students of IIT Jodhpur come together and contribute to the many events 
        and causes happening within the campus. Clubs can release forms and news and students can apply for them. Covers <span class='text-sky-400'>dynamic form</span>, advertisement,
        news creation,<span class='text-sky-400'> authentication by google and auto sorting of students and clubs</span>. A huge project with a <span class='text-sky-400'>large backend</span> managed and developed by
        Heroic Developers team beta. Almost finished, will be realesed in May 2025.
        `,
        stack: ["MERN", "Cloudinary", "Firebase"],
        github: "https://github.com/DeveloperAmrit/volunteersiitj",
        deployed: false,
        live: "UNDER DEV",
        category:[ "webd"],
    },
    {
        image: "images/es1.png",
        title: "Email Scheduler",
        description:
        `
        Developed a web application to schedule emails individually or<span class='text-sky-400'> in bulk using Excel sheets</span>, with timing precision up to the second. 
        Features include <span class='text-sky-400'>dynamic email templates with variable placeholders populated from Excel data</span>, enabling targeted communication—ideal 
        for institutional bulk mailing. Built using the MERN stack with the backend hosted on Railway. Future goals to support 
        multi-user sender accounts, enhanced automation, and greater flexibility for scalable, enterprise-grade email workflows.
        `,
        stack: ["MERN", "Redux", "Tailwind","Nodemailer"],
        github: "https://github.com/DeveloperAmrit/email-scheduler-frontend",
        deployed: true,
        live: "https://email-scheduler-frontend-phi.vercel.app/",
        category:[ "webd"],
    },
    {
        image: "images/ft1.png",
        title: "IITJ Family Tree Model",
        description:
        `
        Beautiful UI showing a model for visualising the family tree of IIT-Jodhpur.
        Features SG groups, search by roll and dynamic switching.
        Currently feeded with dummy data. Future expectations to make the <span class='text-sky-400'>visualisation 3d using python</span>.
        `,
        stack: ["React", "UI/UX", "Tailwind"],
        github: "https://github.com/DeveloperAmrit/iitjfamilytree",
        deployed: true,
        live: "https://iitjfamilytree.vercel.app/",
        category:[ "webd"],
    },
    {
        image: "/images/deca1.png",
        title: "SAA Decastrike Team",
        description:
        `
        A fun project for the SAA decastrike team to showcase team memebers and work. I am also in the team, did interviews of alumni working at
        comapnies like Amazon, posted them here. Simple classic UI and smooth user experience.
        `,
        stack: ["React", "Tailwind", "UI/UX"],
        github: "https://github.com/DeveloperAmrit/saadecastrike",
        deployed: true,
        live: "https://saadecastrike.vercel.app/",
        category:[ "webd"],
    },
    {
        image: "/images/pacman1.png",
        title: "Pacman",
        description:
        `
        Upgrade of classical pacman game with large maps and different levels. IC 1st year group project leaded by me. Covers multiple maps,
        <span class='text-sky-400'>intelligent ghosts</span>, high score tracking and thrilling gameplay. Covering concepts like graphic generation, game theory, pixel mathematics,
        SDL, <span class='text-sky-400'>graph tranversal</span> using BFS and many <span class='text-sky-400'>DSA algorithms</span>. A lot of hardwork and teamwork was done to make this.
        `,
        stack: ["C", "SDL2", "BFS"],
        github: "https://github.com/DeveloperAmrit/pacmanProject",
        deployed: false,
        live: "LOCAL APP",
        category:[ "game","appdev"],
    },
    {
        image: "/images/gz1.png",
        title: "IROC25 Mars Drone simulation",
        description:
        `
        Contributed to the IROC25 mars drone simulation by making a portable ubuntu virtual machine legacy version equipped with Gazebo, ROS, Ardupilot,
        PX4-Autopilot, PX4_swarm_controller, QGroundControl and all neccessary softwares to run <span class='text-sky-400'>custom drone swarms</span>. Working under Robotics Club IIT-J for
        future attachment of <span class='text-sky-400'>computer vision</span>, <span class='text-sky-400'>terrain mapping</span>, emergency landing and making drone fly in <span class='text-sky-400'>gps-denied environments</span>.
        `,
        stack: ["Gazebo", "ROS", "Drone", "Simulation"],
        github: "",
        deployed: false,
        live: "",
        category:[ "robotics"],
    },
    {
        image: "/images/drone1.jpeg",
        title: "Drone",
        description:
        `
        Just made a working drone. Working under Robotics club IIT-J. 
        Futher expectations to merge it with IROC drone simulation and solve the <span class='text-sky-400'>ISRO IROC problem statement</span>.
        `,
        stack: ["Robotics", "Drone", "Calibration"],
        github: "",
        deployed: false,
        live: "",
        category:[ "robotics"],
    },
    {
        image: "/images/hackbr1.jpg",
        title: "BeEF Browser Hook",
        description:
        `
        Utilized the BeEF (Browser Exploitation Framework) on Kali Linux to successfully hook target browsers via <span class='text-sky-400'>social engineering </span>
        techniques. Executed cross-site scripting (XSS) payloads, performed <span class='text-sky-400'>session hijacking, keylogging, and command injection.</span> 
        Demonstrated browser-based exploitation for client-side <span class='text-sky-400'>penetration testing,</span>, highlighting vulnerabilities in web applications 
        and enhancing overall cybersecurity awareness and defense.
        `,
        stack: ["Ethical Hacking", "BeEF", "Kali"],
        github: "",
        deployed: false,
        live: "",
        category:[ "hacking"],
    },
    {
        image: "/images/fatrat1.jpg",
        title: "FATRAT Android Trojan Virus",
        description:
        `
        Engineered a custom Android trojan (andi.apk) using TheFatRat, capable of stealthily <span class='text-sky-400'>backdooring devices</span>, executing remote shell
        commands, harvesting sensitive data, <span class='text-sky-400'>activating the camera and microphone</span> for real-time surveillance, and maintaining persistent 
        access. Demonstrated advanced <span class='text-sky-400'>payload obfuscation and post-exploitation techniques</span> to simulate high-level APT-style mobile threat 
        scenarios in ethical test labs.
        `,
        stack: ["Ethical Hacking", "FatRat", "Ngrok", "Trojan"],
        github: "",
        deployed: false,
        live: "",
        category:[ "hacking"],
    },
    {
        image: "/images/deauth1.jpg",
        title: "Wifi Deauth Jammer",
        description:
        `
        Engineered a compact, <span class='text-sky-400'>low-cost</span> Wi-Fi deauthentication tool using NodeMCU (costing only ₹200), programmed in C to <span class='text-sky-400'>exploit IEEE 802.11
         management frame vulnerabilities,</span>. Deployed forged deauth packets to disrupt client-AP communication. Integrated with a <span class='text-sky-400'>centralized 
         control station</span> for real-time MAC spoofing, multi-channel scanning, and targeted wireless packet injection in audits.
        `,
        stack: ["Ethical Hacking", "C", "NodeMCU", "Wifi hacking"],
        github: "",
        deployed: false,
        live: "",
        category:[ "hacking"],
    },
    {
        image: "/images/eviltwin1.png",
        title: "Evil Twin",
        description:
        `
        Built a low-cost Evil Twin attack setup using NodeMCU, <span class='text-sky-400'>duplicating legitimate Wi-Fi SSIDs to trick users into connecting,</span>. 
        A custom login page <span class='text-sky-400'>captured WPA2/WPA3 credentials</span>, which were sent to a control station for analysis. Collected passwords were used 
        in offline <span class='text-sky-400'>dictionary attacks</span> to simulate real-world credential cracking scenarios.
        `,
        stack: ["Ethical Hacking", "C", "NodeMCU", "Password Cracking"],
        github: "",
        deployed: false,
        live: "",
        category:[ "hacking"],
    },
]

export default projects;