Engineering Internship Kata
=================

Beam is an exciting company, founded on the idea that everyone deserves access to dental care. As such, we want to share this vision in a presentable and exciting way!
This kata involves bringing a marketing site from a mock up to reality.


Instructions
------------
Please read through the user stories below and implement the functionality to complete them according to their requirements. The code design is entirely up to you as long as the solution can be run with npm or yarn start/opening an HTML file.

As there are often trade offs when crafting a solution, the following is the priority of what we are considering when reviewing your kata:
- Functionality - Does it fulfill the requirements and work correctly?
- Style - Does the solution adhere to the mock up?
- Responsiveness - Does the solution respond appropriately across browsers and across screen sizes?

Please add a section explaining the technical and style decisions involved in designing your solution. What options were you considering at various levels (eg. breakpoint choices, layout choices, and design, as applicable) and what were the tradeoffs in choosing one option over another? Feel free to include this section here in this README.

Resources to get you started:

- [Figma Mockup](https://www.figma.com/proto/ZN9GQfR0wSgf6jGALBb0uM/Web-Dev-Kata?node-id=1%3A2&scaling=min-zoom)
    - Note: If you don't have a Figma account, one would need to be created in order to get the editor view
- [How to export assets from Figma](https://help.figma.com/hc/en-us/articles/360040514533-Export-to-PNG-JPG-SVG-or-PDF-with-Export-Settings)
- For a guide to working with oEmbed + Vimeo videos, [check out this link]('https://developer.vimeo.com/api/oembed/videos'). Alternatively, you can [visit this link](https://vimeo.com/api/oembed.json?url=https://vimeo.com/327864855) for metadata to help with embedding the marketing video referenced in this guide.

Submitting your work to Beam
----------------------------
Please include a .nvmrc file with your submission so we know version of node you are using. There are differences between versions that can be significant to your application's runtime versus your reviewer's installed node version.

Once you're happy with your submission, you can send it back in one of two formats; either as a git bundle or a zip file.

To create the git bundle simply execute:

```shell
cd engineering-internship-kata
git bundle create engineering-internship-kata.bundle <YOUR BRANCH NAME HERE>
```

This will create a .bundle file which contains the entire git repository in binary form, so you can easily send it as an attachment. Alternatively, you could zip the project instead.

To ensure that our review of your kata remains as unbiased as possible, your submission will be anonymized before it is reviewed. To help us with this process, please double check that any personally identifiable information, such as your name or email address, is removed from your code, readme or any commit messages. Your author and committer information will be scrubbed by our anonymizing process.

High Level Scope
--------------------
At a high level, this kata should accomplish the following:
* Page Layout as close as possible to the one provided in the mock up
* Page should use semantic HTML
* Provide a responsive design depending on screen size (desktop and mobile)

User Stories
--------------
**Page Layout**

_As a Marketing Executive_<br>
_In order to promote Beam's Mission_<br>
_I want to view Beam's Mission and Vision page_<br>

**Acceptance Criteria**
* Create a cross-browser supported (Chrome, Safari, Edge) layout as close to the mock up as possible
* Leadership links and images should leverage the JSON Noted below
* Other links can behave as links but do not need to go anywhere
* Ensure the hover effect is performed over each leadership team member
* Provide a responsive design depending on screen size (desktop and mobile)
 
 <br>

***Responsive Design***
_As a Marketing Executive_<br>
_In order to increase user friendless and broaden our impact_<br>
_I want the marketing page to be responsive_<br>

We have intentionally left out a responsive design layout from the mock up. This is an opportunity for us to see how you could implement a responsive design, given the desktop specs version.

**Acceptance Criteria**

* Page is responsive for both desktop and mobile

***The Marketing API***

Please read the user story on the next page and implement the functionality to complete them according to their requirements.
Resources

* Figma Mockup https://www.figma.com/proto/ZN9GQfR0wSgf6jGALBb0uM/Web-Dev-Kata?node-id=1%3A2&scaling=min-zoom


***User Story***

***Load Leadership Team from an API***

As a Marketing Executive I want to view the leadership team dynamically So that there’s not a code change required when changes in leadership occur


***Scope***

Replace the statically loaded leadership with leadership that comes from the following API: https://beamtech.github.io/marketing-kata-html/leadership-team.json

