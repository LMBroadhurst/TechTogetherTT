## Mission
The go to place for anything related to the tech community. Organise events, hackathons, talk on forums, ask questions, and more.

## Getting Started

First, install the required dependencies

```bash
npm i
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dependencies

React Query (swap for RTK?)
Moment
Zod
Tailwind
Axios
Shadcn

## Dates
Must be parsed with the moment library

## Opinions
- Complicated component libraries are not useful, want everything to be as close to html as possible
    - This includes building custom buttons. Don't create a <Button />, should always be <Button>text</Button>

- React query or RTK? Maybe RTK for the inbuilt redux if the project grows to the point of needing it. 
    - [When I think of Mahi there is actually a massive overuse of redux, we add a bunch of Positions into a PositionHistory reducer that is recalled everytime the page is refreshed anyway]
