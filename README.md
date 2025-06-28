# Mexus Holdings International

A modern, responsive investment platform website built for Mexus Holdings International, facilitating investment opportunities across East Africa's key economic sectors.

![Mexus Holdings International](https://via.placeholder.com/1200x600/1e3a8a/ffffff?text=Mexus+Holdings+International)

## 🌟 Features

### Core Functionality
- **Multi-step Investment Application Process** - Streamlined onboarding for local and international investors
- **Sector-specific Investment Pages** - Detailed information on Manufacturing, Healthcare, Aviation, Renewables, Food Security, and Advanced Technology
- **Contact Management** - Integrated contact forms with Formspree backend
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **SEO Optimized** - Complete SEO implementation with sitemap, meta tags, and structured data

### Investment Solutions
- Advanced Technology Financing
- Renewables and Energy Finance
- Digitization Finance
- Supply Chain Finance
- Agritech Loans

### User Experience
- **Interactive UI Components** - Modern accordion FAQs, sliders, and animations
- **Dark/Light Theme Support** - Built-in theme provider
- **Mobile-first Design** - Responsive across all device sizes
- **Accessibility Compliant** - WCAG guidelines implementation

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Lucide React** - Beautiful icon library

### Backend & Services
- **Formspree** - Form handling and email notifications
- **Axios** - HTTP client for API requests

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Setup Instructions

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/mexus-holdings-international.git
   cd mexus-holdings-international
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Environment Setup**
   Create a \`.env.local\` file in the root directory:
   \`\`\`env
   # Formspree Configuration
   NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT=https://formspree.io/f/your-contact-form-id
   NEXT_PUBLIC_FORMSPREE_INVESTMENT_ENDPOINT=https://formspree.io/f/your-investment-form-id
   
   # Google Analytics (Optional)
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

\`\`\`
mexus-holdings-international/
├── app/                          # Next.js App Router pages
│   ├── about-us/                 # About Us pages
│   │   ├── careers/
│   │   ├── leadership/
│   │   └── our-mission/
│   ├── sectors/                  # Investment sectors
│   │   ├── advanced-technology/
│   │   ├── aviation/
│   │   ├── food-security/
│   │   ├── healthcare/
│   │   ├── manufacturing/
│   │   └── renewables/
│   ├── solutions/                # Investment solutions
│   │   ├── advanced-technology-financing/
│   │   ├── agritech-loans/
│   │   ├── digitization-finance/
│   │   ├── renewables-and-energy-finance/
│   │   └── supply-chain-finance/
│   ├── contact/                  # Contact page
│   ├── get-started/              # Investment application
│   ├── privacy-policy/           # Legal pages
│   ├── terms-of-service/
│   ├── sitemap/
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   ├── robots.txt                # SEO robots file
│   ├── sitemap.xml               # XML sitemap
│   └── manifest.json             # PWA manifest
├── components/                   # Reusable components
│   ├── ui/                       # shadcn/ui components
│   ├── home/                     # Homepage components
│   ├── sectors/                  # Sector page components
│   ├── site-header.tsx           # Navigation header
│   ├── site-footer.tsx           # Footer
│   └── theme-provider.tsx        # Theme management
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
├── public/                       # Static assets
└── README.md                     # Project documentation
\`\`\`

## 🎯 Usage

### For Investors
1. **Browse Investment Opportunities** - Explore different sectors and investment solutions
2. **Start Investment Journey** - Use the multi-step application process at \`/get-started\`
3. **Contact Team** - Reach out through the contact form for inquiries

### For Administrators
1. **Form Submissions** - Monitor contact and investment applications through Formspree dashboard
2. **Content Updates** - Modify sector information, investment solutions, and company details
3. **SEO Management** - Update meta tags, sitemap, and structured data as needed

## 🔧 Configuration

### Formspree Setup
1. Create accounts for contact and investment forms at [Formspree.io](https://formspree.io)
2. Update environment variables with your form endpoints
3. Configure email notifications and auto-responses

### SEO Configuration
1. Update \`app/layout.tsx\` with your Google verification code
2. Submit \`sitemap.xml\` to Google Search Console
3. Configure Google Analytics (optional)

### Theme Customization
- Modify \`tailwind.config.ts\` for custom colors and styling
- Update \`app/globals.css\` for global style overrides
- Customize components in \`components/ui/\` directory

## 🤝 Contributing

We welcome contributions to improve Mexus Holdings International website. Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (\`git checkout -b feature/amazing-feature\`)
3. **Commit your changes** (\`git commit -m 'Add some amazing feature'\`)
4. **Push to the branch** (\`git push origin feature/amazing-feature\`)
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure responsive design across all devices
- Test forms and user interactions thoroughly
- Maintain accessibility standards

## 📈 SEO Features

- **XML Sitemap** - Comprehensive sitemap for search engines
- **Meta Tags** - Optimized titles, descriptions, and keywords
- **Open Graph** - Social media sharing optimization
- **Structured Data** - Schema markup for better search understanding
- **Mobile Optimization** - Mobile-first responsive design
- **Core Web Vitals** - Performance optimization

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Other Platforms
- **Netlify** - Connect GitHub repo and deploy
- **AWS Amplify** - Full-stack deployment option
- **Traditional Hosting** - Build with \`npm run build\` and serve static files

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Designed and Developed by [BytebaseTech](https://bytebasetechnologies.com)**

BytebaseTech specializes in creating modern, scalable web applications and digital solutions for businesses across East Africa and beyond.

### Services:
- Custom Web Development
- Mobile App Development
- E-commerce Solutions
- Digital Marketing
- UI/UX Design

**Contact BytebaseTech:**
- Website: [https://bytebasetechnologies.com](https://bytebasetechnologies.com)
- Email: info@bytebasetechnologies.com

## 📞 Support

For technical support or questions about this project:

**Mexus Holdings International**
- Website: [https://mexusholdings.com](https://mexusholdings.com)
- Email: info@mexusholdings.com
- Phone: +256-772972249

**Development Support**
- Developer: [BytebaseTech](https://bytebasetechnologies.com)
- Technical Issues: Create an issue in this repository

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Formspree](https://formspree.io/) - Form handling service
- [Lucide](https://lucide.dev/) - Beautiful icon library

---

**Built with ❤️ by [BytebaseTech](https://bytebasetechnologies.com) for Mexus Holdings International**
