# UA-Dopomoga

A web platform for promoting volunteerism and mutual aid culture in Ukraine.

## About the Project

UA-Dopomoga is a website built with Astro that showcases volunteer initiatives, resources, and news for those providing help in Ukraine. The platform aims to connect volunteers, share important information, and promote a culture of mutual assistance.

## Features

- **News Feed**: Display latest posts about volunteer initiatives
- **Resource Directory**: Information for volunteers and those seeking help
- **Content Management**: Easy content updates through Markdown files
- **Responsive Design**: Works on all devices
- **Bilingual Support**: Content in Ukrainian and English (planned)

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/olyaprykhodko/ua-dopomoga.git

# Navigate to project directory
cd ua-dopomoga

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
ua-dopomoga/
├── public/               # Static assets
│   └── images/
│       └── posts/        # Blog post images
├── src/
│   ├── assets/           # Project assets (CSS, images)
│   ├── components/       # Astro components
│   ├── content/          # Content collections
│   │   └── posts/        # Blog posts in Markdown
│   ├── data/             # JSON data files
│   │   └── posts/        # Legacy posts data
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page components
│   │   └── posts/        # Dynamic post pages
│   └── utils/            # Utility functions
└── README.md             # This file
```

## Content Management

### Adding New Posts via GitHub

1. Navigate to the repository on GitHub.
2. Go to the `public/content-images/posts/new-posts` directory.
3. Upload your images to the new folder by clicking "Add file" > "Upload files".  
   _After uploading, make sure to click "Commit changes" at the bottom to save the images and the folder._
4. Go to the `src/content/posts` directory.
5. Click the "Add file" button and select "Create new file".
6. Name your file with a `.md` extension (e.g., `new-post.md`).
7. Add your frontmatter and content using the template below.

#### Post Template

````markdown
---
title: 'Title of your post'
images:
    - src: '/content-images/posts/new-posts/image1.jpg'
        alt: 'Description of image 1'
    - src: '/content-images/posts/new-posts/image2.jpg'
        alt: 'Description of image 2'
date: YYYY-MM-DD
cta: 'Дізнатись більше'
---

Main content of your post goes here. You can use **Markdown** formatting.

To display multiple images in your post, add them to the `images` array in the frontmatter as shown above. Each image should have a `src` (path to the image) and an `alt` (description for accessibility).

You can reference these images in your content using standard Markdown syntax:

```markdown
![Description of image 1](/content-images/posts/new-posts/image1.jpg)
![Description of image 2](/content-images/posts/new-posts/image2.jpg)
```
````

## Subheading

- List item 1
- List item 2

[Link text](https://example.com)


### Adding Images

1. Go to the `public/content-images/posts/new-posts` directory
2. Click "Add file" > "Upload files"
3. Upload all image files you want to include in your post
4. Commit the changes

Be sure to update the `images` array in your post's frontmatter with the correct file names and descriptions.

## Development

### Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
````

### Adding Components

To add a new component:

1. Create a new file in components
2. Import and use it in your pages or other components

## Deployment

This project can be deployed on any static hosting platform like:

- Netlify
- Vercel
- GitHub Pages

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

Project Link: [https://github.com/your-username/ua-dopomoga](https://github.com/your-username/ua-dopomoga)
