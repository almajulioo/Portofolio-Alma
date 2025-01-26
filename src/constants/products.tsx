import gogadai1 from 'public/images/gogadai-1.png';
import gogadai2 from 'public/images/gogadai-2.png';
import gogadai3 from 'public/images/gogadai-3.png';
import yakuiThumbnail from 'public/images/yakui-2.png';
import yakui1 from 'public/images/yakui-1.jpeg';
import yakui2 from 'public/images/yakui-3.png';
import cms1 from 'public/images/cms-1.png';
import cms2 from 'public/images/cms-2.png';
import cms3 from 'public/images/cms-3.png';
import electionThumbnail from 'public/images/election-thumbnail.png';
import election1 from 'public/images/election-1.png';
import election2 from 'public/images/election-2.png';
import election3 from 'public/images/election-3.png';
import renturstyleThumbnail from 'public/images/renturstyle-thumbnail.png';
import renturstyle1 from 'public/images/renturstyle-1.png';
import renturstyle2 from 'public/images/renturstyle-2.png';
import renturstyle3 from 'public/images/renturstyle-3.png';
import siabsenThumbnail from 'public/images/siabsen-thumbnail.png';
import siabsen1 from 'public/images/siabsen-1.png';
import siabsen2 from 'public/images/siabsen-2.png';
import siabsen3 from 'public/images/siabsen-3.png';
import sukamargaThumbnail from 'public/images/sukamarga-thumbnail.png';
import sukamarga1 from 'public/images/sukamarga-1.png';
import sukamarga2 from 'public/images/sukamarga-2.png';
import sukamarga3 from 'public/images/sukamarga-3.png';

export const products = [
    {
        href: 'https://github.com/almajulioo/pemilihan',
        title: 'Elections',
        description:
            'A web application for managing elections, including adding new elections, candidates, and their descriptions. Built using Laravel and TailwindCSS.',
        thumbnail: electionThumbnail,
        images: [election1, election2, election3],
        stack: ['Laravel', 'TailwindCSS'],
        slug: 'elections',
        content: (
            <div>
                <p>
                    <strong>Elections</strong> is a web application designed to manage elections
                    effectively. This platform allows administrators to create new elections, add
                    candidates, and include detailed descriptions for each candidate. The goal is to
                    provide a streamlined and efficient way to manage election processes in various
                    settings.
                </p>
                <p>
                    The project was developed using Laravel for the backend to handle database
                    interactions, authentication, and logic. TailwindCSS was utilized for styling to
                    ensure a modern and responsive user interface. The system supports CRUD (Create,
                    Read, Update, Delete) operations for elections and candidates, making it highly
                    flexible and user-friendly.
                </p>
                <p>
                    This project helped me enhance my skills in both backend development with
                    Laravel and frontend styling with TailwindCSS. It serves as a comprehensive
                    example of combining powerful tools to build a functional and aesthetically
                    pleasing application. Feel free to explore the repository for more details and
                    potential use cases.
                </p>
            </div>
        ),
    },
    {
        href: 'https://www.wisatasukamarga.my.id/',
        title: 'Wisata Suka Marga',
        description:
            'A tourism and UMKM website for Desa Sukamarga, showcasing its natural beauty and local businesses. Built with Next.js, Prisma, and TailwindCSS.',
        thumbnail: sukamargaThumbnail,
        images: [sukamarga1, sukamarga2, sukamarga3],
        stack: ['Next.js', 'Prisma', 'TailwindCSS'],
        slug: 'wisata-suka-marga',
        content: (
            <div>
                <p>
                    <strong>Wisata Suka Marga</strong> is a web application dedicated to promoting
                    the tourism and local businesses (UMKM) of Desa Sukamarga. Located in Lampung
                    Barat, Desa Sukamarga is surrounded by the natural beauty of national forests
                    and is home to a variety of breathtaking destinations such as colorful craters
                    (Kawah Keramikan, Kawah Nirwana, Kawah Hitam, and Kawah Merah), four serene
                    lakes, Padang Savana, golden sand expanses, and majestic waterfalls.
                </p>
                <p>
                    This website was developed using <strong>Next.js</strong> for a modern and fast
                    front-end, <strong>Prisma</strong> for efficient and scalable database
                    interactions, and <strong>TailwindCSS</strong> for responsive and clean styling.
                    The platform highlights the unique attractions and sustainable tourism of Desa
                    Sukamarga while also supporting local businesses by featuring their products and
                    services.
                </p>
                <p>
                    The project showcases my expertise in building scalable and efficient web
                    applications. Through this project, I combined modern development tools to
                    create a platform that provides a seamless user experience and effectively
                    promotes the richness of Desa Sukamarga’s tourism and UMKM offerings. Feel free
                    to explore the website and discover the beauty of Sukamarga!
                </p>
            </div>
        ),
    },
    {
        href: 'https://github.com/almajulioo/RentUrStyle-Backend',
        title: 'Rent Ur Style',
        description:
            'An e-commerce website for renting event clothing, built with Laravel as the backend, React.js as the frontend, and integrated with WhatsApp unofficial API.',
        thumbnail: renturstyleThumbnail,
        images: [renturstyle1, renturstyle2, renturstyle3],
        stack: ['Laravel', 'React.js', 'REST API'],
        slug: 'rent-ur-style',
        content: (
            <div>
                <p>
                    <strong>Rent Ur Style</strong> is an e-commerce website designed to provide a
                    seamless experience for renting event clothing for every special occasion.
                    Customers can explore a wide range of fashionable outfits without the commitment
                    of purchasing, allowing them to enjoy luxury styles at an affordable cost.
                </p>
                <p>
                    This project was developed with a robust backend using Laravel and a dynamic
                    frontend powered by React.js. The website utilizes a REST API for smooth
                    communication between the frontend and backend. Additionally, the platform is
                    integrated with the WhatsApp unofficial API to send real-time notifications to
                    administrators whenever a customer makes a purchase. The system supports CRUD
                    (Create, Read, Update, Delete) operations for managing products, categories, and
                    subcategories. It also includes a dedicated admin user for managing the platform
                    efficiently.
                </p>
                <p>
                    Developing <strong>Rent Ur Style</strong> allowed me to combine advanced backend
                    and frontend technologies to create a functional and user-friendly e-commerce
                    platform. The integration with WhatsApp API enhances communication, ensuring
                    quick responses to customer inquiries. If you're looking to explore a modern and
                    feature-rich e-commerce solution, check out the repository for more details.
                </p>
            </div>
        ),
    },
    {
        href: 'https://github.com/almajulioo/Sistem-Absensi-Desa-BatuRaja',
        title: 'Sistem Absensi Aparatur Desa',
        description:
            'A QR code-based attendance system for village officials, built using Laravel, Filament, and TailwindCSS.',
        thumbnail: siabsenThumbnail,
        images: [siabsen1, siabsen2, siabsen3],
        stack: ['Laravel', 'Filament', 'TailwindCSS'],
        slug: 'sistem-absensi-desa',
        content: (
            <div>
                <p>
                    <strong>Sistem Absensi Aparatur Desa</strong> is a web application designed to
                    streamline the attendance process for village officials. This system utilizes QR
                    code scanning to verify attendance, ensuring efficiency and accuracy in tracking
                    the presence of users. Administrators can generate unique QR codes that users
                    scan to mark their attendance.
                </p>
                <p>
                    The platform features a comprehensive dashboard that allows administrators to
                    download attendance recaps and filter attendees based on specific dates. Built
                    with Laravel as the backend, Filament for admin interface and data management,
                    and TailwindCSS for modern and responsive styling, the system provides an
                    intuitive user experience for both administrators and users.
                </p>
                <p>
                    Developing this project enhanced my expertise in backend development with
                    Laravel, admin interface creation using Filament, and responsive design with
                    TailwindCSS. The QR code integration ensures a seamless and secure attendance
                    process, while the downloadable and filterable dashboard makes data management
                    straightforward and efficient. If you’re looking for an innovative attendance
                    solution, check out the repository for more details.
                </p>
            </div>
        ),
    },
    {
        href: 'https://github.com/almajulioo/gogadai',
        title: 'GoGadai',
        description:
            'This project is a website for electronic pawn services that I developed using HTML, CSS, and JavaScript.',
        thumbnail: gogadai1,
        images: [gogadai1, gogadai2, gogadai3],
        stack: ['HTML', 'CSS', 'JavaScript'],
        slug: 'gogadai',
        content: (
            <div>
                <p>
                    In developing the GoGadai website, I used HTML to structure the page
                    semantically, CSS to design an attractive and responsive interface, and
                    JavaScript to add interactive elements to the website. I ensured that every
                    element was designed with attention to detail to create an intuitive and
                    enjoyable user experience. Additionally, the website was optimized to perform
                    well on various devices, including desktops, tablets, and smartphones.
                </p>
                <p>
                    This project was completed using a systematic approach, starting from client
                    needs analysis to implementation and testing. I employed an iterative
                    development method to ensure every feature worked as expected. This process
                    involved HTML validation, applying responsive design through CSS media queries,
                    and integrating animations and functionalities using vanilla JavaScript. The
                    result is a website that not only meets the client's needs but also adds value
                    through a modern design and optimal performance.
                </p>
            </div>
        ),
    },
    {
        href: 'https://github.com/almajulioo/Yakui-The-Explorer',
        title: 'Yakui The Explorer',
        description:
            'This project is a 2D adventure game developed using Python and PyGame, featuring an engaging storyline and challenging gameplay.',
        thumbnail: yakuiThumbnail,
        images: [yakui1, yakuiThumbnail, yakui2],
        stack: ['Python', 'PyGame'],
        slug: 'yakui-the-explorer',
        content: (
            <div>
                <p>
                    <strong>Yakui The Explorer</strong> is a 2D adventure game I developed using
                    Python and PyGame. The game follows the journey of a brave girl named Yakui, who
                    ventures into a mysterious labyrinth in search of a cure for her gravely ill
                    mother. The labyrinth is said to contain a miraculous medicine capable of curing
                    any disease, but Yakui is unaware of the dangers that await her inside. As she
                    navigates the labyrinth, Yakui faces numerous challenges, puzzles, and
                    adversaries while trying to find her way out.
                </p>
                <p>
                    The game combines storytelling, exploration, and strategic gameplay to create an
                    immersive experience. I implemented various features such as dynamic character
                    movement, interactive objects, and an engaging narrative flow. The development
                    process included designing custom sprites, implementing collision mechanics, and
                    creating a maze-like environment filled with obstacles and hidden treasures.
                    Each level was carefully crafted to balance difficulty and player engagement,
                    ensuring a fun and rewarding gameplay experience.
                </p>
                <p>
                    Developing this game allowed me to deepen my understanding of game mechanics and
                    Python programming. It was a rewarding experience to see Yakui's story come to
                    life through code, art, and gameplay. If you’re ready to help Yakui escape the
                    labyrinth and uncover the secrets within, give the game a try!
                </p>
            </div>
        ),
    },
    {
        href: 'https://github.com/almajulioo/laravelcms',
        title: 'Laravel CMS',
        description:
            'This project is a basic Laravel CMS template for managing articles with categories, featuring CRUD functionality, role-based access control, and minimal styling.',
        thumbnail: cms1,
        images: [cms1, cms3, cms2],
        stack: ['PHP', 'Laravel', 'MySQL'],
        slug: 'laravel-cms',
        content: (
            <div>
                <p>
                    <strong>Laravel CMS</strong> is a simple content management system built using
                    Laravel. It provides the core functionality needed to manage articles and their
                    respective categories. This project focuses on implementing basic CRUD (Create,
                    Read, Update, Delete) operations for articles and categories, along with role
                    and user management, making it a solid foundation for more advanced CMS
                    applications.
                </p>
                <p>
                    The CMS includes a role-based access control system, allowing admins to manage
                    user roles and permissions effectively. Users can be assigned different roles,
                    such as admin or editor, which determine their access to specific
                    functionalities within the application. This feature enhances security and
                    ensures proper management of content and users.
                </p>
                <p>
                    The project features minimal styling, prioritizing functionality and simplicity.
                    Users can add, edit, delete, and view articles and categories through an
                    intuitive interface. The backend leverages Laravel's powerful Eloquent ORM for
                    database interactions, ensuring smooth and efficient data management. Although
                    the styling is basic, the structure is designed to allow easy customization and
                    expansion.
                </p>
                <p>
                    Developing this project helped me gain deeper insights into Laravel's MVC
                    architecture, routing, database migrations, and role management. It serves as a
                    foundation for anyone looking to create a CMS or learn the basics of Laravel
                    development. If you’re interested in a straightforward yet functional Laravel
                    project, feel free to explore the repository and build upon it.
                </p>
            </div>
        ),
    },
];
