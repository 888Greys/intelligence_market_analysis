# Contributing to Kenya Market Intelligence Dashboard

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## 🚀 Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

### Pull Requests Process

1. **Fork the repo** and create your branch from `main`
2. **Add tests** if you've added code that should be tested
3. **Update documentation** if you've changed APIs
4. **Ensure the test suite passes**
5. **Make sure your code lints**
6. **Issue the pull request**

### Development Setup

```bash
# Clone your fork
git clone https://github.com/yourusername/kenya-market-intelligence-dashboard.git
cd kenya-market-intelligence-dashboard

# Install dependencies
npm install

# Set up environment
export GOOGLE_GENERATIVE_AI_API_KEY="your-api-key"

# Start development server
npm run dev
```

## 🐛 Report Bugs Using GitHub Issues

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/yourusername/kenya-market-intelligence-dashboard/issues).

### Great Bug Reports Include:

- **Summary** - A quick summary of the issue
- **Steps to reproduce** - Be specific! Provide sample code if possible
- **Expected behavior** - What you expected to happen
- **Actual behavior** - What actually happened
- **Environment** - OS, browser, Node.js version, etc.
- **Screenshots** - If applicable

### Bug Report Template

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. macOS, Windows, Linux]
 - Browser: [e.g. Chrome, Safari, Firefox]
 - Node.js version: [e.g. 18.0.0]
 - Project version: [e.g. 1.0.0]

**Additional context**
Add any other context about the problem here.
```

## 💡 Feature Requests

Feature requests are welcome! Please provide:

- **Use case** - Why would this feature be useful?
- **Proposed solution** - How should it work?
- **Alternatives** - What alternatives have you considered?
- **Kenya market relevance** - How does this benefit East African users?

## 🎨 Code Style Guidelines

### TypeScript/JavaScript

- Use **TypeScript** for all new code
- Follow **ESLint** rules (when configured)
- Use **async/await** instead of callbacks
- Prefer **const** over **let**, avoid **var**
- Use **meaningful variable names**

```typescript
// Good
const marketTrendsData = await fetchMarketData(topic);

// Bad
const d = await fetchMarketData(topic);
```

### CSS/HTML

- Use **semantic HTML elements**
- Follow **mobile-first** responsive design
- Use **CSS Grid** and **Flexbox** for layouts
- Maintain **consistent spacing** (multiples of 4px/8px)

### API Design

- Use **RESTful** conventions
- Provide **clear error messages**
- Include **proper HTTP status codes**
- Document **all endpoints**

## 🇰🇪 Kenya Market Focus

When contributing, please consider:

### Target Audience
- **Kenyan businesses** and entrepreneurs
- **East African investors**
- **International companies** entering Kenya
- **Government agencies** and NGOs
- **Academic researchers**

### Market Priorities
1. **Fintech** (M-Pesa, digital lending, crypto)
2. **Agriculture** (AgriTech, supply chain)
3. **Energy** (Solar, mini-grids, clean energy)
4. **E-commerce** (Local vs international platforms)
5. **Healthcare** (Telemedicine, digital health)

### Data Sources
- Prioritize **Kenyan government** sources (CBK, KNBS)
- Include **regional organizations** (EAC, African Development Bank)
- Reference **local companies** (Safaricom, Equity Bank)
- Consider **mobile-first** user experience

## 🔧 Technical Contributions

### Adding New Research Categories

1. **Update frontend** (`public/index.html`)
   ```html
   <button class="category-btn" data-topic="your-research-topic">
       🔸 Your Category Name
   </button>
   ```

2. **Add fallback sources** (`server.ts`)
   ```typescript
   if (topic.toLowerCase().includes('your-keyword')) {
     return [
       {
         title: "Relevant Kenyan Source",
         url: "https://example.co.ke/report",
         description: "Description of the source",
         date: baseDate
       }
     ];
   }
   ```

3. **Test thoroughly** with real API calls

### Improving Mobile Experience

- Test on **actual mobile devices** (not just browser dev tools)
- Ensure **touch targets** are at least 44px
- Optimize **loading performance** on slow networks
- Consider **offline functionality** for poor connectivity

### Enhancing AI Research

- Improve **prompt engineering** for better results
- Add **data validation** with Zod schemas
- Implement **caching** for repeated queries
- Add **rate limiting** for API calls

## 📚 Documentation

### Code Comments

```typescript
/**
 * Fetches market data for a specific topic from multiple sources
 * @param topic - The market research topic to analyze
 * @returns Promise with market trends, charts, and sources
 * @throws Error if API key is missing or request fails
 */
async function fetchMarketData(topic: string): Promise<MarketData> {
  // Implementation
}
```

### README Updates

- Keep **installation instructions** current
- Update **feature list** when adding functionality
- Include **screenshots** for major UI changes
- Maintain **API documentation**

## 🧪 Testing

### Manual Testing Checklist

- [ ] **Desktop browsers** (Chrome, Firefox, Safari, Edge)
- [ ] **Mobile browsers** (iOS Safari, Chrome Mobile)
- [ ] **Network accessibility** from other devices
- [ ] **API key validation**
- [ ] **Error handling** (network failures, invalid inputs)
- [ ] **Mobile responsive** design
- [ ] **Chart rendering** on different screen sizes

### Automated Testing (Future)

We welcome contributions to add:
- **Unit tests** for utility functions
- **Integration tests** for API endpoints
- **E2E tests** for user workflows
- **Performance tests** for large datasets

## 📜 License

By contributing, you agree that your contributions will be licensed under the same ISC License that covers the project.

## 🤝 Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of:
- Age, body size, disability, ethnicity, gender identity and expression
- Level of experience, nationality, personal appearance, race, religion
- Sexual identity and orientation

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behavior includes:**
- Trolling, insulting/derogatory comments, and personal attacks
- Public or private harassment
- Publishing others' private information without permission
- Other conduct which could reasonably be considered inappropriate

## 📞 Questions?

Don't hesitate to reach out if you have questions:

- **Open an issue** for technical questions
- **Start a discussion** for broader topics
- **Contact maintainers** for urgent matters

---

**🇰🇪 Thank you for contributing to Kenya's digital transformation!**
