
        const toolsData = [
            {
                name: "ChatGPT",
                category: "AI Writing",
                description: "Conversational AI that can help with writing, coding, analysis, and creative tasks. One of the most versatile AI assistants available.",
                icon: "✍️",
                url: "https://chat.openai.com"
            },
            {
                name: "Midjourney",
                category: "AI Image",
                description: "Create stunning, artistic images from text descriptions. Perfect for designers and creative professionals.",
                icon: "🎨",
                url: "https://midjourney.com"
            },
            {
                name: "DALL-E 3",
                category: "AI Image",
                description: "Advanced AI image generator by OpenAI. Creates highly detailed and accurate images from text prompts.",
                icon: "🖼️",
                url: "https://openai.com/dall-e-3"
            },
            {
                name: "Jasper AI",
                category: "AI Writing",
                description: "AI writing assistant specialized in marketing copy, blog posts, and content creation for businesses.",
                icon: "📝",
                url: "https://jasper.ai"
            },
            {
                name: "Copy.ai",
                category: "AI Writing",
                description: "Generate marketing copy, product descriptions, and social media content in seconds.",
                icon: "📄",
                url: "https://copy.ai"
            },
            {
                name: "Runway ML",
                category: "AI Video",
                description: "AI-powered video editing and generation tool. Create professional videos with text-to-video capabilities.",
                icon: "🎬",
                url: "https://runwayml.com"
            },
            {
                name: "Synthesia",
                category: "AI Video",
                description: "Create AI-generated videos with virtual avatars. Perfect for training videos and presentations.",
                icon: "🎥",
                url: "https://synthesia.io"
            },
            {
                name: "GitHub Copilot",
                category: "AI Coding",
                description: "AI pair programmer that helps you write code faster with intelligent suggestions and completions.",
                icon: "💻",
                url: "https://github.com/features/copilot"
            },
            {
                name: "Tabnine",
                category: "AI Coding",
                description: "AI code completion tool that learns from your coding patterns to provide personalized suggestions.",
                icon: "⌨️",
                url: "https://tabnine.com"
            },
            {
                name: "Grammarly",
                category: "AI Writing",
                description: "AI-powered writing assistant that checks grammar, spelling, and suggests improvements to your writing.",
                icon: "✔️",
                url: "https://grammarly.com"
            },
            {
                name: "Stable Diffusion",
                category: "AI Image",
                description: "Open-source AI image generator that creates images from text descriptions. Highly customizable.",
                icon: "🌟",
                url: "https://stability.ai"
            },
            {
                name: "ElevenLabs",
                category: "AI Audio",
                description: "Generate realistic AI voices and speech. Perfect for voiceovers, audiobooks, and content creation.",
                icon: "🎙️",
                url: "https://elevenlabs.io"
            },
            {
                name: "Murf AI",
                category: "AI Audio",
                description: "Create studio-quality voiceovers with AI voices. Great for videos, presentations, and podcasts.",
                icon: "🔊",
                url: "https://murf.ai"
            },
            {
                name: "Notion AI",
                category: "AI Productivity",
                description: "AI assistant integrated into Notion for writing, brainstorming, and organizing your workspace.",
                icon: "📋",
                url: "https://notion.so"
            },
            {
                name: "Zapier AI",
                category: "AI Productivity",
                description: "Automate workflows and connect apps using AI. Streamline your business processes effortlessly.",
                icon: "⚡",
                url: "https://zapier.com"
            },
            {
                name: "Claude",
                category: "AI Writing",
                description: "Advanced AI assistant by Anthropic for writing, analysis, coding, and complex reasoning tasks.",
                icon: "🧠",
                url: "https://claude.ai"
            },
            {
                name: "Pictory",
                category: "AI Video",
                description: "Turn text content into engaging videos automatically. Perfect for social media and marketing.",
                icon: "📹",
                url: "https://pictory.ai"
            },
            {
                name: "Canva AI",
                category: "AI Design",
                description: "Design graphics, presentations, and social media content with AI-powered design suggestions.",
                icon: "🎨",
                url: "https://canva.com"
            },
            {
                name: "Beautiful.ai",
                category: "AI Design",
                description: "Create stunning presentations automatically with AI-powered design intelligence.",
                icon: "📊",
                url: "https://beautiful.ai"
            },
            {
                name: "Perplexity AI",
                category: "AI Research",
                description: "AI-powered search engine that provides detailed answers with sources and citations.",
                icon: "🔍",
                url: "https://perplexity.ai"
            },
            {
                name: "Replit AI",
                category: "AI Coding",
                description: "AI-powered coding assistant integrated into Replit. Build apps faster with intelligent code generation.",
                icon: "🚀",
                url: "https://replit.com"
            },
            {
                name: "Descript",
                category: "AI Audio",
                description: "Edit audio and video by editing text. AI-powered transcription and voice cloning capabilities.",
                icon: "🎧",
                url: "https://descript.com"
            }
        ];

        let currentCategory = 'All Tools';
        let searchTerm = '';

        const categories = [
            'All Tools',
            'AI Writing',
            'AI Image',
            'AI Video',
            'AI Coding',
            'AI Audio',
            'AI Productivity',
            'AI Design',
            'AI Research'
        ];

        function renderFilterButtons() {
            const filterContainer = document.getElementById('filterButtons');
            
            filterContainer.innerHTML = categories.map(cat => `
                <button class="filter-btn ${cat === 'All Tools' ? 'active' : ''}" data-category="${cat}">
                    ${cat}
                </button>
            `).join('');

            filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    currentCategory = this.dataset.category;
                    renderTools();
                });
            });
        }

        function filterTools() {
            return toolsData.filter(tool => {
                const matchesCategory = currentCategory === 'All Tools' || tool.category === currentCategory;
                const matchesSearch = searchTerm === '' || 
                    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    tool.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    tool.description.toLowerCase().includes(searchTerm.toLowerCase());
                
                return matchesCategory && matchesSearch;
            });
        }

        function updateResultsCount(count) {
            const resultsCount = document.getElementById('resultsCount');
            if (searchTerm || currentCategory !== 'All Tools') {
                resultsCount.textContent = `Showing ${count} tool${count !== 1 ? 's' : ''}`;
            } else {
                resultsCount.textContent = `${count} AI tools available`;
            }
        }

        function renderTools() {
            const toolsGrid = document.getElementById('toolsGrid');
            const filteredTools = filterTools();

            updateResultsCount(filteredTools.length);

            if (filteredTools.length === 0) {
                toolsGrid.innerHTML = '<div class="no-results">⚠️ No tools found. Try a different search or category.</div>';
                return;
            }

            toolsGrid.innerHTML = filteredTools.map(tool => `
                <div class="tool-card" data-url="${tool.url}">
                    <div class="tool-header">
                        <div class="tool-icon">${tool.icon}</div>
                        <div class="tool-title">${tool.name}</div>
                    </div>
                    <div class="tool-category">${tool.category}</div>
                    <div class="tool-description">${tool.description}</div>
                    <a href="${tool.url}" class="tool-link" target="_blank" rel="noopener noreferrer">Visit Tool</a>
                </div>
            `).join('');

            // Attach event listeners after rendering to avoid inline handlers and ensure proper event behavior
            toolsGrid.querySelectorAll('.tool-card').forEach(card => {
                const url = card.dataset.url;
                card.addEventListener('click', () => {
                    if (url) window.open(url, '_blank');
                });

                const link = card.querySelector('a.tool-link');
                if (link) {
                    link.addEventListener('click', (e) => {
                        e.stopPropagation();
                    });
                }
            });
        }

        document.getElementById('searchInput').addEventListener('input', function(e) {
            searchTerm = e.target.value;
            renderTools();
        });

        renderFilterButtons();
        renderTools();
    