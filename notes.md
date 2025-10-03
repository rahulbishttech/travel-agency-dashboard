### build for business to plan and manage trips for thier clients integrating ai and stripe payment method

## tech stack used : react, react router v7, tailwind v4 , Syncfusion, appwrite,typescript for type safe code , free gemini ai for dynamic trip generation, stripe integation for secure payments, sentary


1. setup project, appwrite, sentary
2. create 2 terminal : name one dev (for development server), other terminal(for installing dependencies)
3. run `npm install clsx tailwind-merge`  (*1)
4. download public, app folder from assests.
   app : index.d.ts = for types, app.css = for fonts, prefined classes etc..
   lib : for utilities
   public : for images ,icons
5. git push then Syncfusion setup (commmand given in desc link)
  - in vite.config.ts (*1)
    ssr: {
        noExternal: [/@syncfusion/]
    }  
  - get the license key and put it in .env.local and then import it on root.tsx (above layout)
6. 





Annotations Explainations:
1. (*1) check gemini chat (react-dash-expl)
2. 