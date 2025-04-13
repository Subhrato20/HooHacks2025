# Outfitted.AI

## Inspiration
How can we make it easier to find clothes or shoes that match your vibe without spending hours browsing random websites? What if you could just take a picture of someone’s outfit and instantly get shoe recommendations that match the style—and links to buy similar ones?

That’s where this project started: a tool that bridges the gap between inspiration and action. We wanted to make fashion discovery feel intuitive, visual, and fast.

## What it does
Outfitted.AI takes a picture of a person and what they’re wearing, and generates four AI-designed concept shoes that match their style. The user picks their favorite, and we then reverse image search that concept shoe to find the most visually similar products available online. We scrape details like the product name, price, store, and image—then display them directly in the app.

It’s fashion discovery, powered by generative AI and real-time web search.

## How we built it
Our pipeline works in three main steps:

### Gemini Vision + Style Generation
We use Gemini 2.0 Flash to analyze the uploaded photo and use a combination of custom image generator and discriminator to judge and generate four concept shoes that match the clothing and aesthetic in the image.

### User Selection
The user chooses their favorite concept shoe from the four.

### Serp API + Web Scraping
We run a reverse image search on that concept shoe using the Serp API, grab the top visual matches from Google, and use Gemini 2.5 Pro to scrape product details like:

- Name  
- Price  
- Image  
- Store website

## Challenges we ran into
- **Prompt tuning for visual AI**: Getting consistent, stylish, and fashion-relevant results from Gemini took a lot of tweaking, especially from the experimental model. Sometimes the AI was too abstract or too literal.  
- **Reverse image search**: Using Serp API for this was powerful, but cleaning and filtering the results from Google took effort. Product pages aren’t structured the same way, so scraping had to be flexible.  
- **Timing and integration**: Making sure each part of the pipeline (photo → concept → product search) worked without lag or error was a challenge, especially during a hackathon crunch.  

## Accomplishments that we're proud of
- We built a full generative-to-search fashion pipeline in a weekend.  
- Successfully integrated image generation with real product scraping.  
- Made something that actually feels useful—you can go from a look you like to shoes you can buy, in a few clicks.  

## What we learned
- How to use Gemini to go beyond text prompts and into visual style generation.  
- How to reverse image search programmatically and work with real-world Google product search data.  
- How to chain multiple AI and scraping tools together into something that feels seamless to the user.  

## What's next for Outfitted.AI
- **Frontend UI**: We’re building a clean, responsive frontend so people can use this without touching code.  
- **Outfit-to-full-look**: Expand from just shoes to full outfit recommendations (tops, pants, accessories).  
- **User accounts & history**: Let users save styles they liked or come back to previous searches.  
- **E-commerce integrations**: Instead of scraping, directly partner with retailers for cleaner product data and affiliate opportunities.  

We think Outfitted.AI could evolve into a super useful style discovery tool—and we’re excited to keep pushing it.
