### build for business to plan and manage trips for thier clients integrating ai and stripe payment method

## tech stack used : react, react router v7, tailwind v4 , Syncfusion, appwrite,typescript for type safe code , free gemini ai for dynamic trip generation, stripe integation for secure payments, sentary


1. App Setup

- setup project (npm create vite@latest ./ -> select variant -> react router v7)
- appwrite (that we will use to manage our backend, set up account on https://cloud.appwrite.io/ -> add new project there)
- sentary (is a developer tool used to monitor and track errors, crashes, and performance issues in applications.) -> set up account on their website -> add new project
- create 2 terminal : name one dev (for development server), other terminal(for installing dependencies)
- run `npm install clsx tailwind-merge`  (*1)
- download public, app folder from assests (jsmastery video link).
   app : index.d.ts = for types, app.css = for fonts, prefined classes etc..
   lib : for utilities
   public : for images ,icons 
- Syncfusion setup (commmand given in desc link) & get the license key
  - in vite.config.ts (*1)
    ssr: {
        noExternal: [/@syncfusion/]
    }  
  - get the license key and put it in .env.local and then import it on root.tsx (above layout)

--------------------------------------------------------------------------------------------------
2. Routing
- routes : make a new route dashboard and config it in routes.ts
- make admin-layout.tsx file and use layout method in routes.ts to show the pages inside it
- create new page/route all-users.tsx and use it in admin-layout.tsx inside layout method

--------------------------------------------------------------------------------------------------
3. Dashboard layout
- create components folder -> Navitems.tsx component 
- create index.ts to export all other component from this single file
- import those component in admin-layout.tsx

- map over sidebarItems that you have to import from ~contants/index.ts in NavItems.tsx file
- use NavLink from react-router so that we can use isActive functionality
- move lib folder into app folder, install dayjs library that we will use later `npm install dayjs`
- use cn() from utils.ts in NavItems to use css styles conditionally (clsx) and clean repeated css (tsmerge)
- to understand `cn("group nav-item", {'bg-primary-100 !text-white':isActive })` & how 
  clsx is working here // check (*1) gemini chat (react-dash-expl)  
- create footer (from user obj) in NavItems.tsx -> create MobileSidbar component and import MobileSidbar
  in NavItems.tsx, make toggleSidebar function and then pass it as prop in NavItems.tsx
- create Header.tsx for header part (bcz that is same in all the pages in figma)
    - inside Header.tsx, in title i used cn function why? : becuase here i want Conditional Class of tailwind ( i want to show the home page title little larger than the other pages ) -> that's why we used cn()

--------------------------------------------------------------------------------------------------
4. Admin dashboard UI (the content of dashboard)

- first make tripCard and StatsCard components and import them in dashboard
- make dashboardStats obj for dummy content (creating a dummy js object is a good practice as you will know in future
  what type of content you need to store in database as you have alreaady put there number, string etc...)
- pass the dashboardStats obj props to the StatsCard component
- destructure the props and use StatsCard type that i declared in a separate file called index.d.ts
    - in index.d.ts, i used declare keyword (declare keyword ke wajah we can use this type in whole application without import / global type declaration) 
- same do it for TripCard & export both components from components -> index.ts
- make dashboardStats dummy data obj & destructure it and pass them as props and recieve the props in their
  respective components file (StatsCard.tsx & TripCard.tsx)
    - copy all the dummy data from dashboard and all users from descp link and paste it in constants -> index.ts
    - export all with export keyword and import them in dashboard 
    
- 


Annotations Explainations:
1. (*1) check gemini chat (react-dash-expl)
2. 