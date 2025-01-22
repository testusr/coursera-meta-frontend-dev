## Semantical tags

They describe the meaning of a web page and can help a search engine and accessibility software to figure out the content
of the web page (SEO). Like
<hx>

<article>
<nav>
<section>
<footer>
...

## Content Tags

Expresee the structuring of a text or information

<blockquote>
<figure>
<menu>
<li>
...

## How do search Engines - Search Engine Optimizations (SEO)

How search engines build there page ranking is not disclosed and is a business secret, but there are some best practices that can be followed and is a business secret, but there are some best practices that can be followed. .

### Meta Tags <meta name="..." content="...: >

unseen elements of a web page. Tags have been abused in the past and some search engines use it as spam indicator and some are not using them at all anymore, still
it is important to know that some of them have an effect on the search engine ranking like "author, description, keywords, robots, viewport" to only name a few.

<meta name="description|author| ...  .>

### <meta name="robot"

Gives analysing robots a hint on what to do with this content.

### <meta name="vieport

Helps to improve the experience on mobile devices, as the rendering engine will attempt to render the page as it would
render it on a desktop. There are many content tags to improve this experience like

`content="widht=device-widht, initial/scale=1.0"`

but it is also important for the SEO as many algorithms do include this information to rank the page.

## Layout Design

There are several standar layts that are offered by for example the bootstrap framework like
"Top navbar layout", "Carousel Layout", "Blog Layout" or the "Dashboard Layout" ... more layouts can be found on the [bootstrap examole page](https://getbootstrap.com/docs/4.0/examples/).

## Website previews

Some social networks, like FaceBook, generate little previews when linkin to external webpages as so called "shared links".
These previews are build based on [The Open Graph protocol](https://ogp.me/) (OPG) meta tags in the target page, indicating how this kind of preview shall be build.
OpenGraph meta tags follow a similar format as the already known meta tags:

### Open Graph Protocol

```
<head>
    <meta name="author" content="Jane Wilson">                <----- regular meta tage
    <meta property="og:title" content="My Firste Web Page" /> <----- open graph meta tage
</head
```

There is a default set of Open Graph tags that should be used

```
<head>
    <title>The Rock (1996)</title>
    <meta property="og:title" content="The Rock" />
    <meta property="og:type" content="video.movie" />
    <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
    <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
...
</head>
```

but there are quite a few more to choose from.

### Social Media Cards

Social Media Cards, also reffered to as "social cards" or "linked cards", are a feature used by various social media platforms to display rich, visual previews of links shared in posts.

Web social media cards, often referred to simply as "social cards" or "link cards," are a feature used by various social media platforms to display rich, visual previews of links shared in posts. Here's a breakdown of what they typically include and how they function:

Components of Social Media Cards:
Title: The title of the webpage or article.
Description: A brief snippet of text describing the content of the page.
Image: A thumbnail image related to the content, which helps in visually identifying the link.
Source/URL: The domain or URL of the site where the content originates.

#### How They Work:

Metadata: Websites use metadata like Open Graph protocol (for platforms like X, previously Twitter, and others) or Twitter Cards for X specifically, to define how the link should appear when shared. This metadata includes tags for title, description, image, and sometimes even video or audio content.
Crawling: When a link is shared on a social platform, the platform's crawler reads these metadata tags to generate the preview card.
Appearance: The card then appears in the feed, enhancing the visual appeal and providing context, which can lead to higher engagement rates since users get a quick overview of the content without needing to click through.

#### Benefits:

- Increased Engagement: Visuals and descriptions make posts more appealing, encouraging clicks and shares.
- Brand Consistency: They allow for consistent branding across different platforms.
- SEO and Sharing: While primarily for social sharing, well-implemented cards can also contribute to SEO by making shared content more discoverable and appealing.

#### Examples of Use:

- X (formerly Twitter) uses Twitter Cards to allow for different types of content display like summaries, photos, videos, etc.
- Facebook uses Open Graph to determine how links are displayed.
- LinkedIn also supports rich media through similar metadata.

_Implementation:_
To implement these for your website, you would typically add appropriate meta tags in the <head> section of your HTML document. For example:

html

```
<meta property="og:title" content="Title Here">
<meta property="og:description" content="Description Here">
<meta property="og:image" content="URL of Image">
<meta property="og:url" content="URL of Page">
```

Each platform might have slight variations or additional tags for specific functionalities, so it's beneficial to check the documentation for each social media platform you're targeting.

Social media cards significantly enhance how content is perceived and interacted with on social platforms, making them a crucial element for digital marketing and content sharing strategies.

# Forms and Validation

Client side validation and sever side validation. Client side validation gives immediate feedback but server side validation provides more security, mots applications do both.

Pseudo Class selectors in CSS to change attributes based on field status, like invalid on the client side.
