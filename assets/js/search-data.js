// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-antilibrary",
          title: "antilibrary",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/antilibrary/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "A collection of my public appearances, including presentations, speaker videos, and photos.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-llms-in-deutschland-how-ai-is-changing-german-software-and-why-you-should-care",
        
          title: "LLMs in Deutschland - How AI is Changing German Software (And Why You...",
        
        description: "An analysis of Germany&#39;s AI and LLM ecosystem, exploring the unique challenges and opportunities for businesses in the German market.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/llm-in-deutschland/";
          
        },
      },{id: "post-how-to-be-a-better-interviewer-from-someone-who-39-s-been-on-both-sides",
        
          title: "How to Be a Better Interviewer (From Someone Who&#39;s Been on Both Sides)...",
        
        description: "Practical tips and insights to improve your interviewing skills and make better hiring decisions based on real-world experience.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/how-to-be-a-better-interviewer/";
          
        },
      },{id: "post-designing-data-intensive-applications",
        
          title: "Designing Data-Intensive Applications",
        
        description: "A comprehensive guide to designing scalable, reliable, and maintainable data-intensive applications based on the principles from Martin Kleppmann&#39;s book.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/designing-data-intensive-applications/";
          
        },
      },{id: "post-deploying-hugo-sites-with-github-actions",
        
          title: "Deploying Hugo Sites with GitHub Actions",
        
        description: "A step-by-step guide to automating the deployment of Hugo static sites using GitHub Actions for continuous integration and deployment.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/deploy-hugo-github-actions/";
          
        },
      },{id: "post-the-best-ai-powered-coding-assistant-in-2025",
        
          title: "The Best AI-Powered Coding Assistant in 2025",
        
        description: "A comprehensive comparison of the top AI coding assistants available in 2025, their features, and how they&#39;re transforming software development.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/best-ai-powered-coding-assistant-in-2025/";
          
        },
      },{id: "post-an-apology-to-my-math-professors-10-years-too-late",
        
          title: "An Apology to My Math Professors (10 Years Too Late)",
        
        description: "A heartfelt reflection on the importance of mathematics in programming and a belated appreciation for the professors who tried to teach me.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/apology-to-my-math-professors/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-build-a-large-language-model",
          title: 'Build a Large Language Model',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/build-a-large-language-model/";
            },},{id: "books-building-llms-for-production",
          title: 'Building LLMs for Production',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/building-llms-for-production/";
            },},{id: "books-cracking-the-coding-interview",
          title: 'Cracking the Coding Interview',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ctci/";
            },},{id: "books-designing-data-intensive-applications",
          title: 'Designing Data-Intensive Applications',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/designing-data-intensive-applications/";
            },},{id: "books-the-hundred-page-language-models-book",
          title: 'The Hundred-Page Language Models Book',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/hundred-page-language-models-book/";
            },},{id: "books-the-hundred-page-machine-learning-book",
          title: 'The Hundred-Page Machine Learning Book',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/hundred-page-machine-learning-book/";
            },},{id: "books-llm-engineer-39-s-handbook",
          title: 'LLM Engineer&amp;#39;s Handbook',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/llm-engineers-handbook/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-maaslar",
          title: 'maaslar',
          description: "A project I&#39;m currently working on.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-koeln-wohnungsgenossenschaft",
          title: 'koeln-wohnungsgenossenschaft',
          description: "A social project with a focus on housing in Cologne.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-bittorrent-client",
          title: 'BitTorrent Client',
          description: "A side project to build a BitTorrent client and learn about P2P networking.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{id: "projects-custom-web-server",
          title: 'Custom Web Server',
          description: "Building a web server from scratch to understand its inner workings.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_project/";
            },},{id: "projects-cloud-resume-challenge",
          title: 'Cloud Resume Challenge',
          description: "Undertaking the Cloud Resume Challenge to build and showcase cloud skills.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/14_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%75%67%75%72%6B%6F%79%73%75%72%65%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ugurkoysuren", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/koysurenugur", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },];
